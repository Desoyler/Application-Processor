import React from 'react';
import './Siteheader.css';
import icon from './assets/icon2.svg';

const Siteheader = () =>{
    return(
        <div className="headerconteiner">
            <picture>
            <img src={icon} width="200px" height="200px"></img>
            </picture>
            <button className="headerbutton">История Заявок</button>
            <button className="headerbutton">Подать заявку</button>
            <button className="headerbutton">Просмотр активных заявок</button>
        </div>
    );
};

export default Siteheader;