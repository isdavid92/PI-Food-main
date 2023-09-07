import style from './App.module.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Error404 from './components/error 404/Error404';
import Welcome from './components/welcome/Welcome';
import Nav from './components/nav/Nav';



function App() {
  
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [ access, setAccess ] = useState(false);
  const [ name, setName ] = useState('');


  // useEffect(() => {
  //   !access && navigate('/');
  // }, [access]);
  
  const login = (name) => {
    setAccess(true);
    navigate('/home');
    setName(name);
    console.log(name);
  };


  return (
    <div className={style.App}>

      {pathname !== '/' &&
        <>
          <Nav name={name}/>
        </>}
      <Routes>
        <Route path='/' element={<Welcome login={login}/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
