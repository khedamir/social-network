import s from './Post.module.css'


function Post(props) {
    return (
        <div className={s.post}>
            <img src="https://cs9.pikabu.ru/post_img/2017/05/12/8/1494592816133830021.jpg" alt="" />
            {props.message}
            <div>
                <span>like {props.like}</span>
            </div>
        </div>
    );
}

export default Post;