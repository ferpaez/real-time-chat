import React from 'react';
import {PrettyChatWindow} from 'react-chat-engine-pretty';


const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh', fontFamily: 'sans-serif'}}>
            
            <PrettyChatWindow 
                projectId='68edf3f2-5b47-4556-93db-5d98d26cd09b'
                username = {props.user.username}
                secret={props.user.secret}
                style={{ fontFamily: 'sans-serif', height: '100%' }}
            />
        </div>
    );
}


export default ChatsPage;
