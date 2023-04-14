import { Nunito } from 'next/font/google';
import { createTheme, theme } from 'ui';

export const nunito = Nunito({
  weight: ['600', '800'],
  subsets: ['latin'],
  // minimizes the risk of invisible text or layout shift
  display: 'swap',
  fallback: ['sans-serif'],
});

export const muiTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
});
