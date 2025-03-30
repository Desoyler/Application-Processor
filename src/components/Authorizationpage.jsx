import React from 'react';
import './Authorizationpage.css'

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
        <Siteheader />
        
        <div className="loginconteiner">
            <span className= "authtext">Введите ваш логин</span>
            <input type="text" placeholder="Введите логин" className="login" onChange={(e) => setUsername(e.target.value)}></input>
            <span className= "authtext">Введите ваш код</span>
            <input type="password" placeholder="Введите код" className="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button className="send" onClick={handleLogin}>Отправить</button>
        </div>
        </div>
    );
};

export default Authorizationpage;