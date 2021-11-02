import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'


function DialogItem (props) {
    const path = "/dialogs/" + props.id;
    return (
        <li className={s.dialog}><NavLink to={path} activeClassName={s.active}>{props.name}</NavLink></li>
    )
}





export default DialogItem