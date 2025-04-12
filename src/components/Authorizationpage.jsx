import React from 'react';
import styles from './Authorizationpage.module.css'

const Authorizationpage = ({
    setPassword, 
    setUsername, 
    handleLogin
    })=>{
    return(
        <div>
        <div className={styles.conteiner}>
            <span className= {styles.text}>Авторизация</span>
            <input type="text" placeholder="Введите логин" className={styles.loginInput} onChange={(e) => setUsername(e.target.value)}></input>
            <input type="password" placeholder="Введите код" className={styles.passwordInput} onChange={(e) => setPassword(e.target.value)}></input>
            <button className={styles.sendButton} onClick={handleLogin}>Войти</button>
        </div>
        </div>
    );
};

export default Authorizationpage;