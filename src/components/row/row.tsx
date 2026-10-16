import type { CSSProperties, KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { useRectBlobPaths } from '../../hooks/use-rect-blob-paths';
import { surface as cardSurfaces } from '../../tokens';
import { cn } from '../../utils/style-helpers';
import {
  type SurfaceConfig,
  type SurfaceFillKey,
  type TextureProp,
  getSurfaceStyles,
} from '../../utils/textures';
import { SketchBorder, sketchOutline } from '../sketch-border';
import styles from './row.module.scss';

/** `sm` hides below 480px, `md` below 768px, `lg` below 1024px. */
export type RowBreakpoint = 'sm' | 'md' | 'lg';

export interface RowColumnConfig {
  /** Column width, as a grid-template-columns track. */
  width?: string;
  /** Hide this slot's column below the given breakpoint. */
  hideBelow?: RowBreakpoint;
}

export type RowColumnValue = string | RowColumnConfig;

export interface RowColumns {
  /** Width of the `id` slot (mono identifier). */
  id?: RowColumnValue;
  /** Width of the `title` slot — the main, truncating label. */
  title?: RowColumnValue;
  /** Width of the `meta` slot (a `MetaLine`). */
  meta?: RowColumnValue;
  /** Width of the `trailing` slot (stamps, actions). */
  trailing?: RowColumnValue;
}

const DEFAULT_COLUMN_WIDTHS: Required<Record<keyof RowColumns, string>> = {
  id: 'auto',
  title: '1fr',
  meta: 'auto',
  trailing: 'auto',
};

const HIDE_BELOW_CLASS: Record<RowBreakpoint, string> = {
  sm: styles.hideBelowSm,
  md: styles.hideBelowMd,
  lg: styles.hideBelowLg,
};

function resolveColumn(value: RowColumnValue | undefined, fallbackWidth: string) {
  if (value == null)
    return { width: fallbackWidth, hideBelow: undefined as RowBreakpoint | undefined };
  if (typeof value === 'string') return { width: value, hideBelow: undefined };
  return { width: value.width ?? fallbackWidth, hideBelow: value.hideBelow };
}

export function resolveRowColumns(columns?: RowColumns) {
  return {
    id: resolveColumn(columns?.id, DEFAULT_COLUMN_WIDTHS.id),
    title: resolveColumn(columns?.title, DEFAULT_COLUMN_WIDTHS.title),
    meta: resolveColumn(columns?.meta, DEFAULT_COLUMN_WIDTHS.meta),
    trailing: resolveColumn(columns?.trailing, DEFAULT_COLUMN_WIDTHS.trailing),
  };
}

export function rowHideBelowClass(breakpoint?: RowBreakpoint) {
  return breakpoint ? HIDE_BELOW_CLASS[breakpoint] : undefined;
}

export type RowSurface = 'none' | 'card' | 'nestedCard';

export interface RowSurfaceOverrides {
  /** Replaces the surface's default texture, exactly as `Card`'s `texture` does. */
  texture?: TextureProp;
  /** Explicit palette fill for the surface; overrides the texture's own colour, grain stays. */
  fill?: SurfaceFillKey;
  /** Replaces the surface's default shade (its darker step). Ignored when `fill` is set. */
  shade?: boolean;
}

export function resolveRowSurface(
  surface: RowSurface,
  overrides: RowSurfaceOverrides = {},
): {
  textureConfig: SurfaceConfig | null;
  textureClass: string | null;
  textureStyle: CSSProperties;
  textureFill: CSSProperties['backgroundColor'];
} {
  const baseConfig: SurfaceConfig | null =
    surface === 'card'
      ? cardSurfaces.card
      : surface === 'nestedCard'
        ? cardSurfaces.nestedCard
        : null;
  const textureClass =
    surface === 'card'
      ? styles.textureCard
      : surface === 'nestedCard'
        ? styles.textureNestedCard
        : null;

  if (!baseConfig) {
    return { textureConfig: null, textureClass: null, textureStyle: {}, textureFill: undefined };
  }

  const { texture, fill, shade } = overrides;
  const textureConfig: SurfaceConfig =
    texture === undefined || texture === true
      ? { ...baseConfig }
      : texture === false
        ? { ...baseConfig, texture: undefined }
        : typeof texture === 'string'
          ? { ...baseConfig, texture }
          : { ...baseConfig, ...texture };

  if (fill) textureConfig.fill = fill;
  else if (shade !== undefined) textureConfig.shade = shade;

  const { backgroundColor: textureFill, ...textureStyle } =
    texture === false ? { backgroundColor: undefined } : getSurfaceStyles(textureConfig);
  return { textureConfig, textureClass, textureStyle, textureFill };
}

export interface RowProps {
  /** Mono identifier at the row's left edge (e.g. a record id). */
  id?: ReactNode;
  /** Main label — truncates with an ellipsis when the cell narrows. */
  title?: ReactNode;
  /** A `MetaLine` describing the row beneath its title. */
  meta?: ReactNode;
  /** Stamps and actions, right-aligned. */
  trailing?: ReactNode;
  /**
   * Grid-template-columns widths for the four slots, in the order `id title meta trailing`.
   * Pass a string (`auto`, `minmax(...)`, `1fr`, `120px`) or a `{ width, hideBelow }` config
   * to hide that slot below a breakpoint. Any omitted slot is sized by its content. Under
   * 480px the template collapses to a single column with `title` on top — see `.module.scss`.
   */
  columns?: RowColumns;
  /** Row surface. `none` is a ruled cell (the Divider between rows draws the line),
   *  `card` and `nestedCard` give the row its own paper surface. */
  surface?: RowSurface;
  /** Replaces the surface's default texture, exactly as `Card`'s `texture` does. Ignored on `surface="none"`. */
  texture?: TextureProp;
  /** Explicit palette fill for the surface; overrides the texture's own colour, grain stays. Ignored on `surface="none"`. */
  fill?: SurfaceFillKey;
  /** Replaces the surface's default shade (its darker step). Ignored when `fill` is set, or on `surface="none"`. */
  shade?: boolean;
  /** Make the whole row one hit target. Adds role/tabIndex/keyboard activation. */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  /** Tooltip / a11y label for the row when used as a single hit target. */
  ariaLabel?: string;
  /** Draw the amber outline paper-camp uses to mark a deep-linked row. */
  highlighted?: boolean;
  /** Draw the green wash blob and pencil ring `ListItem` draws for the current entry. */
  active?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Row({
  id,
  title,
  meta,
  trailing,
  columns,
  surface = 'none',
  texture,
  fill,
  shade,
  onClick,
  ariaLabel,
  highlighted = false,
  active = false,
  className,
  style,
}: RowProps) {
  const resolved = resolveRowColumns(columns);
  const template = [
    id != null && resolved.id.width,
    title != null && resolved.title.width,
    meta != null && resolved.meta.width,
    trailing != null && resolved.trailing.width,
  ]
    .filter((width): width is string => typeof width === 'string')
    .join(' ');
  const isClickable = !!onClick;
  const paths = useRectBlobPaths(0.5);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(event as unknown as MouseEvent<HTMLDivElement>);
    }
  };

  const { textureConfig, textureClass, textureStyle, textureFill } = resolveRowSurface(surface, {
    texture,
    fill,
    shade,
  });

  const row = (
    <div
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-label={isClickable ? ariaLabel : undefined}
      onClick={onClick}
      onKeyDown={isClickable ? handleKeyDown : undefined}
      style={
        {
          ...style,
          '--row-columns': template,
          ...textureStyle,
          ...(textureFill ? { '--row-surface-fill': textureFill } : null),
        } as CSSProperties
      }
      className={cn(
        styles.row,
        textureClass ?? styles.surfaceNone,
        isClickable && styles.clickable,
        !isClickable && !active && styles.static,
        highlighted && styles.highlighted,
        active && styles.active,
        className,
      )}
      aria-current={active ? 'page' : undefined}
    >
      {active && (
        <svg
          className={styles.blobBg}
          viewBox="-10 -10 120 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d={paths.blob} className={styles.blobFill} />
          <path d={paths.ring} className={styles.blobRing} />
        </svg>
      )}
      {id != null && (
        <div className={cn(styles.id, rowHideBelowClass(resolved.id.hideBelow))}>{id}</div>
      )}
      {title != null && (
        <div className={cn(styles.title, rowHideBelowClass(resolved.title.hideBelow))}>{title}</div>
      )}
      {meta != null && (
        <div className={cn(styles.meta, rowHideBelowClass(resolved.meta.hideBelow))}>{meta}</div>
      )}
      {trailing != null && (
        <div className={cn(styles.trailing, rowHideBelowClass(resolved.trailing.hideBelow))}>
          {trailing}
        </div>
      )}
    </div>
  );

  if (!textureConfig) return row;

  return (
    <div className={styles.surfaceBorder}>
      <SketchBorder clip straight {...sketchOutline.surface} />
      {row}
    </div>
  );
}
