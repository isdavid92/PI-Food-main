import style from './Card.module.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ recipe, handleDetail }) => {
    
    const diets = () => {
        if (recipe.diets.length===0) return '';
        if (recipe.diets.length===1) return recipe.diets[0];
        const lastDiet = recipe.diets.pop();
        return recipe.diets.join(', ') + ' and ' + lastDiet
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
        } else {
            return (
                <h4 className={style.api}>"API"</h4>
            )
        }
    }

    return (
        <div className={style.card}>
            <div className={style.info}>
                <img src={recipe.image} className={style.image}/>
                {handleOrigin()}
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