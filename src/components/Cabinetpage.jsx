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
        <span className="cabinetText">Добро пожаловать в личный кабинет {profession} {workername}</span>
        </div>
        </div>
    );
};

export default Cabinetpage;