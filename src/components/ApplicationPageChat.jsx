import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Applicationpage.module.css';

import Siteheader from './Siteheader.jsx';
import arrow from './assets/arrow-big-right.svg';
import classNames from 'classnames';

const ApplicationPageChat = ({workername, messages, goToApplication, goToEnd, users, goback}) => {
    const { id } = useParams(); // Получаем параметр id из URL
    const navigate = useNavigate(); 


    const [message, setMessage] = useState(null);
    
    useEffect(() => {

        const foundMessage = messages.find(msg => msg.id === parseInt(id)); // Ищем сообщение по id
        setMessage(foundMessage);
    }, [id]); // Каждый раз когда id меняется
    

    const selectedId = messages.id;
    const selectedMessages = messages.find(message => message.id === selectedId);

    if (!message) {
        return <div>Загрузка...</div>; // пока сообщение не будет найдено
    }
    return (
        <div>
            <div>
                <div className={styles.cab}>
                    <span className={styles.hText}>Чат с отправителем</span>
                    <div className={styles.side}>
                                    <span className={styles.sTextH}>Управление заявкой</span><br/>
                                    <span className={styles.sText} onClick={() => goToApplication(message.id)}>Общая информация</span><br/>
                                    <span className={classNames(styles.sText, styles.activesText)} >Чат</span><br/>
                                    <span className={styles.sText} onClick={() => goToEnd(message.id)} >Вывод</span><br/>
                                    <div className={classNames(styles.goback, styles.midle)}>
                                        <button onClick={() => goback(message.status)} className={styles.backbutton}>К заявкам</button> 
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
                <h2>Чат</h2>
                <div className={styles.chatconteiner}>
                    {message.chat.map((msg) => (
                        <div
                        key={`${message.id}-${msg.id}`}
                        className={`${styles.messageContainer} ${msg.sender === workername ? styles.usermessage : styles.othermessage}`}
                        >
                        <strong>{msg.sender}</strong><br /> {msg.message}
                        </div>
                        ))}
                </div>
                <div className={styles.sendFooter}>
                    <input type="Text" placeholder="Введите сообщение" className={styles.aText}></input>
                    <button className={styles.aSend}>
                        <picture>
                            <img className={styles.arrow} src={arrow} height="22px" width="25px"/>
                        </picture>
                    </button>
                </div>
            </div> 
        </div>
    );
};

export default ApplicationPageChat;