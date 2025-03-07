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
            main: '#dc143c',
            dark: '#770e0e',
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
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    margin: '14px',
                    '& .MuiOutlinedInput-root': {
                        '& input': {
                            padding: '8px',
                        },
                        '& fieldset': {
                            borderColor: '#343434',
                            borderWidth: '1px',
                        },
                        '&:hover fieldset': {
                            borderColor: '#d4d4d4',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#d4d4d4',
                            borderWidth: '1px',
                        },
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: '#d4d4d4',
                    }
                },
            }
        },
        // MuiButton: {
        //     styleOverrides: {
        //         root: {
        //             backgroundColor: 'green', // Style all buttons
        //             color: 'white',
        //             '&:hover': {
        //                 backgroundColor: 'darkgreen', // Change color on hover
        //             },
        //         },
        //     },
        // },
    }
});
export default theme;