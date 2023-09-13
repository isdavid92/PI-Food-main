import style from './Form.module.css';
import SelectDiets from './SelectDiets';
const Form = (arg) => {
    console.log('FORM');
    return (
        <div className={style.form}>
            <h1 className={style.title}>Add your recipe🥧</h1>
            <div className={style.info}>
                <label >Recipe name:</label>
                <input type="text" placeholder='name recipe here'/>
                <br />
                <label >Health score:</label>
                <input type="number" placeholder='#'/>
                <br />
                <label >Diets:</label>
                <SelectDiets />
            </div>
        </div>
    )
};

export default Form