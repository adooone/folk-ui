import type { ComponentType } from 'react';
import type { PropDef } from '../../components/prop-table';
import { AccordionEntry } from '../entries/accordion';
import { AlertEntry } from '../entries/alert';
import { ArcGaugeEntry } from '../entries/arc-gauge';
import { AvatarEntry } from '../entries/avatar';
import { BarChartEntry } from '../entries/bar-chart';
import { BreadcrumbEntry } from '../entries/breadcrumb';
import { ButtonEntry } from '../entries/button';
import { CardEntry } from '../entries/card';
import { CheckboxEntry } from '../entries/checkbox';
import { CodeBlockEntry } from '../entries/code-block';
import { CommandLineEntry } from '../entries/command-line';
import { CommitRailEntry } from '../entries/commit-rail';
import { DisclosureEntry } from '../entries/disclosure';
import { DividerEntry } from '../entries/divider';
import { DrawerEntry } from '../entries/drawer';
import { EmptyStateEntry } from '../entries/empty-state';
import { FactsGridEntry } from '../entries/facts-grid';
import { IconEntry } from '../entries/icon';
import { IconButtonEntry } from '../entries/icon-button';
import { InlineCodeEntry } from '../entries/inline-code';
import { InputEntry } from '../entries/input';
import { IslandEntry } from '../entries/island';
import { LabelEntry } from '../entries/label';
import { LayoutEntry } from '../entries/layout';
import { ListItemEntry } from '../entries/list-item';
import { MenuEntry } from '../entries/menu';
import { MetaLineEntry } from '../entries/meta-line';
import { ModalEntry } from '../entries/modal';
import { OverflowToolbarEntry } from '../entries/overflow-toolbar';
import { PageEntry } from '../entries/page';
import { PageTitleEntry } from '../entries/page-title';
import { PaginationEntry } from '../entries/pagination';
import { ProgressEntry } from '../entries/progress';
import { RadioEntry } from '../entries/radio';
import { RowEntry } from '../entries/row';
import { RowSkeletonEntry } from '../entries/row-skeleton';
import { SectionHeadingEntry } from '../entries/section-heading';
import { SelectEntry } from '../entries/select';
import { SettingGroupEntry } from '../entries/setting-group';
import { SettingRowEntry } from '../entries/setting-row';
import { SidebarCardEntry } from '../entries/sidebar-card';
import { SidebarFieldEntry } from '../entries/sidebar-field';
import { SidebarItemEntry } from '../entries/sidebar-item';
import { SidebarLabelEntry } from '../entries/sidebar-label';
import { SkeletonEntry } from '../entries/skeleton';
import { SketchBorderEntry } from '../entries/sketch-border';
import { SpinnerEntry } from '../entries/spinner';
import { StackedBarEntry } from '../entries/stacked-bar';
import { StampEntry } from '../entries/stamp';
import { SwatchEntry } from '../entries/swatch';
import { SwitchEntry } from '../entries/switch';
import { TableEntry } from '../entries/table';
import { TabsEntry } from '../entries/tabs';
import { TextEntry } from '../entries/text';
import { TextareaEntry } from '../entries/textarea';
import { ToastEntry } from '../entries/toast';
import { TooltipEntry } from '../entries/tooltip';
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
    id: 'text',
    name: 'Text',
    description:
      'The base typography primitive, combining face, size, weight and tone into a single class list.',
    section: 'components',
    category: 'Typography',
    props: [
      {
        name: 'face',
        type: "'serif' | 'sans' | 'handwritten' | 'mono' | 'display'",
        default: "'serif'",
        description: 'Font family',
      },
      {
        name: 'size',
        type: "'3xs' | '2xs' | 'xs' | 'sm' | 'base' | 'md' | 'lg'",
        default: "'base'",
        description: 'Font size',
      },
      {
        name: 'weight',
        type: "'normal' | 'medium' | 'semibold' | 'bold'",
        default: "'normal'",
        description: 'Font weight',
      },
      {
        name: 'tone',
        type: "'primary' | 'secondary' | 'muted' | 'faint'",
        default: "'primary'",
        description: 'Opacity applied to the text color',
      },
      {
        name: 'truncate',
        type: 'boolean',
        default: 'false',
        description: 'Ellipsis-truncate to a single line',
      },
      {
        name: 'noWrap',
        type: 'boolean',
        default: 'false',
        description: 'Prevent wrapping without truncating',
      },
      {
        name: 'as',
        type: 'ElementType',
        default: "'span'",
        description: 'Rendered element',
      },
    ],
    Entry: TextEntry,
  },
  {
    id: 'label',
    name: 'Label',
    description: 'A small handwritten tag used to annotate fields and sections.',
    section: 'components',
    category: 'Typography',
    props: [
      { name: 'children', type: 'ReactNode', description: 'Label content' },
      { name: 'as', type: 'ElementType', default: "'span'", description: 'Rendered element' },
    ],
    Entry: LabelEntry,
  },
  {
    id: 'section-heading',
    name: 'SectionHeading',
    description: 'A dimmed display-face heading used to introduce a block of content.',
    section: 'components',
    category: 'Typography',
    props: [
      { name: 'children', type: 'ReactNode', description: 'Heading content' },
      { name: 'as', type: 'ElementType', default: "'span'", description: 'Rendered element' },
    ],
    Entry: SectionHeadingEntry,
  },
  {
    id: 'meta-line',
    name: 'MetaLine',
    description: 'A faint, non-wrapping handwritten line for timestamps and secondary metadata.',
    section: 'components',
    category: 'Typography',
    props: [
      { name: 'children', type: 'ReactNode', description: 'Meta content' },
      {
        name: 'size',
        type: "'2xs' | 'xs' | 'sm' | 'base'",
        default: "'base'",
        description: 'Font size',
      },
      { name: 'as', type: 'ElementType', default: "'span'", description: 'Rendered element' },
    ],
    Entry: MetaLineEntry,
  },
  {
    id: 'page-title',
    name: 'PageTitle',
    description: "The large display heading reserved for a page's own title.",
    section: 'components',
    category: 'Typography',
    props: [{ name: 'children', type: 'ReactNode', description: 'Title content' }],
    Entry: PageTitleEntry,
  },
  {
    id: 'facts-grid',
    name: 'FactsGrid',
    description: 'Label-over-value facts, laid out as an auto-fit grid or a flex-wrap inline row.',
    section: 'components',
    category: 'Typography',
    props: [
      {
        name: 'items',
        type: '{ label: ReactNode; value: ReactNode }[]',
        required: true,
        description: 'Facts rendered as label-over-value pairs',
      },
      {
        name: 'layout',
        type: "'grid' | 'inline'",
        default: "'grid'",
        description:
          "'grid' auto-fits columns; 'inline' is a flex-wrap row for placing facts beside other content",
      },
      {
        name: 'align',
        type: "'start' | 'end'",
        default: "'start'",
        description: 'Right-align each label and value when set to end',
      },
    ],
    Entry: FactsGridEntry,
  },
  {
    id: 'code-block',
    name: 'CodeBlock',
    description:
      'A filename-headered code block with a copy button and a paper or chalkboard surface.',
    section: 'components',
    category: 'Typography',
    props: [
      { name: 'code', type: 'string', required: true, description: 'Code to display' },
      { name: 'filename', type: 'string', description: 'Optional filename shown in the header' },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Visual surface treatment',
      },
    ],
    Entry: CodeBlockEntry,
  },
  {
    id: 'command-line',
    name: 'CommandLine',
    description: 'A copyable shell command, shown bare or boxed with a prompt glyph.',
    section: 'components',
    category: 'Typography',
    props: [
      { name: 'command', type: 'string', required: true, description: 'Command text' },
      {
        name: 'prompt',
        type: 'string',
        default: "'$'",
        description: 'Prompt glyph shown when boxed',
      },
      {
        name: 'boxed',
        type: 'boolean',
        default: 'false',
        description: 'Render inside a bordered box with a prompt',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Visual surface treatment',
      },
    ],
    Entry: CommandLineEntry,
  },
  {
    id: 'inline-code',
    name: 'InlineCode',
    description: 'A monospace snippet for referencing identifiers inline with prose.',
    section: 'components',
    category: 'Typography',
    props: [{ name: 'children', type: 'ReactNode', description: 'Code content' }],
    Entry: InlineCodeEntry,
  },
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
  {
    id: 'avatar',
    name: 'Avatar',
    description:
      'Circular or organic-square identity marker that shows an image, or initials over a deterministic tint when none is given.',
    section: 'components',
    category: 'Basic',
    props: [
      {
        name: 'src',
        type: 'string',
        description: 'Image URL; falls back to initials when omitted',
      },
      {
        name: 'alt',
        type: 'string',
        description: 'Alt text for the image, or label for the initials fallback',
      },
      {
        name: 'name',
        type: 'string',
        description: 'Used to derive initials and a deterministic accent color',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large' | 'xlarge'",
        default: "'medium'",
        description: 'Avatar size',
      },
      {
        name: 'shape',
        type: "'circle' | 'square'",
        default: "'circle'",
        description: 'Outline shape',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
    ],
    Entry: AvatarEntry,
  },
  {
    id: 'list-item',
    name: 'ListItem',
    description:
      'Versatile row component with a rectangular blob background, active state, and icon/action slots for navigation or lists.',
    section: 'components',
    category: 'Basic',
    props: [
      { name: 'active', type: 'boolean', default: 'false', description: 'Highlight active state' },
      { name: 'icon', type: 'ReactNode', description: 'Left icon element' },
      {
        name: 'action',
        type: 'ReactNode',
        description:
          'Right-side action element. May contain buttons even when the row itself is clickable.',
      },
      { name: 'size', type: "'small' | 'medium'", default: "'medium'", description: 'Row size' },
      {
        name: 'onClick',
        type: '(event: MouseEvent<HTMLDivElement>) => void',
        description:
          'Render the row as one hit target with `role="button"`, Enter/Space activation and a focus ring.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disable click and dim the row.',
      },
      {
        name: 'ariaLabel',
        type: 'string',
        description:
          'A11y label for the pressable row when its content alone is not descriptive enough.',
      },
      {
        name: 'wobble',
        type: 'number (0-1)',
        default: '0.5',
        description: 'Blob shape wobble intensity',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
    ],
    Entry: ListItemEntry,
  },
  {
    id: 'icon',
    name: 'Icon',
    description:
      'Wraps any icon content in a wobbly blob background, with configurable size and wobble intensity.',
    section: 'components',
    category: 'Basic',
    props: [
      {
        name: 'icon',
        type: 'ReactNode',
        required: true,
        description: 'Icon content rendered over the blob',
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        default: "'medium'",
        description: 'Icon size',
      },
      {
        name: 'wobble',
        type: 'number (0-1)',
        default: '0.5',
        description: 'Blob shape wobble intensity',
      },
      { name: 'fillColor', type: 'string', description: 'Override the blob fill color' },
      { name: 'className', type: 'string', description: 'Additional class name' },
    ],
    Entry: IconEntry,
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    description: 'Hand-drawn checkbox with wobbly blob background and ink checkmark.',
    section: 'components',
    category: 'Form',
    props: [
      { name: 'checked', type: 'boolean', required: true, description: 'Checked state' },
      {
        name: 'onChange',
        type: '(e: ChangeEvent) => void',
        required: true,
        description: 'Change handler',
      },
      { name: 'label', type: 'string', description: 'Checkbox label' },
      {
        name: 'labelPosition',
        type: "'left' | 'right'",
        default: "'right'",
        description: 'Label position',
      },
      {
        name: 'indeterminate',
        type: 'boolean',
        default: 'false',
        description: 'Indeterminate state',
      },
      {
        name: 'wobble',
        type: 'number (0-1)',
        default: '0.4',
        description: 'Blob shape wobble intensity',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
      {
        name: 'size',
        type: "'medium' | 'small'",
        default: "'medium'",
        description: 'Wrapper, box and label size',
      },
      disabledProp,
    ],
    Entry: CheckboxEntry,
  },
  {
    id: 'radio',
    name: 'Radio',
    description:
      'Single-select control mirroring Checkbox — circular box with an ink dot and watercolor blob.',
    section: 'components',
    category: 'Form',
    props: [
      {
        name: 'options',
        type: 'RadioOption[]',
        required: true,
        description: 'Radio choices ({ value, label, disabled? })',
      },
      { name: 'value', type: 'string', description: 'Selected value (controlled)' },
      { name: 'onChange', type: '(value: string) => void', description: 'Selection handler' },
      {
        name: 'orientation',
        type: "'vertical' | 'horizontal'",
        default: "'vertical'",
        description: 'Layout direction',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
    ],
    Entry: RadioEntry,
  },
  {
    id: 'switch',
    name: 'Switch',
    description: 'Toggle control with a sliding ink thumb and watercolor track when on.',
    section: 'components',
    category: 'Form',
    props: [
      { name: 'checked', type: 'boolean', description: 'On/off state' },
      { name: 'onChange', type: '(e: ChangeEvent) => void', description: 'Change handler' },
      { name: 'label', type: 'string', description: 'Switch label' },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        default: "'medium'",
        description: 'Switch size',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
      disabledProp,
    ],
    Entry: SwitchEntry,
  },
  {
    id: 'input',
    name: 'Input',
    description: 'Hand-drawn text field with paper texture background and ink underline on focus.',
    section: 'components',
    category: 'Form',
    props: [
      { name: 'label', type: 'string', description: 'Field label' },
      { name: 'placeholder', type: 'string', description: 'Placeholder text' },
      { name: 'helperText', type: 'string', description: 'Helper or error message' },
      { name: 'error', type: 'boolean', default: 'false', description: 'Show error state' },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        default: "'medium'",
        description: 'Input size',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
      disabledProp,
    ],
    Entry: InputEntry,
  },
  {
    id: 'select',
    name: 'Select',
    description: 'Paper-styled dropdown with a hand-drawn chevron icon and textured background.',
    section: 'components',
    category: 'Form',
    props: [
      { name: 'label', type: 'string', description: 'Field label' },
      {
        name: 'options',
        type: 'SelectOption[]',
        required: true,
        description: 'Dropdown options ({ value, label, disabled? })',
      },
      { name: 'placeholder', type: 'string', description: 'Placeholder option text' },
      { name: 'value', type: 'string', description: 'Selected value (controlled)' },
      { name: 'defaultValue', type: 'string', description: 'Initial value (uncontrolled)' },
      {
        name: 'onChange',
        type: '(value: string) => void',
        description: 'Called with the newly selected value',
      },
      { name: 'helperText', type: 'string', description: 'Helper or error message' },
      { name: 'error', type: 'boolean', default: 'false', description: 'Show error state' },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        default: "'medium'",
        description: 'Select size',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
    ],
    Entry: SelectEntry,
  },
  {
    id: 'textarea',
    name: 'Textarea',
    description: 'Multi-line text input with paper texture background and ink underline on focus.',
    section: 'components',
    category: 'Form',
    props: [
      { name: 'label', type: 'string', description: 'Field label' },
      { name: 'placeholder', type: 'string', description: 'Placeholder text' },
      { name: 'helperText', type: 'string', description: 'Helper or error message' },
      { name: 'error', type: 'boolean', default: 'false', description: 'Show error state' },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        default: "'medium'",
        description: 'Textarea size',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Visual style variant',
      },
    ],
    Entry: TextareaEntry,
  },
  {
    id: 'swatch',
    name: 'Swatch',
    description: 'A small clickable color or texture chip used to pick a surface tone.',
    section: 'components',
    category: 'Form',
    props: [
      {
        name: 'active',
        type: 'boolean',
        default: 'false',
        description: 'Marks the swatch as currently selected',
      },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the swatch' },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
    ],
    Entry: SwatchEntry,
  },
  {
    id: 'page',
    name: 'Page',
    description: 'Textured paper page container with optional watercolor accent.',
    section: 'components',
    category: 'Layout',
    props: [
      {
        name: 'texture',
        type: 'boolean | PaperTextureKey | TextureConfig',
        default: 'true',
        description: 'Background texture: a name, a config, or false to disable',
      },
      {
        name: 'withAccent',
        type: 'boolean',
        default: 'false',
        description: 'Show watercolor accent blob',
      },
      {
        name: 'accentColor',
        type: "'blue' | 'green' | 'amber' | 'rose' | 'slate'",
        default: "'blue'",
        description: 'Accent blob color',
      },
      {
        name: 'rounded',
        type: "'all' | 'top' | 'none'",
        default: "'all'",
        description: 'Corner rounding of the sketch outline silhouette',
      },
      {
        name: 'outline',
        type: 'boolean',
        default: 'false',
        description: 'Make the hand-drawn sketch outline visible',
      },
      {
        name: 'sketch',
        type: 'boolean',
        default: 'false',
        description: 'Draw the outline/silhouette with the hand-drawn wobble',
      },
    ],
    Entry: PageEntry,
  },
  {
    id: 'layout',
    name: 'Layout',
    description: 'Page shell with sidebar navigation, header bar, and main content area.',
    section: 'components',
    category: 'Layout',
    props: [
      { name: 'title', type: 'string', description: 'Header title' },
      { name: 'subtitle', type: 'string', description: 'Header subtitle' },
      {
        name: 'navigationItems',
        type: 'NavigationItem[]',
        description: 'Sidebar navigation items',
      },
      { name: 'activeItemId', type: 'string', description: 'Active navigation item ID' },
      {
        name: 'onNavigate',
        type: '(item: NavigationItem) => void',
        description: 'Navigation handler',
      },
      { name: 'showSidebar', type: 'boolean', default: 'true', description: 'Show sidebar' },
      { name: 'showHeader', type: 'boolean', default: 'true', description: 'Show header bar' },
      {
        name: 'showPage',
        type: 'boolean',
        default: 'false',
        description: 'Wrap children in a Page component',
      },
      { name: 'showFooter', type: 'boolean', default: 'false', description: 'Show footer area' },
      {
        name: 'background',
        type: 'LayoutBackground',
        description: 'Layout background (texture, image, or plain)',
      },
      {
        name: 'headerHeight',
        type: 'number | string',
        description: 'Header height in px (number) or any CSS length (string); defaults to 48px',
      },
      {
        name: 'headerBackground',
        type: "HeaderBackground ('none' | Texture)",
        description:
          'Header background texture (name or config); "none" clears the default speckle',
      },
    ],
    Entry: LayoutEntry,
  },
  {
    id: 'card',
    name: 'Card',
    description: 'Paper surface container with a pencil border and configurable elevation.',
    section: 'components',
    category: 'Layout',
    props: [
      {
        name: 'variant',
        type: "'default' | 'elevated'",
        default: "'default'",
        description: 'Visual elevation style',
      },
      {
        name: 'size',
        type: "'small' | 'medium'",
        default: "'medium'",
        description: 'Card size — small reduces padding and font size',
      },
      {
        name: 'texture',
        type: "PaperTextureKey ('white' | 'paper' | 'parchment' | 'kraft' | 'speckle' | 'canvas')",
        default: "'parchment'",
        description: 'Paper texture (grain) for the card surface',
      },
      {
        name: 'fill',
        type: 'SurfaceFillKey',
        description: "Explicit palette fill; overrides the texture's own colour, grain stays",
      },
      {
        name: 'shade',
        type: 'boolean',
        default: 'false',
        description: "Fill with the texture's darker step instead of its base",
      },
      {
        name: 'accent',
        type: 'boolean',
        default: 'false',
        description: 'Show watercolor accent blob',
      },
      {
        name: 'accentColor',
        type: "'blue' | 'green' | 'amber' | 'rose' | 'slate'",
        default: "'blue'",
        description: 'Accent blob color',
      },
      {
        name: 'onClick',
        type: '(event: MouseEvent<HTMLDivElement>) => void',
        description: 'Render the card as one hit target with role="button" and keyboard activation',
      },
      { name: 'ariaLabel', type: 'string', description: 'A11y label for the pressable card' },
    ],
    Entry: CardEntry,
  },
  {
    id: 'divider',
    name: 'Divider',
    description:
      'Separator drawn as a single pencil stroke that fades at the ends, with an optional handwritten label.',
    section: 'components',
    category: 'Layout',
    props: [
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        description: 'Line direction',
      },
      {
        name: 'label',
        type: 'ReactNode',
        description: 'Optional centered label (horizontal only)',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
      {
        name: 'sketch',
        type: 'boolean',
        default: 'false',
        description: 'Draw the rule as one hand-drawn stroke instead of a CSS line',
      },
    ],
    Entry: DividerEntry,
  },
  {
    id: 'accordion',
    name: 'Accordion',
    description: 'Collapsible content section with a rotating disclosure triangle.',
    section: 'components',
    category: 'Layout',
    props: [
      {
        name: 'title',
        type: 'ReactNode',
        required: true,
        description: 'Header content, always visible',
      },
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'Collapsible body content',
      },
      {
        name: 'expanded',
        type: 'boolean',
        default: 'false',
        description: 'Whether the body is shown',
      },
      { name: 'onToggle', type: '() => void', description: 'Called when the header is clicked' },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
    ],
    Entry: AccordionEntry,
  },
  {
    id: 'table',
    name: 'Table',
    description:
      'Paper-styled data table with grid, ruled, or plain surface variants and a textured toolbar.',
    section: 'components',
    category: 'Layout',
    props: [
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Table visual style',
      },
      { name: 'texture', type: 'TextureConfig', description: 'Paper texture configuration' },
      {
        name: 'columns',
        type: 'TableColumn<T>[]',
        required: true,
        description:
          "Column definitions (width in grid squares of 32px, or 'auto' to size to content)",
      },
      { name: 'data', type: 'T[]', required: true, description: 'Row data' },
      { name: 'toolbar', type: 'TableToolbar', description: 'Search and action bar config' },
      {
        name: 'board',
        type: 'TableBoardColumn<T>[]',
        description: 'Renders a Kanban-style board of card lanes instead of rows, when set',
      },
      {
        name: 'expandable',
        type: 'TableExpandableConfig<T>',
        description: 'Renders an expand toggle per row with custom detail content',
      },
      {
        name: 'rowClassName',
        type: '(row: T, index: number) => string | undefined',
        description: 'Per-row class name override',
      },
    ],
    Entry: TableEntry,
  },
  {
    id: 'row',
    name: 'Row',
    description:
      "Grid-based row for ruled lists and card surfaces, sharing RowSkeleton's texture and shadow.",
    section: 'components',
    category: 'Layout',
    props: [
      {
        name: 'id',
        type: 'ReactNode',
        description: "Mono identifier at the row's left edge (a record id)",
      },
      {
        name: 'title',
        type: 'ReactNode',
        description: 'Main label — truncates with an ellipsis when the cell narrows',
      },
      {
        name: 'meta',
        type: 'ReactNode',
        description: 'A MetaLine describing the row beneath its title',
      },
      { name: 'trailing', type: 'ReactNode', description: 'Stamps and actions, right-aligned' },
      {
        name: 'columns',
        type: 'RowColumns',
        description: 'Grid-template-columns widths for the four slots: id title meta trailing',
      },
      {
        name: 'surface',
        type: "'none' | 'card' | 'nestedCard'",
        default: "'none'",
        description:
          'Row surface — none is ruled, card and nestedCard give the row its own paper surface',
      },
      {
        name: 'onClick',
        type: '(event: MouseEvent<HTMLDivElement>) => void',
        description: 'Make the whole row one hit target with keyboard activation',
      },
      {
        name: 'highlighted',
        type: 'boolean',
        default: 'false',
        description: 'Draw the amber outline used to mark a deep-linked row',
      },
      {
        name: 'active',
        type: 'boolean',
        default: 'false',
        description: 'Draw the green wash blob and pencil ring for the current entry',
      },
    ],
    Entry: RowEntry,
  },
  {
    id: 'row-skeleton',
    name: 'RowSkeleton',
    description:
      "Ghost placeholder row sharing Row's texture, SketchBorder, and shadow so a loading row matches the row that replaces it.",
    section: 'components',
    category: 'Layout',
    props: [
      {
        name: 'columns',
        type: 'RowColumns',
        description: 'Mirrors Row.columns so the skeleton lines up with real rows',
      },
      {
        name: 'surface',
        type: "'none' | 'card' | 'nestedCard'",
        default: "'none'",
        description: 'Mirrors Row.surface — none is ruled (default for ruled lists)',
      },
      {
        name: 'slots',
        type: "Array<'id' | 'title' | 'meta' | 'trailing'>",
        default: 'all four',
        description: 'Which slots to show skeleton bars in',
      },
      {
        name: 'widths',
        type: 'RowSkeletonWidths',
        description: "Per-slot skeleton bar widths, so a list of rows doesn't look uniform",
      },
      {
        name: 'stamps',
        type: 'number',
        default: '0',
        description: 'Number of pill-shaped stamp placeholders in trailing, instead of a text bar',
      },
      {
        name: 'boxless',
        type: 'boolean',
        default: 'false',
        description: 'No gap between slots, for dense ruled lists',
      },
    ],
    Entry: RowSkeletonEntry,
  },
  {
    id: 'sketch-border',
    name: 'SketchBorder',
    description:
      'Hand-drawn SVG outline absolutely positioned over its parent, the pencil border used by Card, Page, and Row.',
    section: 'components',
    category: 'Layout',
    props: [
      {
        name: 'shape',
        type: "'rect' | 'circle'",
        default: "'rect'",
        description: 'rect draws a rounded rectangle; circle a hand-drawn ellipse',
      },
      {
        name: 'radius',
        type: 'number',
        default: '9',
        description: 'Base corner radius in px (rect only)',
      },
      {
        name: 'roughness',
        type: 'number',
        default: '1.2',
        description: 'rough.js roughness — how shaky the pencil hand is',
      },
      {
        name: 'bowing',
        type: 'number',
        default: '1',
        description: 'rough.js bowing — how much a straight run bows across',
      },
      {
        name: 'strokeWidth',
        type: 'number',
        default: '1',
        description: 'Stroke width of the drawn line',
      },
      {
        name: 'inset',
        type: 'number',
        default: '2',
        description: 'Inset from the host edge so the wobble stays inside the box',
      },
      {
        name: 'fill',
        type: 'boolean',
        default: 'false',
        description: 'Also fill the sketched silhouette; renders the SVG behind host content',
      },
      {
        name: 'clip',
        type: 'boolean',
        default: 'false',
        description: 'Publish the silhouette as a --sketch-clip custom property instead of filling',
      },
      {
        name: 'smooth',
        type: 'boolean',
        default: 'false',
        description:
          'Draw the outline as one calmer hand-drawn stroke instead of the default multi-stroke',
      },
      {
        name: 'straight',
        type: 'boolean',
        default: 'true',
        description: 'Trace a geometric rounded rectangle through a sketchy stroke (clip only)',
      },
    ],
    Entry: SketchBorderEntry,
  },
  {
    id: 'island',
    name: 'Island',
    description:
      'A floating container fixed to the viewport, for controls that should always stay visible.',
    section: 'components',
    category: 'Navigation',
    props: [
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'Content to render inside the island',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Visual style variant',
      },
      {
        name: 'label',
        type: 'string',
        description:
          'Accessible name for the landmark. When omitted, the island is a plain container, not a labelled region.',
      },
      { name: 'className', type: 'string', description: 'Additional class name' },
    ],
    Entry: IslandEntry,
  },
  {
    id: 'tabs',
    name: 'Tabs',
    description:
      'Button-based tab controls with a Card content area, composing Button and Card from the design system.',
    section: 'components',
    category: 'Navigation',
    props: [
      {
        name: 'items',
        type: 'TabItem[]',
        required: true,
        description: 'Tab items with id, label, optional icon, and children content',
      },
      {
        name: 'activeKey',
        type: 'string',
        description: 'Controlled active tab id; omit to let Tabs manage its own state',
      },
      {
        name: 'defaultActiveKey',
        type: 'string',
        description: 'Initial tab for uncontrolled usage; defaults to the first item',
      },
      { name: 'onSelect', type: '(id: string) => void', description: 'Tab selection handler' },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style (passed to Card)',
      },
    ],
    Entry: TabsEntry,
  },
  {
    id: 'breadcrumb',
    name: 'Breadcrumb',
    description:
      'A navigation trail rendered as ink-colored links with a chevron separator; the final crumb marks the current page.',
    section: 'components',
    category: 'Navigation',
    props: [
      {
        name: 'items',
        type: 'BreadcrumbItem[]',
        required: true,
        description:
          'Trail of { id, label, href?, onClick? }; the last item renders as the current page',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
    ],
    Entry: BreadcrumbEntry,
  },
  {
    id: 'pagination',
    name: 'Pagination',
    description:
      'Prev/next controls with a sibling-aware page range and ellipsis for long sequences.',
    section: 'components',
    category: 'Navigation',
    props: [
      { name: 'page', type: 'number', required: true, description: 'Current page, 1-indexed' },
      { name: 'totalPages', type: 'number', required: true, description: 'Total number of pages' },
      {
        name: 'onPageChange',
        type: '(page: number) => void',
        required: true,
        description: 'Called with the new page number',
      },
      {
        name: 'siblingCount',
        type: 'number',
        default: '1',
        description: 'Page numbers to show on each side of the current page',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
    ],
    Entry: PaginationEntry,
  },
  {
    id: 'overflow-toolbar',
    name: 'OverflowToolbar',
    description:
      'Measures its width and folds the lowest-priority items into a trailing Menu until the rest fit, re-measuring on resize.',
    section: 'components',
    category: 'Navigation',
    props: [
      {
        name: 'items',
        type: 'OverflowToolbarItem[]',
        required: true,
        description:
          'MenuItem ({ id, label, icon?, onSelect?, disabled?, danger? }) plus { priority, content }. content renders while visible; the item itself becomes a MenuEntry once folded.',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style of the trailing menu',
      },
    ],
    Entry: OverflowToolbarEntry,
  },
  {
    id: 'sidebar-card',
    name: 'SidebarCard',
    description: 'A parchment-textured card sized for a sidebar panel.',
    section: 'components',
    category: 'Sidebar & settings',
    props: [
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'Content rendered inside the card.',
      },
      { name: 'className', type: 'string', description: 'Additional class name.' },
    ],
    Entry: SidebarCardEntry,
  },
  {
    id: 'sidebar-label',
    name: 'SidebarLabel',
    description: 'A small heading-like label used above a sidebar section.',
    section: 'components',
    category: 'Sidebar & settings',
    props: [
      { name: 'children', type: 'ReactNode', description: 'Label text.' },
      {
        name: 'as',
        type: 'ElementType',
        default: "'span'",
        description: 'Element/tag the label renders as.',
      },
      { name: 'className', type: 'string', description: 'Additional class name.' },
      { name: 'style', type: 'CSSProperties', description: 'Inline styles.' },
    ],
    Entry: SidebarLabelEntry,
  },
  {
    id: 'sidebar-field',
    name: 'SidebarField',
    description: 'Pairs a SidebarLabel with a form control in a sidebar.',
    section: 'components',
    category: 'Sidebar & settings',
    props: [
      {
        name: 'label',
        type: 'ReactNode',
        required: true,
        description: 'The label rendered above the control.',
      },
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'The control the field wraps, e.g. an Input or Select.',
      },
      { name: 'className', type: 'string', description: 'Additional class name.' },
      { name: 'style', type: 'CSSProperties', description: 'Inline styles.' },
    ],
    Entry: SidebarFieldEntry,
  },
  {
    id: 'sidebar-item',
    name: 'SidebarItem',
    description: 'A clickable row inside a sidebar list, with icon, count, and active/busy states.',
    section: 'components',
    category: 'Sidebar & settings',
    props: [
      {
        name: 'children',
        type: 'ReactNode',
        description: "Label rendered in the row's main cell; replaced by busy when set.",
      },
      { name: 'icon', type: 'ReactNode', description: 'Leading icon.' },
      { name: 'count', type: 'ReactNode', description: 'Right-aligned secondary number.' },
      {
        name: 'action',
        type: 'ReactNode',
        description: 'Trailing slot after count, e.g. a Stamp.',
      },
      { name: 'note', type: 'ReactNode', description: 'A mono line rendered under the row.' },
      {
        name: 'busy',
        type: 'string',
        description: 'When set, replaces the label and disables the row.',
      },
      {
        name: 'tone',
        type: "'default' | 'danger'",
        default: "'default'",
        description: 'Visual tone of the row.',
      },
      {
        name: 'active',
        type: 'boolean',
        default: 'false',
        description: 'Marks the current entry.',
      },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the row.' },
      {
        name: 'onClick',
        type: '(event: MouseEvent) => void',
        description: 'Makes the whole row one hit target.',
      },
      { name: 'ariaLabel', type: 'string', description: 'Accessible label override.' },
      { name: 'className', type: 'string', description: 'Additional class name.' },
      { name: 'style', type: 'CSSProperties', description: 'Inline styles.' },
    ],
    Entry: SidebarItemEntry,
  },
  {
    id: 'setting-row',
    name: 'SettingRow',
    description: 'A label-left, control-right row for a settings panel.',
    section: 'components',
    category: 'Sidebar & settings',
    props: [
      {
        name: 'label',
        type: 'ReactNode',
        required: true,
        description: 'The label rendered on the left side of the row.',
      },
      { name: 'hint', type: 'ReactNode', description: 'Optional secondary text under the label.' },
      {
        name: 'control',
        type: 'ReactNode',
        required: true,
        description: 'The control rendered in the right column, e.g. Input, Select, Switch.',
      },
      {
        name: 'htmlFor',
        type: 'string',
        description: 'Forwards an id to the control so the label can be associated with it.',
      },
      { name: 'className', type: 'string', description: 'Additional class name.' },
      { name: 'style', type: 'CSSProperties', description: 'Inline styles.' },
    ],
    Entry: SettingRowEntry,
  },
  {
    id: 'setting-group',
    name: 'SettingGroup',
    description: 'Groups several SettingRows under a shared heading.',
    section: 'components',
    category: 'Sidebar & settings',
    props: [
      {
        name: 'title',
        type: 'ReactNode',
        required: true,
        description: 'Section title rendered above the rows.',
      },
      {
        name: 'description',
        type: 'ReactNode',
        description: 'Optional descriptive text under the title.',
      },
      {
        name: 'action',
        type: 'ReactNode',
        description: 'Trailing slot in the header, next to the title.',
      },
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'SettingRows and other controls rendered as the body.',
      },
      {
        name: 'titleAs',
        type: 'ElementType',
        default: "'h3'",
        description: 'Heading level for the title.',
      },
      { name: 'className', type: 'string', description: 'Additional class name.' },
      { name: 'style', type: 'CSSProperties', description: 'Inline styles.' },
    ],
    Entry: SettingGroupEntry,
  },
  {
    id: 'alert',
    name: 'Alert',
    description: 'Compact single-line message with an icon and a tinted accent border.',
    section: 'components',
    category: 'Feedback',
    props: [
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'Message text, truncated to a single line',
      },
      {
        name: 'variant',
        type: "'info' | 'success' | 'warning' | 'error'",
        default: "'info'",
        description: 'Alert tone',
      },
      {
        name: 'texture',
        type: 'boolean | PaperTextureKey | TextureConfig',
        default: "'kraft'",
        description: 'Background texture: a name, a config, or false to disable',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
      { name: 'dismissible', type: 'boolean', default: 'false', description: 'Show close button' },
      {
        name: 'onDismiss',
        type: '() => void',
        description: 'Called when the dismiss button is clicked',
      },
    ],
    Entry: AlertEntry,
  },
  {
    id: 'toast',
    name: 'Toast',
    description:
      'Positioned, stacked notifications with a title, description, auto-dismiss, and manual close.',
    section: 'components',
    category: 'Feedback',
    props: [
      {
        name: 'position',
        type: "'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'",
        default: "'bottom-right'",
        description: 'Corner/edge the stack renders from (ToastProvider)',
      },
      {
        name: 'defaultDuration',
        type: 'number',
        default: '5000',
        description: 'Auto-dismiss delay in ms; a toast can override it (ToastProvider)',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style for all toasts (ToastProvider)',
      },
      {
        name: 'toast(options)',
        type: '(options: ToastOptions) => string',
        description: 'From useToast() — shows a toast, returns its id',
      },
      {
        name: 'dismiss(id)',
        type: '(id: string) => void',
        description: 'From useToast() — closes a toast early',
      },
    ],
    Entry: ToastEntry,
  },
  {
    id: 'progress',
    name: 'Progress',
    description: 'Minimal progress bar with configurable color and height.',
    section: 'components',
    category: 'Feedback',
    props: [
      { name: 'value', type: 'number', required: true, description: 'Current progress value' },
      { name: 'max', type: 'number', default: '100', description: 'Maximum value' },
      { name: 'color', type: 'string', description: 'Fill color (defaults to accent green)' },
      { name: 'height', type: 'number', default: '6', description: 'Track height in pixels' },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
      {
        name: 'sketch',
        type: 'boolean',
        default: 'false',
        description: 'Hachured track instead of a solid fill',
      },
    ],
    Entry: ProgressEntry,
  },
  {
    id: 'spinner',
    name: 'Spinner',
    description:
      'Indeterminate loading indicator — a rotating ink arc that respects reduced-motion.',
    section: 'components',
    category: 'Feedback',
    props: [
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        default: "'medium'",
        description: 'Spinner size',
      },
      { name: 'color', type: 'string', description: 'Stroke color override' },
      {
        name: 'label',
        type: 'string',
        default: "'Loading'",
        description: 'Accessible status label',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
    ],
    Entry: SpinnerEntry,
  },
  {
    id: 'skeleton',
    name: 'Skeleton',
    description:
      'Loading placeholder in text, rectangle, and circle variants with a paper-grain pulse.',
    section: 'components',
    category: 'Feedback',
    props: [
      {
        name: 'variant',
        type: "'text' | 'rect' | 'circle'",
        default: "'text'",
        description: 'Placeholder shape',
      },
      { name: 'width', type: 'number | string', description: 'Explicit width' },
      { name: 'height', type: 'number | string', description: 'Explicit height' },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
    ],
    Entry: SkeletonEntry,
  },
  {
    id: 'empty-state',
    name: 'EmptyState',
    description:
      'A gentle placeholder for a list or panel with nothing in it yet, with an optional illustration and action.',
    section: 'components',
    category: 'Feedback',
    props: [
      { name: 'message', type: 'ReactNode', required: true, description: 'Primary message text' },
      {
        name: 'illustration',
        type: 'ReactNode',
        description: 'Optional illustration above the message',
      },
      {
        name: 'action',
        type: 'ReactNode',
        description: 'Optional action element below the message',
      },
    ],
    Entry: EmptyStateEntry,
  },
  {
    id: 'arc-gauge',
    name: 'ArcGauge',
    description: 'A 280° rough track with the value arc drawn over it.',
    section: 'components',
    category: 'Charts',
    props: [
      { name: 'value', type: 'number', required: true, description: 'Current value' },
      { name: 'max', type: 'number', required: true, description: 'Maximum value' },
      {
        name: 'label',
        type: 'string',
        required: true,
        description: 'Caption drawn under the gauge',
      },
      {
        name: 'floor',
        type: 'number',
        description:
          'Fraction (0-1) of max to mark with a tick, e.g. a floor that must not be crossed',
      },
      {
        name: 'fillColor',
        type: 'string',
        description: 'Value arc color (defaults to secondary text color)',
      },
      { name: 'size', type: 'number', default: '96', description: 'Gauge diameter in pixels' },
    ],
    Entry: ArcGaugeEntry,
  },
  {
    id: 'bar-chart',
    name: 'BarChart',
    description: 'Solid bars with a hachured portion for a failed or excluded part of the value.',
    section: 'components',
    category: 'Charts',
    props: [
      {
        name: 'bars',
        type: '{ label, value, hatchedValue? }[]',
        required: true,
        description:
          'Bars to draw; hatchedValue draws a hachured portion of value, e.g. failed runs within a total',
      },
      {
        name: 'maxValue',
        type: 'number',
        description: 'Value the tallest bar maps to (defaults to the largest bar value)',
      },
      {
        name: 'color',
        type: 'string',
        description: 'Solid fill color (defaults to secondary text color)',
      },
      {
        name: 'hatchedColor',
        type: 'string',
        description: 'Hachured fill color (defaults to accent rose)',
      },
      { name: 'height', type: 'number', default: '64', description: 'Chart height in pixels' },
    ],
    Entry: BarChartEntry,
  },
  {
    id: 'stacked-bar',
    name: 'StackedBar',
    description: 'A single bar split into colored segments proportional to their value.',
    section: 'components',
    category: 'Charts',
    props: [
      {
        name: 'segments',
        type: '{ label, value, color }[]',
        required: true,
        description: 'Segments drawn left to right, proportional to their value',
      },
      { name: 'width', type: 'number', default: '240', description: 'Bar width in pixels' },
      { name: 'height', type: 'number', default: '20', description: 'Bar height in pixels' },
    ],
    Entry: StackedBarEntry,
  },
  {
    id: 'commit-rail',
    name: 'CommitRail',
    description: 'A stroke plus a dot per row, dashed amber until pushed.',
    section: 'components',
    category: 'Charts',
    props: [
      {
        name: 'pushed',
        type: 'boolean',
        required: true,
        description:
          'Solid stroke and a filled dot once pushed; dashed amber with a hollow dot until then',
      },
      {
        name: 'isFirst',
        type: 'boolean',
        required: true,
        description: 'Trims the stroke above the dot for the first row',
      },
      {
        name: 'isLast',
        type: 'boolean',
        required: true,
        description: 'Trims the stroke below the dot for the last row',
      },
    ],
    Entry: CommitRailEntry,
  },
  {
    id: 'modal',
    name: 'Modal',
    description: 'A paper sheet overlay with a textured backdrop.',
    section: 'components',
    category: 'Overlay',
    props: [
      { name: 'open', type: 'boolean', required: true, description: 'Modal visibility' },
      { name: 'onClose', type: '() => void', required: true, description: 'Close handler' },
      { name: 'title', type: 'string', description: 'Modal heading' },
      { name: 'children', type: 'ReactNode', required: true, description: 'Modal body content' },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        default: "'medium'",
        description: 'Modal width',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
      {
        name: 'texture',
        type: 'boolean | PaperTextureKey | TextureConfig',
        default: 'false',
        description: 'Background texture: a name, a config, or false to disable',
      },
    ],
    Entry: ModalEntry,
  },
  {
    id: 'drawer',
    name: 'Drawer',
    description: 'A slide-in panel with a blurred scrim, a focus trap, and Escape-to-close.',
    section: 'components',
    category: 'Overlay',
    props: [
      { name: 'open', type: 'boolean', required: true, description: 'Drawer visibility' },
      {
        name: 'onClose',
        type: '() => void',
        required: true,
        description: 'Called on Escape, a scrim click, or backdrop click',
      },
      { name: 'children', type: 'ReactNode', required: true, description: 'Drawer panel content' },
      {
        name: 'side',
        type: "'left' | 'right'",
        default: "'left'",
        description: 'Edge the panel slides in from',
      },
      { name: 'width', type: 'number | string', default: '320', description: 'Panel width' },
    ],
    Entry: DrawerEntry,
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    description: 'An inked label with a hand-drawn arrow, shown on hover or focus.',
    section: 'components',
    category: 'Overlay',
    props: [
      { name: 'content', type: 'ReactNode', required: true, description: 'Tooltip body' },
      {
        name: 'children',
        type: 'ReactElement',
        required: true,
        description: 'A single focusable/hoverable trigger element',
      },
      {
        name: 'placement',
        type: "'top' | 'bottom' | 'left' | 'right'",
        default: "'top'",
        description: 'Side of the trigger to render on',
      },
      { name: 'delay', type: 'number', default: '300', description: 'Show delay in ms' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Suppress the tooltip' },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
    ],
    Entry: TooltipEntry,
  },
  {
    id: 'menu',
    name: 'Menu',
    description:
      'Anchored action menu with roving keyboard focus, separators, and a danger tone for destructive items.',
    section: 'components',
    category: 'Overlay',
    props: [
      {
        name: 'trigger',
        type: 'ReactElement',
        required: true,
        description: 'A single focusable element that opens the menu on click',
      },
      {
        name: 'items',
        type: 'MenuEntry[]',
        required: true,
        description:
          'MenuItem ({ id, label, icon?, onSelect?, disabled?, danger? }) or a separator ({ id, type: "separator" })',
      },
      {
        name: 'align',
        type: "'start' | 'end'",
        default: "'start'",
        description: 'Horizontal alignment against the trigger',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
    ],
    Entry: MenuEntry,
  },
  {
    id: 'disclosure',
    name: 'Disclosure',
    description: 'A show-more/show-less toggle button that reveals extra content.',
    section: 'components',
    category: 'Overlay',
    props: [
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'Toggle label, e.g. "Show more" / "Show less"',
      },
      {
        name: 'expanded',
        type: 'boolean',
        default: 'false',
        description: 'Expanded state (controlled)',
      },
      { name: 'onToggle', type: '() => void', description: 'Called when the toggle is clicked' },
      {
        name: 'collapsedLabel',
        type: 'ReactNode',
        description: 'Label shown when collapsed; defaults to children',
      },
      {
        name: 'expandedLabel',
        type: 'ReactNode',
        description: 'Label shown when expanded; defaults to children',
      },
      {
        name: 'surface',
        type: "'paper' | 'chalkboard'",
        default: "'paper'",
        description: 'Surface style',
      },
      {
        name: 'underline',
        type: 'boolean',
        default: 'false',
        description: 'Underline the toggle label',
      },
      { name: 'className', type: 'string', description: 'Additional class name' },
    ],
    Entry: DisclosureEntry,
  },
];
