const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"


let initialState = {
    dialogs:[
        {id: 1, name: "Kheda"},
        {id: 2, name: "Mata"},
        {id: 3, name: "Seda"},
        {id: 5, name: "Mohmad"},
        {id: 9, name: "Bilal"},
        {id: 4, name: "Usman"},
        {id: 6, name: "Adam"},
        {id: 7, name: "Amina"},
        {id: 8, name: "Zalina"},
        {id: 10, name: "Linda"},
      ],
    messages: [
        {id: 0, message: 'Hi! How are you?'},
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Welcome!'},
      ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) =>{
    switch (action.type){
        case SEND_MESSAGE: {
            if(state.newMessageText){
                let message = {
                    id: state.messages.length,
                    message: state.newMessageText,
                }
                let stateCopy = {...state}
                stateCopy.messages = [...state.messages]
                stateCopy.messages.push(message);
                stateCopy.newMessageText = '';
                return stateCopy;
            }
            return state;
        }

        case UPDATE_NEW_MESSAGE_TEXT:{
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}


export const sendMessageActionCreator = ()=>({type: SEND_MESSAGE})

export const updateNewMessageTextActionCreator = (newText)=>({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newText,
})

export default dialogsReducer;