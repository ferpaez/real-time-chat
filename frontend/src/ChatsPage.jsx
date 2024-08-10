import React from 'react';
import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
const projectId = import.meta.env.VITE_PROJECT_ID;
    return (
        <div style={{ height: '100vh', fontFamily: 'sans-serif'}}>
            
            <PrettyChatWindow 
                projectId={projectId}
                username = {props.user.username}
                secret={props.user.secret}
                style={{ fontFamily: 'sans-serif', height: '100%' }}
            />
        </div>
    );
}


export default ChatsPage;
