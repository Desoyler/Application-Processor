import React from 'react';
import './Cabinetpage.css';

import Siteheader from './Siteheader.jsx';
import workerpng from './assets/worker.png'

const Cabinetpage = ({workername, profession, handleLogout}) =>{
    return(
        <div>
            <div className="cabinetConteiner">
            <span className="welcomeText">Добро пожаловать в личный кабинет </span>
            <img src = {workerpng} height= "150px" width="150px" className='workerpng'/>
                <div className='infoconteiner'>
                <span className="professionText Text">{profession} </span>
                <span className="workerText Text">{workername}</span>
                </div>
                <div className='statisticContener'>
                    <div className = "Text Zagolovok2">Ваша рабочая статистика</div><br/>
                    <span className = "Text">Исправлено поломок рабочего оборудования:</span><br/>
                    <span className = "Text">Отклики на заявки:</span><br/>
                </div>
                <div className='dockContener'>
                    <div className = "Text Zagolovok1"> Документы </div><br/>
                    <span className = "Text">Номер и серия паспорта: </span><br/>
                    <span className = "Text">ИНН:</span><br/>
                    <span className = "Text">СНИЛС:</span><br/>
                    <span className = "Text">Мед.полис:</span><br/>
                </div>
                <div className='info2Contener'>
                    <span className = "Text">Ваша зарплата: 32132131руб</span><br/>
                    <span className = "Text">Дней до оплачиваемого отпуска: 15</span><br/>
                    <button className='calendarbutton'>Календарь выходных</button>
                </div>
            </div>
        </div>
    );
};

export default Cabinetpage;