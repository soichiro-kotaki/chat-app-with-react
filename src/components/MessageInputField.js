import React, { useState, useRef } from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';
import { gravatarPath } from '../gravatar';
import MessageField from './MessageField';
import MessageSubmitButton from './MessageSubmitButton';

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: "26px"
    }
});

const MessageInputField = ({ name }) => {
    const inputEL = useRef(null);
    const [text, setText] = useState('');
    const [time, setTime] = useState('');
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    const showTime = () => {
        let setMessageTime = new Date();
        const timeOfMessage = `${setMessageTime.getMonth()+1}月${setMessageTime.getDate()}日  ${setMessageTime.getHours()}時${setMessageTime.getMinutes()}分`;
        setTime(timeOfMessage);
    };

    return (
        <div className={classes.root}>
           <Grid container>
                <Grid item xs={1}>
                    <Avatar alt="" src={avatarPath}/>
                </Grid>
                <Grid item xs={10}>
                    <MessageField
                        name={name}
                        setText={setText}
                        text={text}
                        inputEL={inputEL}
                        time={time}
                        setTime={setTime}
                        showTime={showTime}
                    />
                </Grid>
                <Grid item xs={1}>
                    <MessageSubmitButton
                        name={name}
                        setText={setText}
                        text={text}
                        inputEL={inputEL}
                        time={time}
                        setTime={setTime}
                        showTime={showTime}
                    />
                </Grid>
           </Grid>
        </div>
    );
};

export default MessageInputField;
