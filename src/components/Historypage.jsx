import React , {useState}from 'react';
import styles from './Historypage.module.css';

import hammer from './assets/hammer.svg';
import computer from './assets/binary.svg';
import zap from './assets/zap-off.svg';
import cable from './assets/cable.svg';
import check from './assets/badge-alert.svg';
import x from './assets/badge-x.svg';
import done from './assets/badge-check.svg';
import filter from './assets/list-filter.svg';


const Historypage = ({goToApplication, messages}) =>{
    return(
          <div className={styles.historypage}>
                      <div className={styles.zero}>
                        <span className={styles.zeroHText}>История заявок</span>
                        <div className={styles.sidePage}>
                          <span className={styles.sideHText}><img src={filter} className={styles.filterImage} width="25px" height="25px"/>Фильтр</span>
                          <span className={styles.sideMText}>По поломке</span>
                            <div>
                              <picture>
                                <img src={hammer} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className={styles.sideCheckBox}></input>
                                <span className={styles.sideText}>Ошибка в работе программы/системы</span>
                            </div>
                            <div>
                                <picture>
                                <img src={computer} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className={styles.sideCheckBox}></input>
                                <span className={styles.sideText}>Поломка компьютерного оборудования</span>
                            </div>
                            <div>
                                <picture>
                                <img src={zap} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className={styles.sideCheckBox}></input>
                                <span className={styles.sideText}>Перепад электроэнергии</span>
                            </div>
                            <div>
                                <picture>
                                <img src={cable} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className={styles.sideCheckBox}></input>
                                <span className={styles.sideText}>Поломка рабочего компьютера</span>
                            </div>
                          <span className={styles.sideMText}>Статус</span>
                          <div>
                                <picture>
                                <img src={done} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className={styles.sideCheckBox}></input>
                                <span className={styles.sideText}>Выполненна</span>
                            </div>
                            <div>
                                <picture>
                                <img src={check} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className={styles.sideCheckBox}></input>
                                <span className={styles.sideText}>Необходимо дополнительное решение</span>
                            </div>
                            <div>
                                <picture>
                                <img src={x} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className={styles.sideCheckBox}></input>
                                <span className={styles.sideText}>Не выполненна</span>
                            </div>
                        </div>
                      </div>
                      <div className={styles.wconteiner}> 
                          {messages.length === 0 ? (
                             <div className={styles.noApplications}>
                              Ошибка: заявок нет
                            </div>
                          ) :
                          messages
                          .filter(msg => msg.status === "Выполнена")
                          .map((msg, index) => (
                              <div key={index} className={styles.ApplicationConteiner}>
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

export default Historypage;