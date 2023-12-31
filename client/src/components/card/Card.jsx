import style from './Card.module.css';
import { useNavigate } from 'react-router-dom';
import delt from './assets/img/delete.png';
import { useDispatch, useSelector } from 'react-redux';
import { removeRecipe, addPage } from '../../redux/actions';

const Card = ({ recipe, handleDetail }) => {

    const recipesState = useSelector(state => state.recipes);
    const pageState = useSelector(state => state.page);
    const dispatch = useDispatch();
    
    const diets = () => {
        const dietsCopy = [...recipe.diets];
        if (recipe.diets.length===0) return '';
        if (recipe.diets.length===1) return recipe.diets[0];
        const lastDiet = dietsCopy.pop();
        return dietsCopy.join(', ') + ' and ' + lastDiet
    };
    
    const navigate = useNavigate();
    
    const handleDetailId = () => {
        navigate('/detail');
        handleDetail(recipe.id)
    };

    const handleOrigin = () => {
        if (recipe.origin=='data base') {
            return (
                <h4 className={style.origin}>"Data Base"</h4>
            )
        } else if (recipe.origin=='api'){
            return (
                <h4 className={style.api}>"API"</h4>
            )
        }
    }

    const handleDelete = () => {
        const id = recipe.id;
        dispatch(removeRecipe({ id,recipesState}));
        const numRecipes = recipesState.length
        const pages = Math.ceil(numRecipes / 9);
        const lastRecipe = (numRecipes-1) % 9 === 0;
        if (pageState===pages && lastRecipe) dispatch(addPage(pageState-1))
    }

    return (
        <div className={style.card}>
            <div className={style.info}>
                <img src={recipe.image} className={style.image}/>
                {handleOrigin()}
                <img src={delt} className={style.delt} onClick={() => handleDelete()}/>
                <div className={style.nameDiets} onClick={() => handleDetailId()}>
                    <h1 className={style.name}>{recipe.title}</h1>
                    <h4 className={style.dietsTit}>Diets:</h4>
                    <h3 className={style.diets}>{diets()}</h3>
                </div>
            </div>
        </div>
    )
};

export default Card