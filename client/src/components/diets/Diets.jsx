import { useSelector } from 'react-redux';
import style from './Diets.module.css';
import { useEffect } from 'react';

const Diets = () => {

    const dietsState = useSelector(state=>state.diets);

    useEffect(() => {
        console.log(dietsState);
    },[]);

    return(
        <div className={style.diets}>
            <h1></h1>
        </div>
    )
};

export default Diets