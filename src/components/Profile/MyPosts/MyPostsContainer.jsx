import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

// function MyPostsContainer() {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let profilePage = store.getState().profilePage;

//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     }

//                     let onPostChange = (text) => {
//                         store.dispatch(updateNewPostTextActionCreator(text))
//                     }
//                     return (
//                         <MyPosts
//                             profilePage={profilePage}
//                             addPost={addPost}
//                             onPostChange={onPostChange} />
//                     )

//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        onPostChange: (text) => dispatch(updateNewPostTextActionCreator(text))
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;