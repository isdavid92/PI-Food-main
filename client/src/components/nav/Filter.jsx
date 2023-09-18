import style from './Filter.module.css';
import { useNavigate } from 'react-router-dom';

const Filter = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    };

    return (
        <div className={style.filter}>
            <div className={style.filClose} onClick={() => handleBack()}>
                <h1 className={style.shadeFilter}>{'close>>>'}</h1>
                <h1 className={style.filt}>{'close>>>'}</h1>
            </div>
        </div>
    )
};

export default Filter