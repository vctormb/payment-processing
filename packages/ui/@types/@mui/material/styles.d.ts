import type {
  Palette as MuiPalette,
  PaletteOptions as MuiPaletteOptions,
} from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    white: MuiPalette['primary'];
    neutral: MuiPalette['primary'];
  }

  interface PaletteOptions {
    white: MuiPaletteOptions['primary'];
    neutral: MuiPaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}
