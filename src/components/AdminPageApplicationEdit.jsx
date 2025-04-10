import React, { useState, useEffect } from 'react';
import './AdminPage.css';

import Siteheader from './Siteheader.jsx';
import hammer from './assets/hammer.svg';
import computer from './assets/binary.svg';
import zap from './assets/zap-off.svg';
import cable from './assets/cable.svg';
import check from './assets/badge-alert.svg';
import x from './assets/badge-x.svg';
import done from './assets/badge-check.svg';
import filter from './assets/list-filter.svg';

const AdminPageApplicationEdit = ({ goToAdminAplication,  goToUsers }) =>{
    
    

return(
    <div>
        <div className="zero">
            <span className="zeroHText">Работа с данными пользователей</span>
                <div className="side">
                    <span className="sideHText">Возможности администратора</span><br/>
                    <span className="sideText" onClick={goToUsers}>Работа с данными пользователей</span><br/>
                    <span className="sideText" onClick={goToAdminAplication}>Работа с заявками</span><br/>
                    <span className="sideText" onClick="">Запросы в поддержку</span><br/>
                </div>   
        </div>
        <div className='conteiner midle'>
            <div className='sectionConteiner apeditmargin'>
                <span>Изменить заголовок заявки</span><br/>
                <input Type='infoText' className='userInput'></input>
            </div>
            <div className='sectionConteiner apeditmargin'>
                <span>Изменить текст заявки</span><br/>
                <input Type='infoText' className='userInput'></input>
            </div>
            <div className='sectionConteiner apeditmargin'>
                <span>Изменить тип заявки</span><br/>
                <select classNames="list bottomborder"id="problemType " defaultValue="">
                    <option value="" disabled hidden>Выбирите тип поломки</option>
                    <option value="1">Поломка компьютерного оборудования</option>
                    <option value="2">Перебои электроэнергии</option>
                    <option value="3">Поломка рабочего оборудования</option>
                </select>
            </div>
            <div className='sectionConteiner apeditmargin'>
                <span>Изменить статус заявки</span><br/>
                <select className="list, bottomborder" id="problemType " defaultValue="">
                    <option value="" disabled hidden>Выбирите состояние заявки</option>
                    <option value="1">Выполнена</option>
                    <option value="2">Нужны дополнительные решения</option>
                    <option value="3">Не выполненна</option>
                </select>
            </div>
            <div className='sectionConteiner apeditmargin'>
                <span className="">Опишите вашу проблему детально в поле ниже:</span><br/>
                <textarea className="" id="bigText" rows="10" cols="50" onChange="" ></textarea>
            </div>
            <div className='sectionConteiner apeditmargin'>
                <button>Удалить заявку</button><br/>
            </div>
            <div className='sectionConteiner apeditmargin'>
                <button>Применить изменения</button>
            </div>
        </div>
    </div>
);
};

export default AdminPageApplicationEdit;