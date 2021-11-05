import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


function Profile() {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;