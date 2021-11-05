import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let profilePage = store.getState().profilePage;

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    }
                    return (
                        <MyPosts
                            profilePage={profilePage}
                            addPost={addPost}
                            onPostChange={onPostChange} />
                    )

                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;