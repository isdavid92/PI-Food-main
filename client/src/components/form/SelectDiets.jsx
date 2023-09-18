import { useState } from 'react';
import style from './SelectDiets.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addDiet, setDiets } from '../../redux/actions';

const SelectDiets = () => {
    
    const diets = useSelector(state => state.diets);
    const [ diet, setDiet ] = useState('');
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        setDiet(event.target.value);
    };

    const handleSelect = () => {
        if (diets.includes(diet)) return;
        dispatch(addDiet(diet))
    };

    const handleSet = async () => {
        dispatch(setDiets())
    };
    
    return (
        <div className={style.selectDiets}>
            <select className={style.selec} name="diets" id="1" onChange={handleChange}>
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
            <button className={style.add} onClick={() => handleSelect()}>add</button>
            <button className={style.set} onClick={() => handleSet()}>set</button>
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