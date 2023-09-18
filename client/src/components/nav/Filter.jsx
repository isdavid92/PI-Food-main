import { useEffect, useState } from 'react';
import style from './Filter.module.css';
import { useNavigate } from 'react-router-dom';

const Filter = () => {

    const navigate = useNavigate();
    const [selectFil, setSelectFil] = useState('');
    const [selectDiet, setSelectDiet] = useState('');
    const [selectOrigin, setSelectOrigin] = useState('');
    const [selectOrder, setSelectOrder] = useState('');
    const [selectOrderAZ, setSelectOrderAZ] = useState('');
    const [selectOrderLS, setSelectOrderLS] = useState('');


    useEffect(() => {
        setSelectFil('diet')
        setSelectOrder('alphabetical order')
    },[])

    const handleChangeFill = (event) => {  //! FILTER
        setSelectFil(event.target.value)
    };

    const handleChangeFillDiet = (event) => {
        setSelectDiet(event.target.value)
    };
    
    const handleChangeFillOrigin = (event) => {
        setSelectOrigin(event.target.value)
    };

    const handleChangeOrder = (event) => {  //! ORDER
        setSelectOrder(event.target.value)
    };

    const handleChangeOrderAZ = (event) => {
        setSelectOrderAZ(event.target.value)
    };

    const handleChangeOrderLS = (event) => {
        setSelectOrderLS(event.target.value)
    };

    const handleBack = () => {
        navigate(-1)
    };

    return (
        <div className={style.filter}>
            <div className={style.filClose} onClick={() => handleBack()}>
                <h1 className={style.shadeFilter}>{'close>>>'}</h1>
                <h1 className={style.filt}>{'close>>>'}</h1>
            </div>
            <div className={style.fil}>
                <label className={style.label}>filter By </label>
                <select name="filter" id="1" className={style.selecFilter} onChange={handleChangeFill}>
                    <option value="diet">Diet</option>
                    <option value="origin">Origin</option>
                </select>
                <div className={style.selecDietsOrigin}>
                    {
                        selectFil == 'diet' &&
                        <>
                            <select name="filter" id="2" className={style.selecFilterDiet} onChange={handleChangeFillDiet}>
                                <option value="">-------- diets --------</option>
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
                        </>
                    }
                    {
                        selectFil == 'origin' &&
                        <>
                            <select name="filter" id="3" className={style.selecFilterOrigin} onChange={handleChangeFillOrigin}>
                                <option value="">--- origin ---</option>
                                <option value="data base">Data base</option>
                                <option value="api">API</option>
                            </select>
                        </>
                    }
                </div>
            </div>

            <div className={style.ord}>
                <label className={style.label}>sort by </label>
                <select name="order" id="4" className={style.selecOrder} onChange={handleChangeOrder}>
                    <option value="alphabetical order">Alphabetical order</option>
                    <option value="health score">Health score</option>
                </select>
                <div className={style.selecDietsOrigin}>
                    {
                        selectOrder == 'alphabetical order' &&
                        <>
                            <select name="alphabetical order" id="5" className={style.selecOrderAZ} onChange={handleChangeOrderAZ}>
                                <option value="a-z">A-Z</option>
                                <option value="z-a">Z-A</option>
                            </select>
                        </>
                    }
                    {
                        selectOrder == 'health score' &&
                        <>
                            <select name="health score" id="6" className={style.selecOrderLS} onChange={handleChangeOrderLS}>
                                <option value="largest to smallest">Largest to smallest</option>
                                <option value="smallest to largest">Smallest to largest</option>
                            </select>
                        </>
                    }
                </div>
            </div>
        </div>
    )
};

export default Filter