import style from './Card.module.css';

const dietsToString = (diets) => {
    if (diets.length===0) return '';
    if (diets.length===1) return diets[0];
    const lastDiet = diets.pop();
    return diets.join(', ') + ' and ' + lastDiet
}

const Card = ({ recipe }) => {
    const diets = dietsToString(recipe.diets);
    return (
        <div className={style.card}>
            <div className={style.info}>
                <img src={recipe.image} className={style.image}/>
                <div className={style.nameDiets}>
                    <h1 className={style.name}>{recipe.title}</h1>
                    <h4 className={style.dietsTit}>Diets:</h4>
                    <h3 className={style.diets}>{diets}</h3>
                </div>
            </div>
        </div>
    )
};

export default Card