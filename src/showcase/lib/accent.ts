import { colors } from '../../tokens';
import type { Surface } from '../shell/surface-context';

// The showcase's one accent ink. `accentGreen` is a wash colour — too pale to
// read as text on paper or kraft — so text accents use the dark shade on
// paper and the chalk accent on the board.
export function accentInk(surface: Surface): string {
  return surface === 'chalkboard' ? colors.chalkboardAccent : colors.accentGreenDark;
}
