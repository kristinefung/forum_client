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
            contrastText: '#d4d4d4',
        },
        secondary: { // Red
            light: '#820000',
            main: '#dc143c',
            dark: '#510b0b',
            contrastText: '#d4d4d4',
        },
        background: {
            default: '#222222',
        },
        text: {
            primary: '#d4d4d4',
            secondary: '#8e8e8c',
            disabled: '#bdbdbd',
        },
    },
    components: {
        MuiFormControl: {
            defaultProps: {
                size: "small",
            },
            styleOverrides: {
                root: {
                    margin: '10px 0px',
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: '#fff',
                    backgroundColor: '#343434',
                    // '&.Mui-disabled': {
                    //   backgroundColor: '#e4e4e4',
                    // },
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                size: "small",
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: `2px solid #343434`,
                    },
                    "&.Mui-focused": {
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: `2px solid #232323`,
                        },
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: `2px solid #232323`,
                    },

                },
            }
        },
        MuiInputLabel: {
            defaultProps: {
                sx: {
                    fontSize: "13px",
                    top: 2,
                },
            },
            styleOverrides: {
                shrink: ({ ownerState, theme }) => ({
                    ...(ownerState.shrink && {
                        fontSize: "1rem !important",
                        top: "-1 !important",
                    }),
                }),
                root: {
                    color: '#d4d4d4',
                    "&.Mui-focused": {
                        color: '#d4d4d4',
                    }
                }
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: '10px 0px',

                },
            },
        },
    }
});
export default theme;