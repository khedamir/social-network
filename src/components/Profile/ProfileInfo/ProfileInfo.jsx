import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'


function ProfileInfo(props) {

    if (!(props.profile)) {
        return <Preloader />
    }
    return (
        <div className={s.profileInfo}>
            <header className={s.header}></header>
            <div className={s.profileDescrition}>
                {/* <img src="https://avatars.mds.yandex.net/get-pdb/1751508/5ce53352-7bf5-4b8b-801c-a4f1a7e06a0d/s1200" alt="ava" /> */}
                <img src={props.profile.photos.large} alt="ava" />
                <div>
                    <h1>{props.profile.fullName}</h1>
                    <h3>{props.profile.aboutMe}</h3>
                </div>
            </div>


        </div>
    );


}

export default ProfileInfo;