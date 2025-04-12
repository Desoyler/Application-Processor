import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import styles from './Applicationpage.module.css';

import arrow from './assets/arrow-big-right.svg';
import classNames from 'classnames';

const ApplicationPageChat = ({workername, messages, goToApplication, goToEnd, goback}) => {
    const { id } = useParams(); // Получаем параметр id из URL


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
                <div className={styles.zero}>
                    <span className={styles.zeroHText}>Чат с отправителем</span>
                    <div className={styles.side}>
                                    <span className={styles.sideHText}>Управление заявкой</span><br/>
                                    <span className={styles.sideText} onClick={() => goToApplication(message.id)}>Общая информация</span><br/>
                                    <span className={classNames(styles.sideText, styles.activeText)} >Чат</span><br/>
                                    <span className={styles.sideText} onClick={() => goToEnd(message.id)} >Отчет</span><br/>
                                    <div className={styles.midle}>
                                        <button onClick={() => goback(message.status)} className={styles.backbutton}>К заявкам</button> 
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
                <h2>Чат</h2>
                <div className={styles.chatConteiner}>
                    {message.chat.map((msg) => (
                        <div
                        key={`${message.id}-${msg.id}`}
                        className={`${styles.messageContainer} ${msg.sender === workername ? styles.userMessage : styles.otherMessage}`}
                        >
                        <strong>{msg.sender}</strong><br /> {msg.message}
                        </div>
                        ))}
                </div>
                <div className={styles.sendMessageContainer}>
                    <input type="Text" placeholder="Введите сообщение" className={styles.sendMessageInput}></input>
                    <button className={styles.sendMessageButton}>
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