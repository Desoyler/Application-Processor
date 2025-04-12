import React, { useState, useEffect } from 'react';
import styles from './AdminPage.module.css';

import hammer from './assets/hammer.svg';
import computer from './assets/binary.svg';
import zap from './assets/zap-off.svg';
import cable from './assets/cable.svg';
import check from './assets/badge-alert.svg';
import x from './assets/badge-x.svg';
import done from './assets/badge-check.svg';
import filter from './assets/list-filter.svg';
import classNames from 'classnames';

const AdminPageApplication = ({ goToEditApplication, messages, goToUsers}) =>{
    const [searchTerm, setSearchTerm] = useState("");


return(
    <div>
        <div className={styles.zero}>
            <span className={styles.zeroHText}>Работа с заявками</span>
                <div className={styles.side}>
                    <span className={styles.sideHText}>Возможности администратора</span><br/>
                    <span className={styles.sideText} onClick={goToUsers}>Работа с данными пользователей</span><br/>
                    <span className={classNames(styles.sideText , styles.activeText)} onClick="">Работа с заявками</span><br/>
                    <span className={styles.sideText} onClick="">Запросы в поддержку</span><br/>
                </div>
                <div className={styles.filterConteiner}>
                <span className={classNames(styles.hText , styles.filterText)}><img src={filter} className='filterLogoImage' width="25px" height="25px"/>Фильтр</span>
                <span className={classNames(styles.sideHText , styles.filterText)}>По поломке</span>
                  <div className={styles.filterSmallConteiner}>
                    <picture className={styles.filterImage}>
                    <img src={hammer} height="25px" width="25px"/>
                    </picture>
                    <input type="checkbox" className={styles.checkbox}></input>
                    <span className={styles.filterText}>Ошибка в работе программы/системы</span>
                  </div>
                 <div className={styles.filterSmallConteiner} >
                     <picture className={styles.filterImage}>
                     <img src={computer} height="25px" width="25px"/>
                     </picture>
                     <input type="checkbox" className={styles.checkbox}></input>
                     <span className={styles.filterText}>Поломка компьютерного оборудования</span>
                 </div>
                 <div className={styles.filterSmallConteiner}>
                     <picture className={styles.filterImage}>
                     <img src={zap} height="25px" width="25px"/>
                     </picture>
                     <input type="checkbox" className={styles.checkbox}></input>
                     <span className={styles.filterText}>Перепад электроэнергии</span>
                 </div>
                <div className={styles.filterSmallConteiner}> 
                    <picture className={styles.filterImage}>
                    <img src={cable} height="25px" width="25px"/>
                    </picture>
                    <input type="checkbox" className={styles.checkbox}></input>
                    <span className={styles.filterText}>Поломка рабочего компьютера</span>
                </div>
                <span className={styles.filterHText}>Статус</span>
                <div className={styles.filterSmallConteiner}>
                      <picture className={styles.filterImage}>
                      <img src={done} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className={styles.checkbox}></input>
                      <span className={styles.filterText}>Выполненна</span>
                  </div>
                  <div className={styles.filterSmallConteiner}>
                      <picture className={styles.filterImage}>
                      <img src={check} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className={styles.checkbox}></input>
                      <span className={styles.filterText}>Необходимо дополнительное решение</span>
                  </div>
                  <div className={styles.filterSmallConteiner}>
                      <picture className={styles.filterImage}>
                      <img src={x} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className={styles.checkbox}></input>
                      <span className={styles.filterText}>Не выполненна</span>
                  </div>
                </div>
        </div>
        <div className={styles.conteiner}>
            <div className={styles.searchbar}>
            <input
                type="text"
                placeholder="Поиск заявки"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
            />
            </div>
            <div className={classNames(styles.searchBaseContainer , styles.conteinerSearch)} >
                {messages.map((msg) => (
                    <div key={msg.id} className={styles.userCard} onClick={() => goToEditApplication(msg.id)}>
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