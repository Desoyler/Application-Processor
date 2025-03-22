import React from 'react';
import './Authorizationpage.css'

const Authorizationpage = () =>{
    return(
        <div class="loginconteiner">
            <span class= "authtext">Введите ваш логин</span>
            <input type="text" placeholder="Введите логин" class="login"></input>
            <span class= "authtext">Введите ваш код</span>
            <input type="password" class="password"></input>
            <button class="send">Отправить</button>
        </div>
    );
};

export default Authorizationpage;