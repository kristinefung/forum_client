import * as React from 'react';
import { TextField as MuiTextField, InputAdornment, Tooltip, Box } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { SvgIconProps } from '@mui/material/SvgIcon';

import theme from '../../../theme';
import { useState } from 'react';

interface TextFieldProps {
    label: string
    tooltip?: React.ReactNode
}


const TextField: React.FC<TextFieldProps> = (props) => {
    const [open, setOpen] = useState(false);

    const handleFocus = () => {
        if (props.tooltip) {
            setOpen(true);
        }
    };

    const handleBlur = () => {
        if (props.tooltip) {
            setOpen(false);
        }
    };


    const textField = (
        <MuiTextField
            id="outlined-basic"
            label={props.label}
            onFocus={handleFocus}
            onBlur={handleBlur}
            variant="outlined"
            autoComplete='off'
        />
    );

    return (
        <>
            {props.tooltip ? (
                <Tooltip
                    title={props.tooltip}
                    open={open}
                    arrow
                    placement="bottom-end"
                >
                    {textField}
                </Tooltip>
            ) : (
                textField
            )}
        </>
    );
}

export default TextField;