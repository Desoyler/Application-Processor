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
                <div className={styles.zero}>
                    <span className={styles.zeroHText}>Отчет о проделанной работе</span>
                    <div className={styles.side}>
                                    <span className={styles.sideHText}>Управление заявкой</span><br/>
                                    <span className={styles.sideText} onClick={() => goToApplication(message.id)}>Общая информация</span><br/>
                                    <span className={styles.sideText} onClick={() => goToChat(message.id)} >Чат</span><br/>
                                    <span className={classNames(styles.sideText, styles.activeText)} >Отчет</span><br/>
                                    <div className={styles.midle}>
                                        <button onClick={() => goback( message.status)} className={styles.backbutton}>К заявкам</button> 
                                    </div>
                    </div>
                    <div className={styles.leftApplicationText}>
                        <span className={styles.boldText}>От: </span><span className={styles.ApplicationText}>{message.sender}</span><br/>
                        <span className={styles.boldText}>Местоположение:</span> <span className={styles.ApplicationText}>{message.location}</span><br/>
                        <span className={styles.boldText}>Тип:</span> <span className={styles.ApplicationText}>{message.type}</span><br/>
                        <span className={styles.boldText}>Статус:</span> <span className={styles.ApplicationText}>{message.status}</span><br/>
                    </div>
                    <div class={classNames(styles.blockText, styles.rightApplicationText)}>
                        <span className={styles.ApplicationNumber}>Заявка {message.id}</span>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={classNames(styles.shortText, styles.midle)}>
                     <span>{message.shortpage}</span>
                </div>
                <div className={classNames(styles.countText, styles.midle)}>
                    <span className={styles.coutShortText}>Сделайте отчет о проделанной работе в поле ниже:</span><br/>
                    <textarea className={styles.coutBigText} id="bigText" placeholder="Напишите отчет в этом поле"  rows="10" cols="50"  ></textarea>
                    
                    <div className={styles.coutStatusConteiner}>
                        <div className={styles.checkBoxContainer}>
                            <picture className={styles.coutImage}>
                            <img src={done} height="25px" width="25px"/>
                            </picture>
                            <input type="checkbox"></input>
                            <span className={styles.boldText}>Выполненна</span>
                        </div>
                        <div className={styles.checkBoxContainer}>
                            <picture className={styles.coutImage}>
                            <img src={check} height="25px" width="25px"/>
                            </picture>
                            <input type="checkbox"></input>
                            <span className={styles.boldText}>Доп.решение</span>
                        </div>
                        <div className={styles.checkBoxContainer}>
                            <picture className={styles.coutImage}>
                            <img src={x} height="25px" width="25px"/>
                            </picture>
                            <input type="checkbox"></input>
                            <span className={styles.boldText}>Не выполненна</span>
                        </div>
                    </div>
                    <button className={styles.sendCoutButton}>Отправить отчет</button>
                </div>
            </div>
        </div>
    );
};

export default ApplicationPageEnd;