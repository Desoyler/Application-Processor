import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Applicationpage.module.css';

import Siteheader from './Siteheader.jsx';
import check from './assets/badge-alert.svg';
import x from './assets/badge-x.svg';
import done from './assets/badge-check.svg';
import classNames from 'classnames';

const ApplicationPageEnd = ({messages, goToApplication, goToChat, goback}) => {
    const { id } = useParams(); // Получаем параметр id из URL
    const navigate = useNavigate(); 

    const [message, setMessage] = useState(null);
    
    useEffect(() => {
        const foundMessage = messages.find(msg => msg.id === parseInt(id)); // Ищем сообщение по id
        setMessage(foundMessage);
    }, [id]); // Каждый раз когда id меняется
    
    if (!message) {
        return <div>Загрузка...</div>; // пока сообщение не будет найдено
    }
    return (
        <div>
            <div>
                <div className={styles.cab}>
                    <span className={styles.hText}>Отсчет о проделанной работе</span>
                    <div className={styles.side}>
                                    <span className={styles.sTextH}>Управление заявкой</span><br/>
                                    <span className={styles.sText} onClick={() => goToApplication(message.id)}>Общая информация</span><br/>
                                    <span className={styles.sText} onClick={() => goToChat(message.id)} >Чат</span><br/>
                                    <span className={classNames(styles.sText, styles.activesText)} >Вывод</span><br/>
                                    <div className={classNames(styles.goback, styles.midle)}>
                                        <button onClick={() => goback( message.status)} className={styles.backbutton}>К заявкам</button> 
                                    </div>
                    </div>
                    <div className={styles.left}>
                        <span className={styles.boldText}>От: </span><span className={styles.ApplecationText}>{message.sender}</span><br/>
                        <span className={styles.boldText}>Местоположение:</span> <span className={styles.ApplecationText}>{message.location}</span><br/>
                        <span className={styles.boldText}>Тип:</span> <span className={styles.ApplecationText}>{message.type}</span><br/>
                        <span className={styles.boldText}>Статус:</span> <span className={styles.ApplecationText}>{message.status}</span><br/>
                    </div>
                    <div class={classNames(styles.haText, styles.right)}>
                        <span className={styles.Applicationh}>Заявка {message.id}</span>
                    </div>
                </div>
            </div>
            <div className={styles.bigContainer}>
                <div className={classNames(styles.shorttext, styles.midle)}>
                     <span>{message.shortpage}</span>
                </div>
                <div className={classNames(styles.problemtextend, styles.midle)}>
                    <span className={styles.shortendtext}>Сделайте отсчет о проделанной работе в поле ниже:</span><br/>
                    <textarea className={styles.endBigText} id="bigText" placeholder="Напишите отсчет в этом поле"  rows="10" cols="50"  ></textarea>
                    
                    <div className={styles.EndSolution}>
                        <div className={styles.checkconteiner}>
                            <picture className={styles.endimg}>
                            <img src={done} height="25px" width="25px"/>
                            </picture>
                            <input type="checkbox" className={styles.check}></input>
                            <span className={styles.boldText}>Выполненна</span>
                        </div>
                        <div className={styles.checkconteiner}>
                            <picture className={styles.endimg}>
                            <img src={check} height="25px" width="25px"/>
                            </picture>
                            <input type="checkbox" className={styles.check}></input>
                            <span className={styles.boldText}>Доп.решение</span>
                        </div>
                        <div className={styles.checkconteiner}>
                            <picture className={styles.endimg}>
                            <img src={x} height="25px" width="25px"/>
                            </picture>
                            <input type="checkbox" className={styles.check}></input>
                            <span className={styles.boldText}>Не выполненна</span>
                        </div>
                    </div>
                    <button className={styles.ssendbutton}>Отправить отсчет</button>
                </div>
            </div>
        </div>
    );
};

export default ApplicationPageEnd;