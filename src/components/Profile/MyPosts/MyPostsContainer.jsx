import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

function MyPostsContainer(props) {
    let profilePage = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts 
            profilePage = {profilePage}
            addPost={addPost}
            onPostChange={onPostChange} />
    );
}

export default MyPostsContainer;