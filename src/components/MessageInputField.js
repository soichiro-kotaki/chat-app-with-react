import React, { useState } from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';
import { gravatarPath } from '../gravatar';
import MessageField from './MessageField';

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: "26px"
    }
});

const MessageInputField = ({name}) => {
    const [text, setText] = useState('');
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    return (
        <div className={classes.root}>
           <Grid container>
                <Grid xs={1}>
                    <Avatar alt="" src={avatarPath}/>
                </Grid>
                <Grid xs={10}>
                    <MessageField name={name} setText={setText} text={text}/>
                </Grid>
                <Grid xs={1}>
                    fasjasn
                </Grid>
           </Grid>
        </div>
    )
};

export default MessageInputField;
