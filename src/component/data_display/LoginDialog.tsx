import * as React from 'react';
import { Dialog, Box, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import TextField from '../form_field/TextField';
import theme from '../../../theme';

interface LoginDialogProps {
    open: boolean;
    handleClose: () => void;
}

type FormType = "LOGIN" | "REGISTER";

const LoginDialog: React.FC<LoginDialogProps> = (props) => {
    const [formType, setFormType] = React.useState<FormType>("LOGIN");

    const handleTabOnClick = (type: FormType) => {
        setFormType(type);
    }

    const tabStyle = {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    };

    const loginForm = (<>
        <>
            <Typography variant='h6' mb={'10px'} align='center'>
                歡迎你回來！
            </Typography>
            <TextField
                label="電郵"
            />
            <TextField
                label="密碼"
            />
            <FormControlLabel
                control={<Checkbox />}
                label="保持登入狀態"
            />
            <Button
                variant="contained"
                color='primary'
            >
                登入
            </Button>
        </>
    </>);

    const registerForm = (<>
        <TextField
            label="暱稱"
            tooltip={<>這是公開給所有人看到的暱稱</>}
        />
        <TextField
            label="電郵"
            tooltip={<>你的電郵不會公開被人看到</>}
        />
        <TextField
            label="密碼"
            tooltip={<><div>密碼必須包含</div><div>大細階英文字母</div><div>數字</div><div>大於8個字</div><div>特殊符號</div></>}
        />
        <TextField
            label="確認密碼"
        />
        <Button
            variant="contained"
            color='primary'
        >
            註冊
        </Button>
    </>);

    return (
        <Dialog
            open={props.open}
            keepMounted
            onClose={props.handleClose}
            aria-describedby="alert-dialog-slide-description"
            sx={{
                "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                        width: "80%",
                        minWidth: "300px",
                        maxWidth: "600px",
                        height: "600px",
                        backgroundColor: theme.palette.secondary.light,
                    },
                },
            }}
        >
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '60px', backgroundColor: theme.palette.primary.dark, }}>
                    <Box sx={{
                        ...tabStyle,
                        backgroundColor: formType === "LOGIN" ? theme.palette.secondary.light : theme.palette.primary.dark,
                        color: formType === "LOGIN" ? theme.palette.secondary.contrastText : theme.palette.secondary.main,
                        fontWeight: 700,
                    }}
                        onClick={() => handleTabOnClick("LOGIN")}>
                        登入
                    </Box>
                    <Box sx={{
                        ...tabStyle,
                        backgroundColor: formType === "REGISTER" ? theme.palette.secondary.light : theme.palette.primary.dark,
                        color: formType === "REGISTER" ? theme.palette.secondary.contrastText : theme.palette.secondary.main,
                        fontWeight: 700,
                    }}
                        onClick={() => handleTabOnClick("REGISTER")}>
                        註冊
                    </Box>
                </Box>
                <Box sx={{ padding: '28px 34px', display: 'flex', flexDirection: 'column' }}>
                    {
                        formType === "LOGIN" ?
                            loginForm :
                            registerForm
                    }
                </Box>
            </Box>

        </Dialog >
    );
}

export default LoginDialog;