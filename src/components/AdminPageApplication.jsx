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

const AdminPageApplication = ({goToEdit, goToAdminAplication, goToEditApplicarion}) =>{
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
                    <span className="sText activesText" onClick="">Работа с заявками</span><br/>
                    <span className="sText" onClick="">Запросы в поддержку</span><br/>
                </div>
                <div className='filterConteiner'>
                <span className="shText filterText"><img src={filter} className='filterimgr' width="25px" height="25px"/>Фильтр</span>
                <span className="shtText filterText">По поломке</span>
                  <div className='filtersmallconteiner'>
                    <picture className='filterimg'>
                    <img src={hammer} height="25px" width="25px"/>
                    </picture>
                    <input type="checkbox" className="scheck"></input>
                    <span className="sText filterText">Ошибка в работе программы/системы</span>
                  </div>
                 <div className='filtersmallconteiner' >
                     <picture className='filterimg'>
                     <img src={computer} height="25px" width="25px"/>
                     </picture>
                     <input type="checkbox" className="scheck"></input>
                     <span className="sText filterText">Поломка компьютерного оборудования</span>
                 </div>
                 <div className='filtersmallconteiner'>
                     <picture className='filterimg'>
                     <img src={zap} height="25px" width="25px"/>
                     </picture>
                     <input type="checkbox" className="scheck"></input>
                     <span className="sText filterText">Перепад электроэнергии</span>
                 </div>
                <div className='filtersmallconteiner'> 
                    <picture className='filterimg'>
                    <img src={cable} height="25px" width="25px"/>
                    </picture>
                    <input type="checkbox" className="scheck"></input>
                    <span className="sText filterText">Поломка рабочего компьютера</span>
                </div>
                <span className="shtText">Статус</span>
                <div className='filtersmallconteiner'>
                      <picture className='filterimg'>
                      <img src={done} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className="scheck"></input>
                      <span className="sText filterText">Выполненна</span>
                  </div>
                  <div className='filtersmallconteiner'>
                      <picture className='filterimg'>
                      <img src={check} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className="scheck"></input>
                      <span className="sText filterText">Необходимо дополнительное решение</span>
                  </div>
                  <div className='filtersmallconteiner'>
                      <picture className='filterimg'>
                      <img src={x} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className="scheck"></input>
                      <span className="sText filterText">Не выполненна</span>
                  </div>
                </div>
        </div>
        <div className='Adminconteiner '>
            <div className='searchbar'>
            <input
                type="text"
                placeholder="Поиск заявки"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="searchInput"
            />
            </div>
            <div className="searchbaseconteiner conteinersearch" >
                {messages.map((msg) => (
                    <div key={msg.id} className="userCard" onClick={() => goToEditApplicarion(msg.id)}>
                    <span>{msg.shortpage}</span><br/>
                    <span>Тип: {msg.type}</span><br/>
                    <span>Статус: {msg.status}</span><br/>
                    <span>Отправитель: {msg.sender}</span><br/>
                    <span>айди заявки: {msg.id}</span>
                    </div>
                ))}
            </div>
            
        </div>
    </div>
);
};

export default AdminPageApplication;