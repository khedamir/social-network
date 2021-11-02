import s from './Header.module.css'

function Header(){
    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' />
        </header>
    );
}

export default Header;