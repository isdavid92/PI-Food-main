import { useDispatch, useSelector } from 'react-redux';
import style from './Diets.module.css';
import { useEffect, useState } from 'react';
import { addDiet, setDiets } from '../../redux/actions';

const Diets = () => {

    const dietsState = useSelector(state=>state.diets);
    const dispatch = useDispatch();
    const [ dits, setDits ] = useState([]);

    useEffect(() => {
        console.log(dietsState);
        if (!dietsState||dietsState==[]){
            const origin = 'nav';
            dispatch(addDiet({origin}))
        }
    },[]);

    useEffect(() => {
        const destDiet = dietsState[0]
        setDits(destDiet)
    },[dietsState]);

    return(
        <div className={style.diets}>
            <h1 className={style.title}>Diets🥦</h1>
            <div className={style.infoDiets}>
                <div className={style.idDiet}>
                    {
                        dits && dits.map(diet => {
                            return (
                                <h2 className={style.id}>ID: {diet.id} {diet.name}</h2>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Diets