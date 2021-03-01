import React from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { pushMessage } from '../firebase';

const MessageSubmitButton = ({ name, setText, text, inputEL, time, showTime }) =>  {
    return (
        <IconButton disabled={text === ''} onClick={() => {
            showTime();
            pushMessage({ name, text, time });
            inputEL.current.focus();
            setText('');
        }}>
            <SendIcon />
        </IconButton>

    );
};

export default MessageSubmitButton;
