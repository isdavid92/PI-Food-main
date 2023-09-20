import style from './Nav.module.css';
import logOut from './assets/img/buttonLogOut.png';
import home from './assets/img/buttonHome.png';
import search from './assets/img/search.png';
import diets from './assets/img/diets.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addPage, getRecipesTitle, setRecipes, addDiet, setDiets } from '../../redux/actions';
import { useEffect, useState } from 'react';
import Filter from './Filter';

const Nav = () => {
    
    const AllRecipesState = useSelector(state => state.allRecipes);
    const recipesState = useSelector(state => state.recipes);
    const name = useSelector(state => state.name);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const [ title, setTitle ] = useState('');
    
    useEffect(() => {
        if (typeof recipesState[0]=='string') {
            alert(recipesState[0]);
            dispatch(setRecipes(AllRecipesState));
            setTitle('');
            navigate('/home')
        }   
    },[recipesState])

    const handleHome = () => {
        dispatch(setRecipes(AllRecipesState));
        dispatch(addPage(1));
        dispatch(setDiets());
        setTitle('');
        navigate('/home')
    }

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
          }
    }

    const handleSearch = () => {
        if (title=='') return alert('¡Enter some ID or recipe name!');
        dispatch(setRecipes([]));
        dispatch(addPage(1));
        dispatch(getRecipesTitle(title));
        navigate('/search')
    }

    const handleDiets = () => {
        const origin = 'nav';
        dispatch(setDiets())
        dispatch(addDiet({origin}))
        navigate('/diets');
    }

    return(
        <nav>
            <div className={style.shadeBar}/>
            <div className={style.bar}>
                <h1 className={style.greeting}>Hi {name}!...</h1>
                <h1 className={style.greeting}>search recipe:</h1>
                <input
                    type="text"
                    className={style.input}
                    placeholder='your recipe here...'
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    value={title}
                />
                <img src={search} className={style.search} title='search' onClick={() => handleSearch()}/>
                {
                    pathname !== '/home' &&
                    <img src={home} className={style.home} title='home' onClick={() => handleHome()}/>
                }
                {
                    pathname == '/home' &&
                    <img src={diets} className={style.diets} title='home' onClick={() => handleDiets()}/>
                }
                <Link to={'/'} className={style.linklogOut}>
                    <img src={logOut} className={style.logOut} title='log out'/>
                </Link>
            </div>
            <div className={style.options}>
                {pathname == '/detail' && <h3 className={style.chef}>The Chef´s Secret</h3>}
                {
                    (pathname == '/home' || pathname == '/search') &&
                    <>
                    <h3 className={style.chef}>The Chef´s Secret</h3>
                        <Link to={'/form'} className={style.Linkcreate}>
                            <h1 className={style.shadeCreate}>{'create your recipe here O'}</h1>
                            <h1 className={style.create}>{'create your recipe here🥧'}</h1>
                        </Link>
                        <Link to={'/filter'} className={style.linkFilter} onClick={() => handleDiets()}>
                            <h1 className={style.shadeFilter}>{'filter and sort >>'}</h1>
                            <h1 className={style.filter}>{'filter and sort >>'}</h1>
                        </Link>
                    </>
                }
                {
                    pathname == '/filter'  &&
                    <Filter/>
                }
            </div>
        </nav>
    )
};

export default Nav