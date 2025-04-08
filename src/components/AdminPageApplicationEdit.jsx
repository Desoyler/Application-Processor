import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const AdminPageApplicationEdit = ({goToEdit, goToAdminAplication, }) =>{
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const messages = [
        {
          id: 1,
          shortpage: "Вышел из строя рабочий компьютер",
          text: "Мой компьютер неожиданно перестал включаться после очередного рабочего дня. При нажатии на кнопку питания не загораются индикаторы, и вентиляторы не издают никаких звуков. Я проверил кабель питания и подключение к розетке, но это не дало никакого результата. Пробовал заменить блок питания, но ситуация осталась прежней. Возможно, проблема связана с материнской платой или перегревом процессора, который мог повредить ключевые компоненты. За день до поломки компьютер начал сильно тормозить и зависать, что могло быть первым сигналом неисправности. Теперь без профессиональной диагностики точно не разобраться, так что придется обращаться в сервисный центр.",
          sender: "Иван Иванов Иванович",
          location: "Цех 1",
          type: "Поломка оборудования",
          status: "Выполнена",
          chat: [
            { sender: "Иван Иванов Иванович", text: "Компьютер не включаетсявыфвфывфывфывфывфывфывфывфы", timestamp: 1 },
            { sender: "Техподдержка", text: "Вы пробовали перезагрузить?", timestamp: 2 },
            { sender: "Иван Иванов Иванович", text: "Да, но не помогает", timestamp: 3 },
          ],
        },
        {
          id: 2,
          shortpage: "ВАЗАААААААП",
          text: "Привет!",
          sender: "Иван Иванов Иванович",
          location: "Цех 1",
          type: "Поломка оборудования",
          status: "Не выполнена",
          chat: [
            { sender: "Иван Иванов Иванович", text: "Когда сможете починить?", timestamp: 1 },
            { sender: "Техподдержка", text: "Завтра утром", timestamp: 2 },
          ],
        },
    ];
    
    const goToSearch = () => 
    {
        navigate("/admin/search");
    };

return(
    <div>
        <div className="cab">
            <span className="hText">Работа с данными пользователей</span>
                <div className="side">
                    <span className="sTextH">Возможности администратора</span><br/>
                    <span className="sText" onClick={goToSearch}>Работа с данными пользователей</span><br/>
                    <span className="sText" onClick={goToAdminAplication}>Работа с заявками</span><br/>
                    <span className="sText" onClick="">Запросы в поддержку</span><br/>
                </div>   
        </div>
        <div className='Adminconteiner midle'>
            <div className='smallTextConteiner apeditmargin'>
                <span>Изменить заголовок заявки</span><br/>
                <input Type='Text' className='UserInput'></input>
            </div>
            <div className='smallTextConteiner apeditmargin'>
                <span>Изменить текст заявки</span><br/>
                <input Type='Text' className='UserInput'></input>
            </div>
            <div className='smallTextConteiner apeditmargin'>
                <span>Изменить тип заявки</span><br/>
                <select classNames="list bottomborder"id="problemType " defaultValue="">
                    <option value="" disabled hidden>Выбирите тип поломки</option>
                    <option value="1">Поломка компьютерного оборудования</option>
                    <option value="2">Перебои электроэнергии</option>
                    <option value="3">Поломка рабочего оборудования</option>
                </select>
            </div>
            <div className='smallTextConteiner apeditmargin'>
                <span>Изменить статус заявки</span><br/>
                <select className="list, styles.bottomborder" id="problemType " defaultValue="">
                    <option value="" disabled hidden>Выбирите состояние заявки</option>
                    <option value="1">Выполнена</option>
                    <option value="2">Нужны дополнительные решения</option>
                    <option value="3">Не выполненна</option>
                </select>
            </div>
            <div className='smallTextConteiner apeditmargin'>
                <span className="">Опишите вашу проблему детально в поле ниже:</span><br/>
                <textarea className="" id="bigText" rows="10" cols="50" onChange="" ></textarea>
            </div>
            <div className='smallTextConteiner apeditmargin'>
                <button>Удалить заявку</button><br/>
            </div>
            <div className='smallTextConteiner apeditmargin'>
                <button>Применить изменения</button>
            </div>
        </div>
    </div>
);
};

export default AdminPageApplicationEdit;