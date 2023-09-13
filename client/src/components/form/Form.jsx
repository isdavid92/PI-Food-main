import { useDispatch, useSelector } from 'react-redux';
import style from './Form.module.css';
import SelectDiets from './SelectDiets';
import { useState } from 'react';

const Form = () => {
    
    const dispatch = useDispatch();
    const diets = useSelector(state => state.diets);
    const [ title, setTitle ] = useState('');

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleRecipe = (arg) => {
        return 
    }

    const handleAddRecipe = () => {
        dispatch() 
    }

    return (
        <div className={style.form}>
            <h1 className={style.title} onChange={handleTitle}>Add your recipe🥧</h1>
            <div className={style.info}>
                <label className={style.label}>Recipe name: </label>
                <input type="text" placeholder='name recipe here...'/>
                <br />
                <label className={style.label}>Health score: </label>
                <input type="number" placeholder='health score'/>
                <br />
                <label className={style.label}>Diets:</label>
                <SelectDiets />
                <label className={style.label}>Image:</label>
                <input type="text" placeholder='link of your image...'/>
                <br />
                <label className={style.label}>Summary:</label>
                <br />
                <textarea name="" id="" cols="50" rows="4" placeholder='summary of your food...'></textarea>
                <br />
                <label className={style.label}>Steps:</label>
                <br />
                <textarea name="" id="" cols="50" rows="4" placeholder='preparation instructions...'></textarea>
                <br />
                <button onClick={() => handleAddRecipe()}>Add recipe</button>
            </div>
        </div>
    )
};

export default Form