import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

function MyPosts(props) {
    let posts = props.profilePage.posts;
    let postsElements = posts.map(p => (<Post message={p.message} like={p.likes} />));
    postsElements.reverse();


    let newPostElement = React.createRef();
    let onAddPost = () =>{
        props.addPost()
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.onPostChange(text)
    }


    return (
        <div className={s.mypost}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange = {onPostChange} 
                    ref = {newPostElement} 
                    value = {props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            {postsElements}
        </div>
    );
}

export default MyPosts;