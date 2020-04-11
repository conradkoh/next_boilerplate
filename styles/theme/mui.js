import { createMuiTheme } from '@material-ui/core/styles';
import { COLORS } from '../index';
const theme = createMuiTheme({
    palette: {
        // type: 'dark',
        primary: {
            // dark: COLORS.DARK_HIGHLIGHT, //Highlight color for buttons
            main: COLORS.DARK_TEXT, //Background color for buttons, Highlight color for
            // light: COLORS.PRIMARY,
            // contrastText: COLORS.PRIMARY_CONTRAST, //Text color for buttons
        },
        secondary: {
            // dark: COLORS.LIGHT_TEXT, //Highlight color for buttons
            main: COLORS.DARK, //Background color for buttons
            // light: COLORS.LIGHT_TEXT,
            // contrastText: COLORS.DARK_TEXT, //Text color for buttons
        },
        error: {
            main: COLORS.LIGHT_TEXT,
        },
        // background: {
        //     paper: COLORS.BACKGROUND_DARK,
        // },
    },
});
export default theme;
