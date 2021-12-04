import s from './Header.module.css'
import { NavLink } from 'react-router-dom';


function Header(props){
    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' alt = 'logo'/>

            <div className = {s.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to = {'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;