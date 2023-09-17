import style from './Detail.module.css';
import back from './assets/img/back.png';
import { useNavigate } from 'react-router-dom';

const Detail = ({ recipe }) => {

    const navigate = useNavigate();
    let summaryHtml = recipe.summary;
    let div = document.createElement('h5');
    div.innerHTML = summaryHtml;
    const summary = div.innerText;

    const dietsToString = (diets) => {
        if (diets.length===0) return '';
        if (diets.length===1) return diets[0];
        const lastDiet = diets.pop();
        return diets.join(', ') + ' and ' + lastDiet
    };
    const diets = dietsToString(recipe.diets);
    
    const handleSteps = () => {
        if (recipe.steps.length===0) {
            return <h2 className={style.noSteps}>(There are no steps)</h2>
        } else {
            const steps = recipe.steps;
            return steps.map(step => {
                return(
                    <div className={style.step} key={step.number}>
                        <h3 className={style.stepNum}>Step {step.number}:</h3>
                        <h3 className={style.stepStep}>{step.step}</h3>
                    </div>
                )
            })
        }
    }

    const handleBack = () => {
        navigate(-1)
    };

    const handleOrigin = () => {
        if (recipe.origin) {
            return(
                <h4 className={style.origin}>"Data Base"</h4>
            )
        }
    }

    return(
        <div className={style.detail}>
            <div className={style.info1}>
                <div className={style.title}>
                    <img src={back} className={style.back} onClick={() => handleBack()}/>
                    <h1 className={style.id}>ID: {recipe.id}</h1>
                    <h1 className={style.name}>{recipe.title}</h1>
                    <div className={style.healthDiets}>
                        <h2 className={style.health}>Health Score: {recipe.healthScore}</h2>
                        <h3 className={style.diets}>Diets: {diets}</h3>
                    </div>
                    <h5 className={style.summary}>Summary: {summary}</h5>
                    { handleOrigin() }
                </div>
                <img src={recipe.image} className={style.image}/>
            </div>
            <div className={style.info2}>
                <h2 className={style.stepsTitle}>STEPS</h2>
                <div className={style.steps}>{handleSteps()}</div>
            </div>
        </div>
    )
};

export default Detail