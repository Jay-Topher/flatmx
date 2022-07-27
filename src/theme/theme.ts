import { Palette, PaletteOptions } from "@mui/material";
import type {} from "@mui/lab/themeAugmentation";
import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface Theme {
    palette: Palette;
    typography: Typography;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette?: PaletteOptions;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5a5a",
    },
    secondary: {
      main: "#2d2d4d",
    },
    text: {
      primary: "rgba(0,0,0,0.87)",
      secondary: "rgba(0,0,0,0.6)",
    },
    common: {
      white: '#f5f7ff'
    }
  },
  typography: {
    fontFamily: "'Montserrat', 'Source Sans Pro', 'Helvetica', 'Arial', sans-serif",
  },
});

export default theme;
