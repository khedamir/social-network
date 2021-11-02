const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 0, message: "Hi! How are you?", likes: 12 },
        { id: 1, message: "Hello", likes: 14 },
        { id: 2, message: "Welcome", likes: 12 },
        { id: 3, message: "It's my first post", likes: 30 },
      ],
    newPostText: '',
}


const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            if(state.newPostText){
                let post = {
                    id: state.posts.length,
                    message: state.newPostText,
                    likes: 0,
                }
                state.posts.push(post);
                state.newPostText = '';
            }
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        
        default: 
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (newText) =>{
    return ({
        type: UPDATE_NEW_POST_TEXT,
        newText: newText,
    });
}

export default profileReducer;