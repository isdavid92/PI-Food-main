import Card from '../card/Card';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import style from './Cards.module.css';

const Cards = () => {
    const recipes = useSelector(state => state.allRecipes);
    // let nineRecipes = [];
    const [ nineRecipes, setNineRecipes ] = useState([]);

    useEffect(() => {
        setNineRecipes(recipes.slice(0,9))
      }, []);
    
      console.log(recipes.length);

    const handleRender = (pag) => {
        let pos1 = (0 + 9)*(pag-1);
        let pos2 = pos1 + 9;
        setNineRecipes(recipes.slice(pos1,pos2))
    };
    
    return (
        <>
            <div className={style.cards}>
            {
                nineRecipes.map((recipe, index) => {
                    return(
                        <Card key={index} recipe={recipe}/>     
                    )
                })
            }
            </div>
            <div className={style.pag}>
                <h3 className={style.num}>{'<<'}</h3>
                <h4 className={style.num} onClick={() => handleRender(1)}>1</h4>
                <h4 className={style.num} onClick={() => handleRender(2)}>2</h4>
                <h4 className={style.num} onClick={() => handleRender(3)}>3</h4>
                <h4 className={style.num} onClick={() => handleRender(4)}>4</h4>
                <h4 className={style.num} onClick={() => handleRender(5)}>5</h4>
                <h4 className={style.num} onClick={() => handleRender(6)}>6</h4>
                <h4 className={style.num} onClick={() => handleRender(7)}>7</h4>
                <h4 className={style.num} onClick={() => handleRender(8)}>8</h4>
                <h4 className={style.num} onClick={() => handleRender(9)}>9</h4>
                <h4 className={style.num} onClick={() => handleRender(10)}>10</h4>
                <h4 className={style.num} onClick={() => handleRender(11)}>11</h4>
                <h3 className={style.num}>{'>>'}</h3>
            </div>
        </>
    )
    
};

export default Cards