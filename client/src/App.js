import style from './App.module.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesDB, addName, addRecipes } from './redux/actions';
import Error404 from './components/error 404/Error404';
import Welcome from './components/welcome/Welcome';
import Nav from './components/nav/Nav';
import Cards from './components/cards/Cards';
import Form from './components/form/Form';
import recipeAux from './Auxi100'; //! >> API LOCAL <<
import Detail from './components/detail/Detail';


function App() {
  
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);
  const [ recipe, setRecipe ] = useState([]);

  const handleRecipeAux = (recipesAux) => {
    const recipesApi = [];
    for (let i = 0; i < recipesAux.length; i++) {
      const { id, title, image, summary, healthScore, analyzedInstructions, diets } = recipesAux[i];
      if (analyzedInstructions.length>0) {
        const steps = analyzedInstructions[0].steps;
        const origin = 'api';
        recipesApi.push({ id, title, image, summary, healthScore, steps, diets, origin })
      } else {
        const steps = [];
        const origin = 'api';
        recipesApi.push({ id, title, image, summary, healthScore, steps, diets, origin })
      }
  };
    return recipesApi
  }

  useEffect(() => {
    dispatch(addRecipes(handleRecipeAux(recipeAux)))
    dispatch(getRecipesDB());
  }, []);
  
  const login = (name) => {
    navigate('/home');
    dispatch(addName(name))
  };

  const handleDetail = (id) => {
    let recip = recipes.filter(recipe => recipe.id===id);
    setRecipe(recip);
  }
 
  console.log('APP');
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
        <Route path='/filter' element={<Cards handleDetail={handleDetail}/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/detail' element={<Detail recipe={recipe[0]}/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
