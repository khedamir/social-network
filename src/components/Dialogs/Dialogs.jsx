import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';




function Dialogs(props) {
    let dialogsElements = props.dialogsPage.dialogs.map(d => (<DialogItem name={d.name} id={d.id} />))
    let messagesElements = props.dialogsPage.messages.map(m => (<Message message={m.message} />))


    let newMessageElement = React.createRef();
    let onSendMessage = ()=>{
        props.sendMessage()
    }
    
    
    let onMessageChange = () =>{
        let text = newMessageElement.current.value;
        props.onMessageChange(text)
    }

    return (
        <div className={s.dialogs}>

            <ul className={s.dialogItems}>
                {dialogsElements}
            </ul>

            <div className={s.messages}>
                <ul className={s.messageItems}>
                    {messagesElements}
                </ul>

                <div className={s.messageSend}>

                   <textarea onChange = {onMessageChange}
                    ref = {newMessageElement}
                    value = {props.dialogsPage.newMessageText}/> 

                   <button onClick = {onSendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs