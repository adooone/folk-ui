import type { ComponentType } from 'react';
import type { PropDef } from '../../components/prop-table';
import { ButtonEntry } from '../entries/button';
import { IconButtonEntry } from '../entries/icon-button';
import { StampEntry } from '../entries/stamp';
import type { SectionId } from '../shell/sections';

export type Category =
  | 'Typography'
  | 'Basic'
  | 'Form'
  | 'Layout'
  | 'Navigation'
  | 'Sidebar & settings'
  | 'Feedback'
  | 'Charts'
  | 'Overlay';

export interface EntryDef {
  id: string;
  name: string;
  description: string;
  section: SectionId;
  category: Category;
  props: PropDef[];
  Entry: ComponentType;
}

const disabledProp: PropDef = {
  name: 'disabled',
  type: 'boolean',
  default: 'false',
  description: 'Disable interactions',
};

export const entries: EntryDef[] = [
  {
    id: 'button',
    name: 'Button',
    description: 'A blob-backed button with five variants and a hover wobble.',
    section: 'components',
    category: 'Basic',
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'ghost' | 'danger' | 'link'",
        default: "'primary'",
        description: 'Visual style variant',
      },
      {
        name: 'size',
        type: "'tiny' | 'small' | 'medium' | 'large'",
        default: "'medium'",
        description: 'Component size',
      },
      {
        name: 'icon',
        type: 'ReactNode',
        description: 'Left icon element',
      },
      {
        name: 'iconRight',
        type: 'ReactNode',
        description: 'Right icon element',
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        default: 'false',
        description: 'Expand to full width',
      },
      {
        name: 'onClick',
        type: '() => void',
        description: 'Click handler',
      },
      disabledProp,
      {
        name: 'wobble',
        type: 'number (0-1)',
        default: '0.5',
        description: 'Blob shape wobble intensity',
      },
    ],
    Entry: ButtonEntry,
  },
  {
    id: 'icon-button',
    name: 'IconButton',
    description: "An icon-only button sharing Button's blob background.",
    section: 'components',
    category: 'Basic',
    props: [
      {
        name: 'icon',
        type: 'ReactNode',
        required: true,
        description: 'Icon content',
      },
      {
        name: 'variant',
        type: "'default' | 'ghost' | 'danger'",
        default: "'default'",
        description: 'Visual style variant',
      },
      {
        name: 'size',
        type: "'tiny' | 'small' | 'medium' | 'large'",
        default: "'medium'",
        description: 'Component size',
      },
      {
        name: 'label',
        type: 'string',
        description: 'Accessibility label',
      },
      disabledProp,
      {
        name: 'wobble',
        type: 'number (0-1)',
        default: '0.5',
        description: 'Blob shape wobble intensity',
      },
    ],
    Entry: IconButtonEntry,
  },
  {
    id: 'stamp',
    name: 'Stamp',
    description: 'A small status chip stamped onto the page.',
    section: 'components',
    category: 'Basic',
    props: [
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'Stamp text content',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        default: "'medium'",
        description: 'Stamp size',
      },
      {
        name: 'variant',
        type: "'neutral' | 'info' | 'success' | 'warning' | 'error' | 'review' | 'dropped' | 'idea' | 'muted' | 'faint'",
        description:
          'Semantic color shortcut for fillColor/textColor, with a matching ink ring. Lower wobble toward 0 for a status-tag look that repeats consistently.',
      },
      {
        name: 'dot',
        type: 'boolean',
        default: 'false',
        description: 'Show a leading status dot',
      },
      {
        name: 'icon',
        type: 'ReactNode',
        description: 'Leading icon rendered before the label, after any dot.',
      },
      {
        name: 'fillColor',
        type: 'string',
        description: 'SVG blob fill color, overrides variant',
      },
      {
        name: 'textColor',
        type: 'string',
        description: 'Text color override, overrides variant',
      },
      {
        name: 'wobble',
        type: 'number (0-1)',
        default: '0.3',
        description: 'Blob shape wobble intensity',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
      {
        name: 'onClick',
        type: '(event: MouseEvent<HTMLButtonElement>) => void',
        description:
          'Render the stamp as a button that brightens on hover, dims on press, and gains a focus ring. Omit to keep it as a static span.',
      },
      {
        name: 'pressed',
        type: 'boolean',
        default: 'false',
        description:
          'Sets aria-pressed for the chip-toggle case. Only takes effect when `onClick` is also set.',
      },
      disabledProp,
      {
        name: 'ariaLabel',
        type: 'string',
        description:
          'A11y label for the pressable stamp (when the icon or short text alone is not enough).',
      },
    ],
    Entry: StampEntry,
  },
];
