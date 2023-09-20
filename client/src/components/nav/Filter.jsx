import { useEffect, useState } from 'react';
import style from './Filter.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { orderRecipesAZ, orderRecipesLS, addPage, setRecipes } from '../../redux/actions';

const Filter = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allRecipesState = useSelector(state => state.allRecipes);
    const recipesState = useSelector(state => state.recipes);
    const [recips, setRecips] = useState([]);       //! RECIPES
    const [allRecipes, setAllRecipes] = useState([]); //! ALL
    const [selectFil, setSelectFil] = useState('');        //*PARA MOSTRAR EL INPUT
    const [selectDiet, setSelectDiet] = useState('');
    const [selectOrigin, setSelectOrigin] = useState('');
    const [selectOrder, setSelectOrder] = useState('');    //*PARA MOSTRAR EL INPUT
    const [selectOrderAZ, setSelectOrderAZ] = useState('');
    const [selectOrderLS, setSelectOrderLS] = useState('');

    useEffect(() => {
        setRecips(recipesState);
        setAllRecipes(allRecipesState)
        dispatch(addPage(1));
        setSelectFil('diet');
        setSelectOrder('alphabetical order')
    },[]);

    useEffect(() => {
        if (selectDiet=="todas") {
            dispatch(addPage(1));
            dispatch(setRecipes(recips))
        };
        if (selectDiet.length>0 && selectDiet!=="todas") handlefilterDiet(selectDiet);
    }, [selectDiet]);

    useEffect(() => {
        if (selectOrigin=="todas") {
            dispatch(addPage(1));
            dispatch(setRecipes(recips))
        };
        if (selectOrigin.length>0 && selectOrigin!=="todas") handlefilterOrigin(selectOrigin);
    }, [selectOrigin]);

    useEffect(() => {
        if (selectOrderAZ.length>0) handleOrderAZ(selectOrderAZ);
    }, [selectOrderAZ]);

    useEffect(() => {
        if (selectOrderLS.length>0) handleOrderLS(selectOrderLS);
    }, [selectOrderLS]);
    
    
    const handleChangeFill = (event) => {  //! FILTER CHANGE
        setSelectFil(event.target.value)
    };
    
    const handleChangeFillDiet = (event) => {
        setSelectDiet(event.target.value)
    };
    
    const handleChangeFillOrigin = (event) => {
        setSelectOrigin(event.target.value)
    };
    
    const handleChangeOrder = (event) => {  //! ORDER CHANGE
        setSelectOrder(event.target.value)
    };
    
    const handleChangeOrderAZ = (event) => {
        setSelectOrderAZ(event.target.value)
    };
    
    const handleChangeOrderLS = (event) => {
        setSelectOrderLS(event.target.value)
    };
    
    const handlefilterDiet = (diet) => {        //? FILTER DIET
        dispatch(addPage(1));
        dispatch(setRecipes(recips));
        const filterRecipes = recips.filter(recipe => recipe.diets.includes(diet));
        dispatch(setRecipes(filterRecipes))
    };
    
    const handlefilterOrigin = (origin) => {      //? FILTER ORIGIN
        dispatch(addPage(1));
        dispatch(setRecipes(recips));
        const filterRecipes = recips.filter(recipe => recipe.origin==origin);
        dispatch(setRecipes(filterRecipes))
    };
    
    const handleOrderAZ = (order) => {           //todo ORDER AZ
        dispatch(addPage(1));
        dispatch(orderRecipesAZ({ order,recipesState }))
    };
    
    const handleOrderLS = (order) => {           //todo ORDER LS
        dispatch(addPage(1));
        dispatch(orderRecipesLS({ order,recipesState }))
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
                                <option value="todas">todas</option>
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
                                <option value="todas">todas</option>
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
                                <option value="">---</option>
                                <option value="az">A-Z</option>
                                <option value="za">Z-A</option>
                            </select>
                        </>
                    }
                    {
                        selectOrder == 'health score' &&
                        <>
                            <select name="health score" id="6" className={style.selecOrderLS} onChange={handleChangeOrderLS}>
                                <option value="">---------LM--------</option>
                                <option value="ls">Largest to smallest</option>
                                <option value="sl">Smallest to largest</option>
                            </select>
                        </>
                    }
                </div>
            </div>
        </div>
    )
};

export default Filter