import style from './App.module.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Welcome from './components/welcome/Welcome';
import Nav from './components/nav/Nav';


function App() {
  
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [ access, setAccess ] = useState(false);
  const [ name, setName ] = useState('');


  useEffect(() => {
    !access && navigate('/');
  }, [access]);
  
  const login = (name) => {
    setAccess(true);
    navigate('/home');
    setName(name);
  };


  return (
    <div className={style.App}>

      {pathname !== '/' &&
        <>
          <Nav name={name}/>
        </>}
      <Routes>
        <Route path='/' element={<Welcome userName={login}/>}/>
      </Routes>
    </div>
  );
}

export default App;
