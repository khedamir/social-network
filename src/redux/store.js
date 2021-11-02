import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _callSubscribe(){

    },

    _state: {
        profilePage: {
            posts: [
                { id: 0, message: "Hi! How are you?", likes: 12 },
                { id: 1, message: "Hello", likes: 14 },
                { id: 2, message: "Welcome", likes: 12 },
                { id: 3, message: "It's my first post", likes: 30 },
              ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 0, name: "Mohmad"},
                {id: 1, name: "Mata"},
                {id: 2, name: "Seda"},
                {id: 2, name: "Adam"},
                {id: 2, name: "Bilal"},
                {id: 2, name: "Kheda"},
            ]
        }
    },

    getState(){
        return this._state
    },

    subscribe(obsever){
        this._callSubscribe = obsever
    },


    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscribe(this._state)
    }
}

export default store