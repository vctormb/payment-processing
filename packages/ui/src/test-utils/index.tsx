import { ReactElement, ReactNode } from 'react';
import { ThemeProvider, createTheme, theme } from '..';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const muiTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: 'sans-serif',
  },
});

function AllTheProviders({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
}

export function setup(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllTheProviders, ...options }),
  };
}

// re-export everything
export * from '@testing-library/react';
