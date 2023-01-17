import {StyleSheet} from 'react-native';

import {COLORS} from './colors';
import {RF} from './responsive';
import {SIZING} from './sizing';
import {SPACING} from './spacing';

const {BLACK, RED_600, GRAY_200, GRAY_100, WHITE, GRAY_300} = COLORS;

export const GST = StyleSheet.create({
  ...SPACING,
  ...SIZING,
  FLEX: {
    flex: 1,
  },
  FLEX_GROW: {
    flexGrow: 1,
  },
  FLEX_ROW: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  FLEX_END: {
    alignItems: 'flex-end',
  },
  SHADOW: {
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  SHADOW_LIGHT: {
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  ERROR: {
    marginTop: RF(2),
    fontSize: RF(10),
    color: RED_600,
  },
  HEADER_CONTAINER: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...SPACING.P3,
    backgroundColor: WHITE,
  },
  MAIN_CONTAINER: {
    flex: 1,
    backgroundColor: WHITE,
  },
  DIVIDER: {
    height: RF(10),
    backgroundColor: GRAY_100,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: GRAY_200,
  },
  ITEM_SEPARATOR: {
    height: 1,
    backgroundColor: GRAY_200,
  },
  LINE_BREAK: {
    height: 1,
    width: '100%',
    backgroundColor: GRAY_300,
    ...SPACING.MY2,
  },
  SUBMIT_BTN_CONTAINER: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  HITSLOP: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  BOLD: {
    fontWeight: '800',
    letterSpacing: 2,
  },
  MEDIUM: {
    fontWeight: '600',
  },
});
