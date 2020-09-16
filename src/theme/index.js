import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#d7ccc8',
      // default: colors.common.white,
      // paper: colors.common.white
      default: "#f3e5f5",
      paper: "#f3e5f5"
    },
    primary: {
      // main: colors.indigo[500],
      main: colors.blueGrey[500]
      // main: colors.pink[200]
    },
    secondary: {
      main: colors.indigo[500]
      // main: colors.teal[500]
      // main: colors.pink[500]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
      header: colors.blueGrey.A100
    }
  },
  shadows,
  typography
});

export default theme;
