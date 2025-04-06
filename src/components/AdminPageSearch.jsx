import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AdminPage.css';

import Siteheader from './Siteheader.jsx';

const AdminPageSearch = ({}) =>{
    const navigate = useNavigate();
    const users = [
        { id:1, username: 'user1', password: 'pass1', profession: 'Глава финансов', workername: 'Иван Иванов Иванович'},
        { id:2, username: 'user2', password: 'pass2', profession: 'Рабочий', workername: 'Василий Васильевич Васильев'},
        { id:3, username: 'user3', password: 'pass3', profession: 'Администратор', workername: 'Артем Артемович Артемов'},
        { id:4, username: 'user1', password: 'pass1', profession: 'Глава финансов', workername: 'Иван Иванов Иванович'},
        { id:5, username: 'user2', password: 'pass2', profession: 'Рабочий', workername: 'Василий Васильевич Васильев'},
        { id:6, username: 'user3', password: 'pass3', profession: 'Администратор', workername: 'Артем Артемович Артемов'},
        { id:7, username: 'user1', password: 'pass1', profession: 'Глава финансов', workername: 'Иван Иванов Иванович'},
        { id:8, username: 'user2', password: 'pass2', profession: 'Рабочий', workername: 'Василий Васильевич Васильев'},
        { id:9, username: 'user3', password: 'pass3', profession: 'Администратор', workername: 'Артем Артемович Артемов'},
        { id:10, username: 'user1', password: 'pass1', profession: 'Глава финансов', workername: 'Иван Иванов Иванович'},
        { id:11, username: 'user2', password: 'pass2', profession: 'Рабочий', workername: 'Василий Васильевич Васильев'},
        { id:12, username: 'user3', password: 'pass3', profession: 'Администратор', workername: 'Артем Артемович Артемов'},
      ];
    
    const goToAdd = () => 
        {
            navigate("/admin");
        };
    const goToEdit = () => 
        {
            navigate("/admin/edit");
        };

return(
    <div>
        <div className="cab">
            <span className="hText">Поиск по базе данных</span>
                <div className="side">
                    <span className="sTextH">Возможности администратора</span><br/>
                    <span className="sText " onClick={goToAdd}>Добавление пользователя</span><br/>
                    <span className="sText " onClick={goToEdit}>Изменение данных пользователя</span><br/>
                    <span className="sText activesText" onClick="">Поиск пользователей в базе</span><br/>
                    <span className="sText" onClick="">Отредактировать состояние заявки</span><br/>
                    <span className="sText" onClick="">Запросы в поддержку</span><br/>
                </div>
        </div>
        <div className='Adminconteiner'>
            <div>

            </div>
            {users.map((user) => (
            <div key={user.id}>
            <span>Имя работника: {user.workername} </span><span>айди пользовательской записи: {user.id}</span>
            </div>
            ))}
        </div>
</div>
);
};

export default AdminPageSearch;