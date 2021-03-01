import React, { useEffect, useRef } from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { gravatarPath } from '../gravatar';



const useStyles = makeStyles(() => ({
    inline: {
        display: 'inline',
    },
    button: {
        marginLeft: '50px'
    },
    multiline: {
        color: 'black'
    }
}));

const MessageItem = ({ name, text, isLastItem, time, postKey}) => {
    const ref = useRef(null)
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    useEffect(() => {
        if (isLastItem) {
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [isLastItem])

    return (
        <ListItem divider={true} ref={ref}>
            <ListItemAvatar>
            <Avatar src={avatarPath} />
            </ListItemAvatar>
            <ListItemText
                primary={name}
                className={classes.multiline}
                secondary={
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                    {text}
                    </Typography>
                }
            />
            <p>{time}</p>
        </ListItem>
    );
};

export default MessageItem;
