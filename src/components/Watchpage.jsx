import React, { useState, useEffect } from 'react';
import styles from './Watchpage.module.css';

import hammer from './assets/hammer.svg';
import computer from './assets/binary.svg';
import zap from './assets/zap-off.svg';
import cable from './assets/cable.svg';
import filter from './assets/list-filter.svg';

const Watchpage = ({goToApplication , messages}) => {
    return (
        <div className={styles.watchPage}>
            <div className={styles.zero}>
              <span className={styles.zeroHText}>Просмотр активных заявок</span>
              <div className={styles.sidePanel}>
                <span className={styles.sideHText}><img src={filter} className={styles.filterImage} width="25px" height="25px"/>Фильтр</span>
                <span className={styles.sideBigText}>По поломке</span>
                  <div>
                    <picture>
                      <img src={hammer} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className={styles.sideCheckbox}></input>
                      <span className={styles.sideText}>Ошибка в работе программы/системы</span>
                  </div>
                  <div>
                      <picture>
                      <img src={computer} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className={styles.sideCheckbox}></input>
                      <span className={styles.sideText}>Поломка компьютерного оборудования</span>
                  </div>
                  <div>
                      <picture>
                      <img src={zap} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className={styles.sideCheckbox}></input>
                      <span className={styles.sideText}>Перепад электроэнергии</span>
                  </div>
                  <div>
                      <picture>
                      <img src={cable} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className={styles.sideCheckbox}></input>
                      <span className={styles.sideText}>Поломка рабочего компьютера</span>
                  </div>
              </div>
            </div>
            <div className={styles.conteiner}> 
                {messages.length === 0 ? (
                   <div className={styles.noApplications}>
                    Ошибка: заявок нет
                  </div>
                ) :
                messages
                .filter(msg => msg.status === "Не выполнена")
                .map((msg, index) => (
                    <div key={index} className={styles.applicationConteiner}>
                        <div className={styles.shortTextConteiner}>
                        <h3 className={styles.shortText}>{msg.shortpage}</h3>
                        </div>
                        <div>
                        <span className={styles.type}>Тип поломки: {msg.type} </span> <br/>
                        <span className={styles.location}>Место проишествия: {msg.location} </span>
                        </div>
                        <div className={styles.sender}>
                        <p><strong>Отправитель: {msg.sender}</strong></p>
                        </div>
                        <div className={styles.goToApplicationConteiner}>
                        <button className={styles.goToApplicationButton} onClick = {() => goToApplication(msg.id)}>Перейти к заявке</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Watchpage;
