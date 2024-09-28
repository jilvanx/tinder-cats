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
  gray: '#BFBFC0',
  gray2: '#E3E3E4',
};

export const theme = createTheme({
  colors: {
    ...palette,
    backgroundColor: palette.white,
    shadowColor: palette.gray,
  },
  spacing: {
    xs_4: 4,
    s_8: 8,
    sm_12: 12,
    m_16: 16,
    m_20: 20,
    ml_24: 24,
    l_32: 32,
    xl_48: 48,
    xxl_64: 64,
    xxxl_96: 96,
    n_l_40: -40,
    n_xl_46: -46,
  },
  borderRadii: {
    m_16: 16,
    xl_32: 36,
    xxl_36: 36,
  },
  textVariants: {
    body: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: 'NunitoSans_400Regular',
    },
    defaults: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: 'NunitoSans_400Regular',
    },
    title: {
      fontSize: 16,
      lineHeight: 20,
      fontFamily: 'NunitoSans_700Bold',
    },
    subTitle: {
      fontSize: 8,
      lineHeight: 10,
      fontFamily: 'NunitoSans_400Regular',
      color: 'gray',
    },
    big: {
      fontSize: 128,
      lineHeight: 172,
      fontFamily: 'NunitoSans_700Bold',
      color: 'gray',
    },
  },
  cardVariants: {
    default: {
      backgroundColor: 'white',
      borderRadius: 'xxl_36',
      shadowColor: 'gray',
      shadowOffset: {
        height: 2,
        width: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
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
export type ThemeSpacing = keyof Theme['spacing'];

export const getKeyColorByValue = (value: string): ThemeColors | undefined => {
  const object: { [key in ThemeColors]: string } = theme.colors;
  return Object.keys(object).find((key) => object[key as ThemeColors] === value) as ThemeColors;
};
