import { ThemeOptions } from '@mui/material/styles';

const colors = {
  white: '#FFFFFF',
  green: {
    $300: '#03D69D',
  },
  blue: {
    $400: '#133A6F',
  },
  gray: {
    $500: '#4D4D4D',
    $400: '#B2B2B2',
    $300: '#E5E5E5',
    $200: '#AFAFAF',
  },
};

export const theme: ThemeOptions = {
  spacing: 2,
  palette: {
    primary: {
      main: colors.green.$300,
    },
    secondary: {
      main: colors.blue.$400,
    },
    white: {
      main: colors.white,
    },
    neutral: {
      darker: colors.gray.$500,
      dark: colors.gray.$400,
      main: colors.gray.$300,
      light: colors.gray.$200,
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        // root: {
        // textTransform: 'none',
        // fontWeight: 600,
        // borderRadius: 8,
        // },
        // sizeMedium: {
        // paddingLeft: 10,
        // px: 10,
        // fontSize: 18,
        // },
      },
    },
  },
};
