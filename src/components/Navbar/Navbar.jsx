import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

function Navbar(props){
    // let friends = props.store.getState().sidebar.friends
    // let friendsElement = friends.map(
    //     (f)=> (<li className={s.friendItem}><a href=""><div className = {s.friendsAva}></div>{f.name}</a></li>))

    return (
        <nav className={s.nav}>
            <ul className={s.navItems}>
                <li className={s.navItem}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.navItem}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                {/* <li className={s.navItem}><NavLink to="" activeClassName={s.active}>News</NavLink></li>
                <li className={s.navItem}><NavLink to="" activeClassName={s.active}>Music</NavLink></li> */}
                <li className={`${s.navItem} ${s.navItemSettings}`}><a href="">Settings</a></li>
            </ul>

            {/* <div className={s.friends}>
                <h4>Friends</h4>
                <ul className={s.friendsItems}>
                    {friendsElement}
                </ul>
            </div> */}
        </nav>
    );
}

export default Navbar;