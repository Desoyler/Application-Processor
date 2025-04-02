import React , {useState}from 'react';
import { useNavigate } from "react-router-dom";
import './Historypage.css';

import Siteheader from './Siteheader.jsx';
import hammer from './assets/hammer.svg';
import computer from './assets/binary.svg';
import zap from './assets/zap-off.svg';
import cable from './assets/cable.svg';
import check from './assets/badge-alert.svg';
import x from './assets/badge-x.svg';
import done from './assets/badge-check.svg';


const Historypage = ({goToAplication}) =>{

    const navigate = useNavigate();

    const messages = [
        {
          id: 1,
          shortpage: "Вышел из строя рабочий компьютер",
          text: "Привет!",
          sender: "Иван",
          location: "Цех 1",
          type: "Поломка оборудования",
          status: "Выполнена",
          chat: [
            { sender: "Иван", text: "Компьютер не включается", timestamp: 1 },
            { sender: "Техподдержка", text: "Вы пробовали перезагрузить?", timestamp: 2 },
            { sender: "Иван", text: "Да, но не помогает", timestamp: 3 },
          ],
        },
        {
          id: 2,
          shortpage: "ВАЗАААААААП",
          text: "Привет!",
          sender: "Alice",
          location: "Цех 1",
          type: "Поломка оборудования",
          status: "Выполнена",
          chat: [
            { sender: "Alice", text: "Когда сможете починить?", timestamp: 1 },
            { sender: "Техподдержка", text: "Завтра утром", timestamp: 2 },
          ],
        },
    ];

        const goback = () => {
            navigate("/cabinet");
        };

    return(
          <div className='wpage'>
                      <div className="cab">
                        <span className="hText">История заявок</span>
                        <div className='side'>
                          <span className='shText'>Фильтр</span>
                          <span className='shtText'>По поломке</span>
                            <div>
                              <picture>
                                <img src={hammer} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className='scheck'></input>
                                <span className='sText'>Ошибка в работе программы/системы</span>
                            </div>
                            <div>
                                <picture>
                                <img src={computer} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className='scheck'></input>
                                <span className='sText'>Поломка компьютерного оборудования</span>
                            </div>
                            <div>
                                <picture>
                                <img src={zap} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className='scheck'></input>
                                <span className='sText'>Перепад электроэнергии</span>
                            </div>
                            <div>
                                <picture>
                                <img src={cable} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className='scheck'></input>
                                <span className='sText'>Поломка рабочего компьютера</span>
                            </div>
                          <span className='shtText'>По итогу</span>
                          <div>
                                <picture>
                                <img src={done} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className='scheck'></input>
                                <span className='sText'>Выполненна</span>
                            </div>
                            <div>
                                <picture>
                                <img src={check} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className='scheck'></input>
                                <span className='sText'>Необходимо дополнительное решение</span>
                            </div>
                            <div>
                                <picture>
                                <img src={x} height="25px" width="25px"/>
                                </picture>
                                <input type="checkbox" className='scheck'></input>
                                <span className='sText'>Не выполненна</span>
                            </div>
                        </div>
                      </div>
                      <div className="wconteiner"> 
                          {messages.length === 0 ? (
                             <div className="nomessages">
                              Ошибка: заявок нет
                            </div>
                          ) :
                          messages
                          .filter(msg => msg.status === "Выполнена")
                          .map((msg, index) => (
                              <div key={index} className="message">
                                  <div className='wShortPage'>
                                  <h3 className="wShortPageText">{msg.shortpage}</h3>
                                  </div>
                                  <div className='lists'>
                                  <span className="wType">Тип поломки: {msg.type} </span> <br/>
                                  <span className="wtLocation">Место проишествия: {msg.location} </span>
                                  </div>
                                  <div className='wsender'>
                                  <p><strong>Отправитель: {msg.sender}</strong></p>
                                  </div>
                                  <div className='wgo'>
                                  <button className="goToApplication" onClick = {() => goToAplication(msg.id)}>Перейти к заявке</button>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              );
          }

export default Historypage;