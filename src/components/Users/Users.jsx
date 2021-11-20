import React from "react";
import s from "./Users.module.css";
import userPhoto from '../../assets/images/user.png'
import Preloader from "../common/Preloader/Preloader";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return (
        <div>
            <h1>Users</h1>
            
            <div className={s.pageNumbers}>
                {pages.map((p) => {
                    return <span onClick={() => props.onPageChanged(p)}
                        className={s.pageNumber} id={props.currentPage === p && s.pageNumberActive}>{p}</span>
                })}

            </div>

            <div>{props.isFetching ? <Preloader /> : 
            props.users.map((u) => <div key={u.id} className={s.userProfile}>
                <div className={s.userProfilePhoto}>
                    {u.photos.large ?
                        <img src={u.photos.small} alt="" className={s.profilePhoto} /> :
                        <img src={userPhoto} alt="" className={s.profilePhoto} />}

                    {u.followed ?
                        <button className={s.followedBtn} onClick={() => { props.unFollow(u.id) }}>Unfollow</button> :
                        <button className={s.followedBtn} onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>
                <div className={s.profileDescription}>
                    <div>
                        <h3>{u.name}</h3>
                        <p>{u.status}</p>
                    </div>
                    <div>
                        <p>{"u.location.country"}</p>
                        <p>{"u.location.city"}</p>

                    </div>
                </div>
            </div>)
            }</div>

            
        </div>
    )
}

export default Users;