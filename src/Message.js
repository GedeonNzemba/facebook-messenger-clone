import React, { forwardRef } from 'react'
import Card from '@mui/material/Card';
import './App.css';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;

    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? 'message_userCard' : 'message_guestCard'}>
                <CardContent>
                    <Typography
                        color="black"
                        variant="h5"
                        component="h2"
                    >
                        {!isUser && `${message.username || 'Unknown User'}: `}: {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message;