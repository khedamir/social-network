import React from "react";
import s from "./Users.module.css";
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component{
    componentDidMount () {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }
    render(){
        return (
            <div>
                <h1>Users</h1>
                {this.props.users.map((u) => <div key={u.id} className={s.userProfile}>
                    <div className={s.userProfilePhoto}>
                        {u.photos.large ?
                            <img src={u.photos.small} alt="" className={s.profilePhoto} /> :
                            <img src={userPhoto} alt="" className={s.profilePhoto} />}
    
                        {u.followed ?
                            <button className={s.followedBtn} onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> :
                            <button className={s.followedBtn} onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
                </div>)}
            </div>
        )
    }
}

export default Users;