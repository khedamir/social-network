import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';




function DialogsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let dialogsPage = store.getState().dialogsPage;

                    let sendMessage = () => {
                        store.dispatch(sendMessageActionCreator())
                    }

                    let onMessageChange = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text))
                    }
                    return <Dialogs
                        dialogsPage={dialogsPage}
                        sendMessage={sendMessage}
                        onMessageChange={onMessageChange}
                    />
                }
            }
        </StoreContext.Consumer>
    )

}

export default DialogsContainer