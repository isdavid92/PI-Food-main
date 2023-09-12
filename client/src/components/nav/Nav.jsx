import style from './Nav.module.css';
import logOut from './assets/img/buttonLogOut.png';
import home from './assets/img/buttonHome.png';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

const Nav = () => {
    const name = useSelector(state => state.name);
    const { pathname } = useLocation();

    return(
        <nav>
            <div className={style.shadeBar}/>
            <div className={style.bar}>
                <h1 className={style.greeting}>Hi {name}!...</h1>
                <h1 className={style.greeting}>search recipe:</h1>
                <input type="text" className={style.input} placeholder='your recipe here...'/>
                {
                    pathname !== '/home' &&
                    <Link to={'/home'}>
                    <img src={home} className={style.home} title='home'/>
                    </Link>
                }
                <Link to={'/'} className={style.linklogOut}>
                    <img src={logOut} className={style.logOut} title='log out'/>
                </Link>
            </div>
            <div className={style.options}>
                <h3 className={style.chef}>The Chef´s Secret</h3>
                {
                    pathname == '/home' &&
                    <>
                        <Link to={'/form'} className={style.Linkcreate}>
                            <h1 className={style.shadeCreate}>{'create your recipe here O'}</h1>
                            <h1 className={style.create}>{'create your recipe here🍽️'}</h1>
                        </Link>
                        <Link to={'/filter'} className={style.linkFilter}>
                            <h1 className={style.shadeFilter}>{'filter and sort >>'}</h1>
                            <h1 className={style.filter}>{'filter and sort >>'}</h1>
                        </Link>
                    </>
                }
            </div>
        </nav>
    )
};

export default Nav