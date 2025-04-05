import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AdminPage.css';

import Siteheader from './Siteheader.jsx';

const AdminPage = ({}) =>{

return(
    <div>
        <div className="cab">
            <span className="hText">Панель администратора</span>
            <div className="side">
            <span className="sTextH">Возможности администратора</span><br/>
            <span className="sText">Добавление пользователя</span><br/>
            <span className="sText" onClick="">Отредактировать состояние заявки</span><br/>
            <span className="sText" onClick="">Запросы в поддержку</span><br/>
        </div>
    </div>
        <div className='Adminconteiner'>

        </div>
    </div>
);
};

export default AdminPage;