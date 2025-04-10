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

const AdminPageApplication = ({ goToEditApplication, messages, goToUsers}) =>{
    const [searchTerm, setSearchTerm] = useState("");


return(
    <div>
        <div className="zero">
            <span className="zeroHText">Работа с данными пользователей</span>
                <div className="side">
                    <span className="sideHText">Возможности администратора</span><br/>
                    <span className="sideText" onClick={goToUsers}>Работа с данными пользователей</span><br/>
                    <span className="sideText activeText" onClick="">Работа с заявками</span><br/>
                    <span className="sideText" onClick="">Запросы в поддержку</span><br/>
                </div>
                <div className='filterConteiner'>
                <span className="hText filterText"><img src={filter} className='filterimgr' width="25px" height="25px"/>Фильтр</span>
                <span className="sideHText filterText">По поломке</span>
                  <div className='filterSmallConteiner'>
                    <picture className='filterimg'>
                    <img src={hammer} height="25px" width="25px"/>
                    </picture>
                    <input type="checkbox" className="checkbox"></input>
                    <span className="filterText">Ошибка в работе программы/системы</span>
                  </div>
                 <div className='filterSmallConteiner' >
                     <picture className='filterImage'>
                     <img src={computer} height="25px" width="25px"/>
                     </picture>
                     <input type="checkbox" className="checkbox"></input>
                     <span className="filterText">Поломка компьютерного оборудования</span>
                 </div>
                 <div className='filterSmallConteiner'>
                     <picture className='filterImage'>
                     <img src={zap} height="25px" width="25px"/>
                     </picture>
                     <input type="checkbox" className="checkbox"></input>
                     <span className="filterText">Перепад электроэнергии</span>
                 </div>
                <div className='filterSmallConteiner'> 
                    <picture className='filterImage'>
                    <img src={cable} height="25px" width="25px"/>
                    </picture>
                    <input type="checkbox" className="checkbox"></input>
                    <span className="filterText">Поломка рабочего компьютера</span>
                </div>
                <span className="filterHText">Статус</span>
                <div className='filterSmallConteiner'>
                      <picture className='filterImage'>
                      <img src={done} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className="checkbox"></input>
                      <span className="filterText">Выполненна</span>
                  </div>
                  <div className='filterSmallConteiner'>
                      <picture className='filterImage'>
                      <img src={check} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className="checkbox"></input>
                      <span className="filterText">Необходимо дополнительное решение</span>
                  </div>
                  <div className='filterSmallConteiner'>
                      <picture className='filterImage'>
                      <img src={x} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className="checkbox"></input>
                      <span className="filterText">Не выполненна</span>
                  </div>
                </div>
        </div>
        <div className='conteiner'>
            <div className='searchbar'>
            <input
                type="text"
                placeholder="Поиск заявки"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="searchInput"
            />
            </div>
            <div className="searchBaseContainer conteinerSearch" >
                {messages.map((msg) => (
                    <div key={msg.id} className="userCard" onClick={() => goToEditApplication(msg.id)}>
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