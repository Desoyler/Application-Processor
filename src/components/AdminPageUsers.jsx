import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AdminPage.css';

import Siteheader from './Siteheader.jsx';
import useradd from './assets/user-plus.svg';

const AdminPageUsers = ({goToEdit, goToAdminAplication, users, goToAdd}) =>{
    const [searchTerm, setSearchTerm] = useState("");
    


    const filteredUsers = users.filter(user =>
        user.workername.toLowerCase().includes(searchTerm.toLowerCase())
        );

return(
    <div>
        <div className="zero">
            <span className="zeroHText">Работа с данными пользователей</span>
                <div className="side">
                    <span className="sideHText">Возможности администратора</span><br/>
                    <span className="sideText activeText" onClick="">Работа с данными пользователей</span><br/>
                    <span className="sideText" onClick={goToAdminAplication}>Работа с заявками</span><br/>
                    <span className="sideText" onClick="">Запросы в поддержку</span><br/>
                </div>
        </div>
        <div className='conteiner'>
            <div className='searchbar'>
            <input
                type="text"
                placeholder="Введите имя работника..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="searchInput"
            />
            </div>
            <div className="searchBaseContainer">
                {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                <div key={user.id} className="userCard" onClick={() => goToEdit(user.id)}>
                    <span>Имя работника: {user.workername}</span><br />
                    <span>айди пользовательской записи: {user.id}</span>
                </div>
                ))) : (<span>Ничего не найдено</span>)}
            </div>
            <div >
                <button className='addbutton' onClick={goToAdd}><img src={useradd} className='addimg'/></button>
            </div>
        </div>
</div>
);
};

export default AdminPageUsers;