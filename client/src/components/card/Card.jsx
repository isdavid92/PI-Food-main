import style from './Card.module.css';
import { useNavigate } from 'react-router-dom';

const dietsToString = (diets) => {
    if (diets.length===0) return '';
    if (diets.length===1) return diets[0];
    const lastDiet = diets.pop();
    return diets.join(', ') + ' and ' + lastDiet
};


const Card = ({ recipe, handleDetail, page }) => {
    
    const diets = dietsToString(recipe.diets);
    const navigate = useNavigate();
    
    const handleDetailId = () => {
        navigate('/detail');
        handleDetail(recipe.id, page)
    };

    return (
        <div className={style.card}>
            <div className={style.info}>
                <img src={recipe.image} className={style.image}/>
                <div className={style.nameDiets} onClick={() => handleDetailId()}>
                    <h1 className={style.name}>{recipe.title}</h1>
                    <h4 className={style.dietsTit}>Diets:</h4>
                    <h3 className={style.diets}>{diets}</h3>
                </div>
            </div>
        </div>
    )
};

export default Card