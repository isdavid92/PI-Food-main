import { useDispatch, useSelector } from 'react-redux';
import style from './Form.module.css';
import SelectDiets from './SelectDiets';
import { useEffect, useState } from 'react';
import { addRecipe, setDiets } from '../../redux/actions';
import validation from './Validation';
import buttonAddRecipe from './assets/img/addRecipe.png';

const Form = () => {
    
    const dispatch = useDispatch();
    const diets = useSelector(state => state.diets);
    const [ recipeData, setRecipeData ] = useState({});
    const [ errors, setErrors] = useState({});

    const hadleChange = (event) => {
        const nameProperty = event.target.name;
        const value = event.target.value;
        setRecipeData({...recipeData, [nameProperty]:value});
        setErrors(validation({...recipeData, [nameProperty]:value}))
    }

    const dietToNumber = (dits) => {
        const ToNumbersdiets = dits.map(diet => {
            if (diet == "gluten free") return 1;
            if (diet == "dairy free") return 2;
            if (diet == "paleolithic") return 3;
            if (diet == "primal") return 4;
            if (diet == "fodmap friendly") return 5;
            if (diet == "whole 30") return 6;
            if (diet == "pescatarian") return 7;
            if (diet == "lacto ovo vegetarian") return 8;
            if (diet == "vegan") return 9;
            if (diet == "ketogenic") return 10;
        });
        return ToNumbersdiets 
    };

    useEffect(() => {
        const dietsNum = dietToNumber(diets).filter(diet=>diet!==undefined);
        setRecipeData({...recipeData, diets:dietsNum})
        console.log(dietsNum);
    },[diets])

    const handleAddRecipe =  async() => {
        if(!recipeData.title.length) return alert("Please enter a name!");
        if(errors.healthScore) return alert("Enter a health score between 1 and 100!");
        if(!diets.length) return alert("Choose at least one diet!");
        if(errors.image) return alert("Enter a valid image link!");
        if(!recipeData.summary.length) return alert("Enter the recipe summary!");
        console.log(recipeData);
        dispatch(addRecipe(recipeData,'form'));
        dispatch(setDiets());
        setRecipeData({})
    }

    return (
        <div className={style.form}>
            <h1 className={style.title}>Add your recipe🥧</h1>
            <div className={style.info}>
                <div className={style.info1}>
                    <label className={style.label}>Recipe name: </label>
                    <input
                        className={style.input}
                        type="text"
                        placeholder='name recipe here...'
                        name="title"
                        onChange={hadleChange}
                    />
                    <br />
                    <span className={style.span}>{errors.title}</span>
                    <br />
                    <br />
                    <label className={style.label}>Health score: </label>
                    <input
                        className={style.input}
                        type="number"
                        placeholder='health score 1-100'
                        min="1"
                        max="100"
                        name="healthScore"
                        onChange={hadleChange}
                    />
                    <br />
                    <span className={style.span}>{errors.healthScore}</span>
                    <br />
                    <br />
                    <label className={style.label}>Diets:</label>
                    <SelectDiets />
                    <br />
                    <label className={style.label}>Image:</label>
                    <input
                        className={style.input}
                        type="text"
                        placeholder='link of your image...'
                        name="image"
                        onChange={hadleChange}
                    />
                    <br />
                    <span className={style.span}>{errors.image}</span>
                </div>
                <div className={style.info2}>
                    <label className={style.label}>Summary:</label>
                    <br />
                    <textarea
                        className={style.input}
                        name="summary"
                        cols="50"
                        rows="5"
                        placeholder='summary of your food...'
                        onChange={hadleChange}
                    ></textarea>
                    <br />
                    <span className={style.span}>{errors.summary}</span>
                    <br />
                    <label className={style.label}>Steps:</label>
                    <br />
                    <textarea
                        className={style.input}
                        name="steps"
                        id=""
                        cols="50"
                        rows="5"
                        placeholder='preparation instructions...'
                        onChange={hadleChange}
                    ></textarea>
                    <br />
                    <span className={style.span}>{errors.steps}</span>
                </div>
                <br />
            </div>
            <img src={buttonAddRecipe} className={style.addRecipe} onClick={() => handleAddRecipe()}/>
        </div>
    )
};

export default Form