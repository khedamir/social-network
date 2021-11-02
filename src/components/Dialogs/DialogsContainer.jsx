import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';




function DialogsContainer(props) {
    let dialogsPage = props.store.getState().dialogsPage;


    let sendMessage = ()=>{
        props.store.dispatch(sendMessageActionCreator())
    }
    
    
    let onMessageChange = (text) =>{
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return <Dialogs 
            dialogsPage = {dialogsPage}
            sendMessage = {sendMessage}
            onMessageChange = {onMessageChange}
        />
}

export default DialogsContainer