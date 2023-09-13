import style from './App.module.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, addName, addRecipe } from './redux/actions';
import Error404 from './components/error 404/Error404';
import Welcome from './components/welcome/Welcome';
import Nav from './components/nav/Nav';
import Cards from './components/cards/Cards';
import Form from './components/form/Form';
import recipeAux from './Auxi100'; //! >>API LOCAL PARA BORRAR<<
import Detail from './components/detail/Detail';


function App() {
  
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.allRecipes);
  const recipesFound = useSelector(state => state.recipesFound);
  const [ recipe, setRecipe ] = useState([]);
  const [ page, setPage ] = useState(1);

  useEffect(() => {
    // dispatch(getRecipes())
    dispatch(addRecipe(recipeAux))
  }, []);
  
  const login = (name) => {
    navigate('/home');
    dispatch(addName(name))
  };

  const handleDetail = (id, page) => {
    let recip = recipes.filter(recipe => recipe.id===id);
    if(recip.length===0) recip = recipesFound.filter(recipe => recipe.id===id);
    setRecipe(recip);
    setPage(page);
  }

  console.log('APP'); //! BORAR  
  return (
    <div className={style.App}>

      {pathname !== '/' &&
        <>
          <Nav/>
        </>
      }
      <Routes>
        <Route path='/' element={<Welcome login={login}/>}/>
        <Route path='/home' element={<Cards handleDetail={handleDetail}/>}/>
        <Route path='/search' element={<Cards handleDetail={handleDetail}/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/detail' element={<Detail recipe={recipe[0]} page={page}/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
