import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    palette: {
        primary: { // Black
            light: '#343434',
            main: '#292929',
            dark: '#232323',
            contrastText: '#fff',
        },
        secondary: { // Red
            light: '#8e0000',
            main: '#6b0000',
            dark: '#470000',
            contrastText: '#fff',
        },
        background: {
            default: '#222222',
        },
        text: {
            primary: '#ffffff',
            secondary: '#8e8e8c',
            disabled: '#bdbdbd',
        },
    },
});
export default theme;