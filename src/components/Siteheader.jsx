import React from 'react';
import './Siteheader.css';
import icon from './assets/icon2.svg';

const Siteheader = () =>{
    return(
        <div class="headerconteiner">
            <picture>
            <img src={icon} width="200px" height="200px"></img>
            </picture>
            <button class="headerbutton">История Заявок</button>
            <button class="headerbutton">Подать заявку</button>
            <button class="headerbutton">Просмотр активных заявок</button>
        </div>
    );
};

export default Siteheader;