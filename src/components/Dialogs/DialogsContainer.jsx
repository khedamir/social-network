import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';




// function DialogsContainer() {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let dialogsPage = store.getState().dialogsPage;

//                     let sendMessage = () => {
//                         store.dispatch(sendMessageActionCreator())
//                     }

//                     let onMessageChange = (text) => {
//                         store.dispatch(updateNewMessageTextActionCreator(text))
//                     }
//                     return <Dialogs
//                         dialogsPage={dialogsPage}
//                         sendMessage={sendMessage}
//                         onMessageChange={onMessageChange}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>
//     )

// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage:  () => dispatch(sendMessageActionCreator()),
        onMessageChange: (text) => dispatch(updateNewMessageTextActionCreator(text))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer