import React from 'react';
import './Cabinetpage.css';

import Siteheader from './Siteheader.jsx';
import Spacecomponent from './Spacecomponent.jsx';

const Cabinetpage = ({workername, profession}) =>{

    return(
        <div>
        <Siteheader />
        <Spacecomponent />
        <div className="cabinetConteiner">
        <span className="cabinetText">Добро пожаловать в личный кабинет {profession} </span>
        <span className="cabinetText">{workername}</span>
        <div className="buttonConteiner">
        <button className="cbutton firstcbutton">История Заявок</button>
        <button className="cbutton">Подать заявку</button>
        <button className="cbutton">Просмотр активных заявок</button>
        </div>
        </div>
        </div>
    );
};

export default Cabinetpage;