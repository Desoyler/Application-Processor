import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AdminPage.css';

import Siteheader from './Siteheader.jsx';
import useradd from './assets/user-plus.svg';

const AdminPageSearch = ({goToEdit, goToAdminAplication}) =>{
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

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
        { id:13, username: 'user1', password: 'pass1', profession: 'Глава финансов', workername: 'Иван Иванов Иванович'},
        { id:14, username: 'user2', password: 'pass2', profession: 'Рабочий', workername: 'Василий Васильевич Васильев'},
        { id:15, username: 'user3', password: 'pass3', profession: 'Администратор', workername: 'Артем Артемович Артемов'},
        { id:16, username: 'user1', password: 'pass1', profession: 'Глава финансов', workername: 'Иван Иванов Иванович'},
        { id:17, username: 'user2', password: 'pass2', profession: 'Рабочий', workername: 'Василий Васильевич Васильев'},
        { id:18, username: 'user3', password: 'pass3', profession: 'Администратор', workername: 'Артем Артемович Артемов'},
      ];
    
    const goToAdd = () => 
        {
            navigate("/admin/add");
        };
    


    const filteredUsers = users.filter(user =>
        user.workername.toLowerCase().includes(searchTerm.toLowerCase())
        );

return(
    <div>
        <div className="cab">
            <span className="hText">Работа с данными пользователей</span>
                <div className="side">
                    <span className="sTextH">Возможности администратора</span><br/>
                    <span className="sText activesText" onClick="">Работа с данными пользователей</span><br/>
                    <span className="sText" onClick={goToAdminAplication}>Работа с заявками</span><br/>
                    <span className="sText" onClick="">Запросы в поддержку</span><br/>
                </div>
        </div>
        <div className='Adminconteiner '>
            <div className='searchbar'>
            <input
                type="text"
                placeholder="Введите имя работника..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="searchInput"
            />
            </div>
            <div className="searchbaseconteiner conteinersearch">
                {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                <div key={user.id} className="userCard" onClick={() => goToEdit(user.id)}>
                    <span>Имя работника: {user.workername}</span><br />
                    <span>айди пользовательской записи: {user.id}</span>
                </div>
                ))) : (<span>Ничего не найдено</span>)}
            </div>
            <div className=''>
                <button className='addbutton' onClick={goToAdd}><img src={useradd} className='addimg'/></button>
            </div>
        </div>
</div>
);
};

export default AdminPageSearch;