import Card from '../card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import style from './Cards.module.css';
import { useLocation } from 'react-router-dom';
import { addPage, getRecipesTitle, setRecipesFound } from '../../redux/actions';

const Cards = ({ handleDetail }) => {

    const recipes = useSelector(state => state.allRecipes);
    const recipesFound = useSelector(state => state.recipesFound);
    const [ nineRecipes, setNineRecipes ] = useState([]);
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const pageState = useSelector(state => state.page);
    const [ page, setPage ] = useState();
    
    const funNumPages = () => {
        if (pathname=='/home') return Math.ceil(recipes.length/9);
        if (pathname=='/search') return Math.ceil(recipesFound.length/9)
    };
    const numPages = funNumPages();

    useEffect(() => {
        setPage(pageState);
        handleRender(page)
      }, [page,pathname,recipesFound,pageState]);

    const handleRender = (pag) => {
        let pos1 = (0 + 9)*(pag-1);
        let pos2 = pos1 + 9;
        if (pathname=='/home') setNineRecipes(recipes.slice(pos1,pos2));
        if (pathname=='/search') {
            if (typeof recipesFound[0]==='string'){
                dispatch(setRecipesFound());
                alert(recipesFound[0])
            } else {
                setNineRecipes(recipesFound.slice(pos1,pos2));
            }
        }
    };

    const handleArrow = (order) => {
        let pag = page;
        if (order==='<') {
            if (pag===1) return;
            dispatch(addPage(pag-1))
        } else {
            if (pag===numPages) return;
            dispatch(addPage(pag+1))
        }
    }

    const handleClassName = (pag) => {
            if (page==pag) return style.shadeNumVis;
            return style.shadeNum
    };
    
    return (
        <>
            <div className={style.cards}>
            {
                nineRecipes.map((recipe, index) => {
                    return(
                        <Card key={index} recipe={recipe} handleDetail={handleDetail} page={page}/>     
                    )
                })
            }
            </div>
            <div className={style.shadePag}>
                <h3 className={style.shadeArrow}>{'<<'}</h3>
                {
                    Array.from({length: numPages}, (_, i) => i + 1).map(num => (
                        <h4 className={handleClassName(num)} key={num}>{num}</h4>
                    ))
                }
                <h3 className={style.shadeArrow}>{'>>'}</h3>
            </div>
            <div className={style.pag}>
                <h3 className={style.num} onClick={() => handleArrow('<')}>{'<<'}</h3>
                {
                    Array.from({length: numPages}, (_, i) => i + 1).map(num => (
                        <h4 className={style.num} onClick={() => dispatch(addPage(num))} key={num}>{num}</h4>
                    ))
                }
                <h3 className={style.num} onClick={() => handleArrow('>')}>{'>>'}</h3>
            </div>
        </>
    )
    
};

export default Cards