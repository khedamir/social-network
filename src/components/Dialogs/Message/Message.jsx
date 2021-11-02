import s from './../Dialogs.module.css'



function Message(props) {
    return (

        <li className={s.message}>{props.message}</li>

    )
}



export default Message