import style from './App.module.css';
import { useEffect } from 'react';
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

  useEffect(() => {
    // dispatch(getRecipes())
    dispatch(addRecipe(recipeAux))
  }, []);

  console.log('App');
  
  const login = (name) => {
    navigate('/home');
    dispatch(addName(name))
  };


  return (
    <div className={style.App}>

      {pathname !== '/' &&
        <>
          <Nav/>
          <Form/>
        </>
      }
      <Routes>
        <Route path='/' element={<Welcome login={login}/>}/>
        <Route path='/home' element={<Cards/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
