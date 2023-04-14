import React from 'react';
import type { Preview } from '@storybook/react';
import { CssBaseline, ThemeProvider, createTheme, theme } from 'ui';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

const muiTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: "'Nunito', sans-serif",
  },
});

export const withMuiTheme = (Story: any) => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];

export default preview;
