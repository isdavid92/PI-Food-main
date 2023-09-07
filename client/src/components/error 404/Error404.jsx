import img from './assets/img/oh_no.gif';
import style from './Error404.module.css';
import { Link } from "react-router-dom";
const Error404 = () => {
    return (
        <div className={style.Error404}>
            <div className={style.container}>
                <img className={style.gif} src={img} />
                <h2>ERROR 404</h2>
                <h1>THIS ADDRESS DOES NOT EXIST 😪</h1>
                <Link to={'/'}>
                    <button className={style.button}>Go to start</button>
                </Link>
            </div>
        </div>
    )
}

export default Error404;