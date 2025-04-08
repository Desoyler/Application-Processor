import React , {useState}from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Historypage.module.css';

import Siteheader from './Siteheader.jsx';
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
          <div className={styles.wpage}>
                      <div className={styles.cab}>
                        <span className={styles.hText}>История заявок</span>
                        <div className={styles.side}>
                          <span className={styles.shText}><img src={filter} className={styles.filterimgr} width="25px" height="25px"/>Фильтр</span>
                          <span className={styles.shtText}>По поломке</span>
                            <div>
                              <picture>
                                <img src={hammer} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className={styles.scheck}></input>
                                <span className={styles.sText}>Ошибка в работе программы/системы</span>
                            </div>
                            <div>
                                <picture>
                                <img src={computer} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className={styles.scheck}></input>
                                <span className={styles.sText}>Поломка компьютерного оборудования</span>
                            </div>
                            <div>
                                <picture>
                                <img src={zap} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className={styles.scheck}></input>
                                <span className={styles.sText}>Перепад электроэнергии</span>
                            </div>
                            <div>
                                <picture>
                                <img src={cable} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className={styles.scheck}></input>
                                <span className={styles.sText}>Поломка рабочего компьютера</span>
                            </div>
                          <span className={styles.shtText}>Статус</span>
                          <div>
                                <picture>
                                <img src={done} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className={styles.scheck}></input>
                                <span className={styles.sText}>Выполненна</span>
                            </div>
                            <div>
                                <picture>
                                <img src={check} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className={styles.scheck}></input>
                                <span className={styles.sText}>Необходимо дополнительное решение</span>
                            </div>
                            <div>
                                <picture>
                                <img src={x} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className={styles.scheck}></input>
                                <span className={styles.sText}>Не выполненна</span>
                            </div>
                        </div>
                      </div>
                      <div className={styles.wconteiner}> 
                          {messages.length === 0 ? (
                             <div className={styles.nomessages}>
                              Ошибка: заявок нет
                            </div>
                          ) :
                          messages
                          .filter(msg => msg.status === "Выполнена")
                          .map((msg, index) => (
                              <div key={index} className={styles.message}>
                                  <div className={styles.wShortPage}>
                                  <h3 className={styles.wShortPageText}>{msg.shortpage}</h3>
                                  </div>
                                  <div className={styles.lists}>
                                  <span className={styles.wType}>Тип поломки: {msg.type} </span> <br/>
                                  <span className={styles.wtLocation}>Место проишествия: {msg.location} </span>
                                  </div>
                                  <div className={styles.wsender}>
                                  <p><strong>Отправитель: {msg.sender}</strong></p>
                                  </div>
                                  <div className={styles.wgo}>
                                  <button className={styles.goToApplication} onClick = {() => goToApplication(msg.id)}>Перейти к заявке</button>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              );
          }

export default Historypage;