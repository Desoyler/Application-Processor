import React from 'react';
import styles from './Authorizationpage.module.css'

import Siteheader from './Siteheader.jsx';

const Authorizationpage = ({
    setIsAutheticated, 
    username, 
    password, 
    profession,
    setPassword, 
    setUsername, 
    setProfession,
    handleLogin, 
    handleLogout 
    })=>{
    return(
        <div>
        
        <div className={styles.loginconteiner}>
            <span className= {styles.authtext}>Авторизация</span>
            <input type="text" placeholder="Введите логин" className={styles.login} onChange={(e) => setUsername(e.target.value)}></input>
            <input type="password" placeholder="Введите код" className={styles.password} onChange={(e) => setPassword(e.target.value)}></input>
            <button className={styles.send} onClick={handleLogin}>Войти</button>
        </div>
        </div>
    );
};

export default Authorizationpage;