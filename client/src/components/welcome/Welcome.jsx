import button from './assets/img/button.png';
import style from './Welcome.module.css'
import { useState } from 'react';

const Welcome = ({ login }) => {

    const [ name, setName ] = useState('');

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            login(name);
          }
    }
    return(
        <form className={style.form}>
           <div className={style.container}>
                <h3 className={style.chef}>The Chef´s Secret</h3>
                <h1 className={style.welcome}>Welcome</h1>
                <h2 className={style.name}>your name:</h2>
                <input className={style.placeholder} type="text" placeholder='your name here...' onChange={handleChange} onKeyPress={handleKeyPress}/>
                <img src={button} className={style.button} onClick={() => login(name)}/>
           </div>
        </form>
    )
};

export default Welcome