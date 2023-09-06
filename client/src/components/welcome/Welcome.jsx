import backgImg from './assets/img/welcomeImg.jpg';
import style from './Welcome.module.css'

const Welcome = ({ name }) => {
    return(
        <form className={style.form}>
           <div className={style.container}>
                <h3>The Chef's Secret</h3>
                <h1>Welcome</h1>
                <h2>your name:</h2>
                <input type="text" placeholder='your name here...' />
                <button>GET INTO</button>
           </div>
        </form>
    )
};

export default Welcome