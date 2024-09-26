import { createTheme, useTheme as useRestyleTheme } from '@shopify/restyle';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

const palette = {
  red: '#E16359',
  green: '#6BD88E',
  white: '#FFFFFF',
  black: '#434141',
  pink: '#EC537E',
  pink2: '#FD267D',
  gray1: '#BFBFC0',
  gray2: '#E3E3E4',
};

export const theme = createTheme({
  colors: {
    backgroundColor: palette.white,
    shadowColor: palette.gray1,
    activeTab: palette.pink,
    ...palette,
  },
  spacing: {
    xs_4: 4,
    s_8: 8,
    sm_12: 12,
    m_16: 16,
    ml_24: 24,
    l_32: 32,
    xl_64: 64,
    n_l_40: -40,
  },
  borderRadii: {
    xl_28: 28,
    xxl_36: 36,
  },
  textVariants: {
    body: {
      fontSize: 16,
      lineHeight: 20,
    },
    defaults: {
      fontSize: 16,
      lineHeight: 20,
    },
    subTitle: {
      fontSize: 8,
      lineHeight: 10,
    },
  },
});

export const useTheme = () => {
  return useRestyleTheme<Theme>();
};

export const makeStyles = <T extends NamedStyles<T> | NamedStyles<unknown>>(
  styles: (theme: Theme) => T
) => {
  return () => {
    return styles(theme);
  };
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
