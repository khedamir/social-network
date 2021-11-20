import preloader from '../../../assets/images/loader.gif'
import s from './Preloader.module.css'

let Preloader = () => {
    return (
        <img className = {s.loader} src={preloader} alt="загрузка" />
    )
}

export default Preloader