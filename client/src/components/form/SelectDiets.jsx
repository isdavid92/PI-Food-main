import { useState } from 'react';
import style from './SelectDiets.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addDiet } from '../../redux/actions';

const SelectDiets = () => {
    
    const diets = useSelector(state => state.diets);
    const [ diet, setDiet ] = useState('');
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        setDiet(event.target.value);
    };

    const handleSelect = async () => {
        if (diets.includes(diet)) return;
        await dispatch(addDiet(diet))
    };
    
    return (
        <div className={style.selectDiets}>
            <select name="diets" id="1" onChange={handleChange}>
                <option value="">--- diet ---</option>
                <option value="gluten free">gluten free</option>
                <option value="dairy free">dairy free</option>
                <option value="paleolithic">paleolithic</option>
                <option value="primal">primal</option>
                <option value="fodmap friendly">fodmap friendly</option>
                <option value="whole 30">whole 30</option>
                <option value="pescatarian">pescatarian</option>
                <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
                <option value="vegan">vegan</option>
                <option value="ketogenic">ketogenic</option>
            </select>
            <button onClick={() => handleSelect()}>add</button>
            <div className={style.diets}>
                {
                    diets.map((die) => {
                        return (
                            <h5 className={style.diet} key={die}>{die}</h5>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default SelectDiets