import React, { useState, useEffect } from 'react';
import './AdminPage.css';

import Siteheader from './Siteheader.jsx';

const AdminPageUserEdit = ({ goToUsers, goToAdminAplication}) =>{
    

return(
    <div>
        <div className="zero">
            <span className="zeroHText">Изменение данных пользователя</span>
                <div className="side">
                    <span className="sideHText">Возможности администратора</span><br/>
                    <span className="sideText" onClick={goToUsers}>Работа с данными пользователей</span><br/>
                    <span className="sideText" onClick={goToAdminAplication}>Работа с заявками</span><br/>
                    <span className="sideText" onClick="">Запросы в поддержку</span><br/>
                </div>
        </div>
        <div className='conteiner'>
            <div className='bigConteiner sectionConteiner'>
                <div className='smallTextConteiner midle'>
                    <span className='sectionText'>Данные рабочего акаунта </span>
                </div>
            </div>
            <div className='bigConteiner'>
                <div className='smallConteiner'>
                    <span className='inputText'>Введите логин пользователя</span><br/>
                    <input placeholder='Логин' className='userInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='inputText'>Введите пароль пользователя</span><br/>
                    <input placeholder='Пароль' className='userInput'></input>
                </div>
            </div>
            <div className='bigConteiner sectionConteiner'>
                <div className='smallTextConteiner midle'>
                    <span className='sectionText'>Введите личные данные пользователя</span>
                </div>
            </div>
            <div className='bigConteiner'>
                <div className='smallConteiner'>
                    <span className='inputText'>Введите имя</span><br/>
                    <input placeholder='Имя' className='userInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='inputText'>Введите отчество</span><br/>
                    <input placeholder='Отчество' className='userInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='inputText'>Введите фамилию</span><br/>
                    <input placeholder='Фамилия' className='userInput'></input>
                </div>
            </div>
            <div className='bigConteiner sectionConteiner'>
                <div className='smallTextConteiner midle'>
                        <span className='sectionText'>Введите контактные данные </span>
                </div>
            </div>
            <div className='bigConteiner'>
                <div className='smallConteiner'>
                    <span className='inputText'>Введите e-mail</span><br/>
                    <input placeholder='Почта' className='userInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='inputText'>Введите телефон</span><br/>
                    <input placeholder='+7' className='userInput'></input>
                </div>
            </div>
            <div className='bigConteiner sectionConteiner'>
                <div className='smallTextConteiner midle'>
                    <span className='sectionText'>Введите личные данные пользователя </span>
                </div>
            </div>
            <div className='bigConteiner'>
                <div className='smallConteiner'>
                    <span className='inputText'>Введите дату рождения</span><br/>
                    <input placeholder='xx.xx.xxxx' className='userInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='inputText'>Введите пол</span><br/>
                    <input placeholder='Пол' className='userInput'></input>
                </div>
            </div>
            <div className='bigConteiner sectionConteiner'>
                <div className='smallTextConteiner midle'>
                    <span className='sectionText'>Введите данные о документах пользователя </span>
                </div>
            </div>
            <div className='bigConteiner'>
                <div className='smallConteiner'>
                    <span className='inputText'>Введите паспорт</span><br/>
                    <input placeholder='XXXX XXX' className='userInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='inputText'>Введите ИНН</span><br/>
                    <input placeholder='ИНН' className='userInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='inputText'>Введите СНИЛС</span><br/>
                    <input placeholder='СНИЛС' className='userInput'></input>
                </div>
            </div>
            <div className='bigConteiner'>
                <div className='smallConteiner'>
                    <span className='inputText'>Введите ОМС</span><br/>
                    <input placeholder='ОМС' className='userInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='inputText'>Введите водительское удостоверение</span><br/>
                    <input placeholder='' className='userInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='inputText'>Введите зарплату</span><br/>
                    <input placeholder='' className='userInput'></input>
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

export default AdminPageUserEdit;