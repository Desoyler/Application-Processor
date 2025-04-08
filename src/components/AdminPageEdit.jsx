import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AdminPage.css';

import Siteheader from './Siteheader.jsx';

const AdminPageEdit = ({}) =>{
    const navigate = useNavigate();
    
    const goToAdd = () => 
        {
            navigate("/admin/add");
        };
    const goToSearch = () => 
        {
            navigate("/admin/search");
        };    

return(
    <div>
        <div className="cab">
            <span className="hText">Изменение данных пользователя</span>
                <div className="side">
                    <span className="sTextH">Возможности администратора</span><br/>
                    <span className="sText" onClick={goToSearch}>Работа с данными пользователей</span><br/>
                    <span className="sText" onClick="">Работа с заявками</span><br/>
                    <span className="sText" onClick="">Запросы в поддержку</span><br/>
                </div>
        </div>
        <div className='Adminconteiner'>
            <div className='bigConteiner textConteiner'>
                <div className='smallTextConteiner midle'>
                    <span className='sectText'>Данные рабочего акаунта </span>
                </div>
            </div>
            <div className='bigConteiner'>
                <div className='smallConteiner'>
                    <span className='Text'>Введите логин пользователя</span><br/>
                    <input placeholder='Логин' className='UserInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='Text'>Введите пароль пользователя</span><br/>
                    <input placeholder='Пароль' className='UserInput'></input>
                </div>
            </div>
            <div className='bigConteiner textConteiner'>
                <div className='smallTextConteiner midle'>
                    <span className='sectText'>Введите личные данные пользователя</span>
                </div>
            </div>
            <div className='bigConteiner'>
                <div className='smallConteiner'>
                    <span className='Text'>Введите имя</span><br/>
                    <input placeholder='Имя' className='UserInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='Text'>Введите отчество</span><br/>
                    <input placeholder='Отчество' className='UserInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='Text'>Введите фамилию</span><br/>
                    <input placeholder='Фамилия' className='UserInput'></input>
                </div>
            </div>
            <div className='bigConteiner textConteiner'>
                <div className='smallTextConteiner midle'>
                        <span className='sectText'>Введите контактные данные </span>
                </div>
            </div>
            <div className='bigConteiner'>
                <div className='smallConteiner'>
                    <span className='Text'>Введите e-mail</span><br/>
                    <input placeholder='Почта' className='UserInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='Text'>Введите телефон</span><br/>
                    <input placeholder='+7' className='UserInput'></input>
                </div>
            </div>
            <div className='bigConteiner textConteiner'>
                <div className='smallTextConteiner midle'>
                    <span className='sectText'>Введите личные данные пользователя </span>
                </div>
            </div>
            <div className='bigConteiner'>
                <div className='smallConteiner'>
                    <span className='Text'>Введите дату рождения</span><br/>
                    <input placeholder='xx.xx.xxxx' className='UserInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='Text'>Введите пол</span><br/>
                    <input placeholder='Пол' className='UserInput'></input>
                </div>
            </div>
            <div className='bigConteiner textConteiner'>
                <div className='smallTextConteiner midle'>
                    <span className='sectText'>Введите данные о документах пользователя </span>
                </div>
            </div>
            <div className='bigConteiner'>
                <div className='smallConteiner'>
                    <span className='Text'>Введите паспорт</span><br/>
                    <input placeholder='XXXX XXX' className='UserInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='Text'>Введите ИНН</span><br/>
                    <input placeholder='ИНН' className='UserInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='Text'>Введите СНИЛС</span><br/>
                    <input placeholder='СНИЛС' className='UserInput'></input>
                </div>
            </div>
            <div className='bigConteiner'>
                <div className='smallConteiner'>
                    <span className='Text'>Введите ОМС</span><br/>
                    <input placeholder='ОМС' className='UserInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='Text'>Введите водительское удостоверение</span><br/>
                    <input placeholder='' className='UserInput'></input>
                </div>
                <div className='smallConteiner'>
                    <span className='Text'>Введите зарплату</span><br/>
                    <input placeholder='' className='UserInput'></input>
                </div>
            </div>
            <div className='bigConteiner textConteiner midle'>  
                <button className='send'>Изменить</button>
            </div>
            <div className='bigConteiner textConteiner deletebutton '>  
                <button className='send'>Удалить пользователя</button>
            </div>
        </div>
</div>
);
};

export default AdminPageEdit;