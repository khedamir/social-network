import s from './ProfileInfo.module.css'


function ProfileInfo() {
    return (
        <div className={s.profileInfo}>
            <header className={s.header}></header>
            <div className={s.profileDescrition}>
                <img src="https://avatars.mds.yandex.net/get-pdb/1751508/5ce53352-7bf5-4b8b-801c-a4f1a7e06a0d/s1200" alt = "ava" />
                <div>
                    description
                </div>
            </div>


        </div>
    );
}

export default ProfileInfo;