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
            <span className="zeroHText">Изменение данных заявки</span>
                <div className="side">
                    <span className="sideHText">Возможности администратора</span><br/>
                    <span className="sideText" onClick={goToUsers}>Работа с данными пользователей</span><br/>
                    <span className="sideText" onClick={goToAdminAplication}>Работа с заявками</span><br/>
                    <span className="sideText" onClick="">Запросы в поддержку</span><br/>
                </div>   
        </div>
        <div className='conteiner'>
            <div className='bigConteiner midle'>
                <div className='applicationSmallConteiner'>
                <span className="applicationPageEditText">Изменить заголовок заявки</span><br/>
                <input Type='infoText' className='userInput'></input>
                </div>            
            </div>
            <div className='bigConteiner midle'>
                <div className='applicationSmallConteiner'>
                <span className="applicationPageEditText">Изменить тип заявки</span><br/>
                <select className="list bottomBorder" id="problemType " defaultValue="">
                    <option value="" disabled hidden>Изменить тип поломки</option>
                    <option value="1">Поломка компьютерного оборудования</option>
                    <option value="2">Перебои электроэнергии</option>
                    <option value="3">Поломка рабочего оборудования</option>
                </select>
                </div>
            </div>
            <div className='bigConteiner midle'>
                <div className='applicationSmallConteiner'>
                <span className="applicationPageEditText">Изменить место проишествия</span><br/>
                <select className="list bottomBorder" id="problemType " defaultValue="">
                    <option value="" disabled hidden>Изменить место проишествия</option>
                    <option value="1">Цех 1</option>
                    <option value="2">Цех 2</option>
                    <option value="3">Цех 3</option>
                    <option value="4">Цех 4</option>
                </select>
                </div>
            </div>
            <div className='bigConteiner midle'>
            <div className='applicationSmallConteiner bottomMargin'>
                <span className="applicationPageEditText">Изменить статус заявки</span><br/>
                <div className='coutStatusConteiner'>
                    <div className='checkBoxContainer'>
                        <picture className='coutImage'>
                        <img src={done} height="25px" width="25px"/>
                        </picture>
                        <input type="checkbox"></input>
                        <span className='coutText'>Выполненна</span>
                    </div>
                    <div className='checkBoxContainer'>
                        <picture className='coutImage'>
                        <img src={check} height="25px" width="25px"/>
                        </picture>
                        <input type="checkbox"></input>
                        <span className='coutText'>Доп.решение</span>
                    </div>
                    <div className='checkBoxContainer'>
                        <picture className='coutImage'>
                        <img src={x} height="25px" width="25px"/>
                        </picture>
                        <input type="checkbox"></input>
                        <span className='coutText'>Не выполненна</span>
                    </div>
                </div>
                </div>
            </div>
            <div className='bigConteiner  midle'>
                <div className='applicationBigConteiner'>
                    <span className="applicationPageEditText">Измените текст c обьяснением проблемы в поле ниже:</span><br/>
                    <textarea className="bigText" id="bigText" rows="10" cols="50" onChange="" ></textarea>
                </div>
            </div>
            <div className='bigConteiner sectionConteiner buttonsContainerGap '>  
                <button className='bottomButtons'>Удалить пользователя</button>
                <button className='bottomButtons'>Изменить</button>
            </div>
        </div>
    </div>
);
};

export default AdminPageApplicationEdit;