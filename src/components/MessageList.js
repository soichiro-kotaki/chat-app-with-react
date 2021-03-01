import React, { useState, useEffect } from 'react';
import { List, }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { messagesRef } from "../firebase";
import MessageItem from "./MessageItem";

const useStyles = makeStyles({
    root: {
        gridRow: 1,
        overflow: 'auto',
        width: '100%'
    }
});

const MessageList = () => {
    const classes = useStyles();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        messagesRef.orderByKey().limitToLast(15).on('value', (snapshot) => {
            const messages = snapshot.val();
            if (messages === null) return;

            const entries = Object.entries(messages);
            const newMessages = entries.map((entry) => {
                const [key, nameAndTextAndTime] = entry;

                return {key, ...nameAndTextAndTime};
            });
            setMessages(newMessages);
        });
    }, []);

    const length = messages.length;

    return (
        <List className={classes.root}>
            {
                messages.map(({ key, name, text, time }, index) => {
                    const isLastItem = length === index + 1;
                    return <MessageItem name={name} text={text} key={key} isLastItem={isLastItem} time={time} />
                })
            }
        </List>
    );
};

export default MessageList;

