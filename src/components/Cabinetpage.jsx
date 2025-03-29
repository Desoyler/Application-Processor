import React from 'react';
import { useNavigate } from "react-router-dom";
import './Cabinetpage.css';

import Siteheader from './Siteheader.jsx';

const Cabinetpage = ({workername, profession}) =>{
    
    const navigate = useNavigate();

    const goToHistory = () => {
        navigate("/history");
    };

    const goToSend = () => {
        navigate("/send");
    };

    const goToWatch = () => {
        navigate("/watch");
    };
    return(
        <div>
        <Siteheader />
        
        <div className="cabinetConteiner">
        <span className="cabinetText">Добро пожаловать в личный кабинет {profession} </span>
        <span className="cabinetText">{workername}</span>
        <div className="buttonConteiner">
        <button className="cbutton firstcbutton" onClick={goToHistory}>История Заявок</button>
        <button className="cbutton" onClick={goToSend}>Подать заявку</button>
        <button className="cbutton" onClick={goToWatch}>Просмотр активных заявок</button>
        </div>
        </div>
        </div>
    );
};

export default Cabinetpage;