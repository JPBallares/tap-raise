import {COLORS} from '@theme/colors';
import {FONT_SIZES} from '@theme/fonts';

export type TrxFunc = (key: string) => string;
export type ColorType = keyof typeof COLORS;
export type FontSizeType = keyof typeof FONT_SIZES;
