import React from "react";
import s from "./Users.module.css"

function Users(props) {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: "https://avatars.mds.yandex.net/get-zen_doc/1583807/pub_5cdda85e11a06000b51cf757_5cddab1ddee36d00b47e4b08/scale_1200",
                fullname: "Kheda", status: "i am programmer",
                location: {
                    country: "Russia", city: "Grozny",
                    followed: true
                }
            },
            {
                id: 2, photoUrl: "https://sdelaicomp.ru/wp-content/uploads/2019/06/PhotoNaAvuVK_14_9.jpg",
                fullname: "Khalid", status: "i am technoblogger",
                location: {
                    country: "Russia", city: "Grozny",
                    followed: true
                }
            },
        ])
    }
    return (
        <div>
            <h1>Users</h1>
            {props.users.map((u) => <div key={u.id} className={s.userProfile}>
                <div className={s.userProfilePhoto}>
                    <img src={u.photoUrl} alt="" className={s.profilePhoto} />
                    {u.followed ?
                        <button className={s.followedBtn} onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                        <button className={s.followedBtn} onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>
                <div className={s.profileDescription}>
                    <div>
                        <h3>{u.fullname}</h3>
                        <p>{u.status}</p>
                    </div>
                    <div>
                        <p>{u.location.country}</p>
                        <p>{u.location.city}</p>

                    </div>
                </div>
            </div>)}
        </div>
    )
}


export default Users;