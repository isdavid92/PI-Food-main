import Card from '../card/Card';
import { useSelector } from 'react-redux';
import style from './Cards.module.css';

const Cards = () => {
    const recipes = useSelector(state => state.allRecipes);
    console.log(recipes);
    
    return (
        <div className={style.cards}>
            {
                recipes.map((recipe, index) => {
                    return(
                        <Card key={index} recipe={recipe}/>
                    )
                })
            }
        </div>
    )
    
};

export default Cards