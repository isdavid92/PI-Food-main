import style from './Nav.module.css';
import logOut from './assets/img/buttonLogOut.png';
import home from './assets/img/buttonHome.png';
import { Link } from "react-router-dom";

const Nav = ({ name }) => {
    return(
        <nav className={style.nav}>
            <div className={style.shadeBar}/>
            <div className={style.bar}>
                <h1 className={style.greeting}>Hi {name}!...</h1>
                <h1 className={style.greeting}>search recipe:</h1>
                <input type="text" className={style.input} placeholder='your recipe here...'/>
                <Link to={'/home'}>
                    <img src={home} className={style.home} title='home'/>
                </Link>
                <Link to={'/'} className={style.linklogOut}>
                    <img src={logOut} className={style.logOut} title='log out'/>
                </Link>
            </div>
            <h3 className={style.chef}>The Chef´s Secret</h3>
        </nav>
    )
};

export default Nav