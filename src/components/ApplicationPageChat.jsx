import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Applicationpage.module.css';

import Siteheader from './Siteheader.jsx';
import arrow from './assets/arrow-big-right.svg';
import classNames from 'classnames';

const ApplicationPageChat = ({workername}) => {
    const { id } = useParams(); // Получаем параметр id из URL
    const navigate = useNavigate(); 


    const [message, setMessage] = useState(null);
    
    useEffect(() => {
        
        const messages = [
            {
              id: 1,
              shortpage: "Вышел из строя рабочий компьютер",
              text: "Мой компьютер неожиданно перестал включаться после очередного рабочего дня. При нажатии на кнопку питания не загораются индикаторы, и вентиляторы не издают никаких звуков. Я проверил кабель питания и подключение к розетке, но это не дало никакого результата. Пробовал заменить блок питания, но ситуация осталась прежней. Возможно, проблема связана с материнской платой или перегревом процессора, который мог повредить ключевые компоненты. За день до поломки компьютер начал сильно тормозить и зависать, что могло быть первым сигналом неисправности. Теперь без профессиональной диагностики точно не разобраться, так что придется обращаться в сервисный центр.",
              sender: "Иван Иванов Иванович",
              location: "Цех 1",
              type: "Поломка оборудования",
              status: "Выполнена",
              chat: [
                { sender: "Иван Иванов Иванович", text: "Компьютер не включаетсявыфвфывфывфывфывфывфывфывфы", timestamp: 1 },
                { sender: "Техподдержка", text: "Вы пробовали перезагрузить?", timestamp: 2 },
                { sender: "Иван Иванов Иванович", text: "Да, но не помогает", timestamp: 3 },
                { sender: "Иван Иванов Иванович", text: "Да, но не помогает", timestamp: 4 },
                { sender: "Иван Иванов Иванович", text: "Да, но не помогает", timestamp: 5 },
                { sender: "Иван Иванов Иванович", text: "Да, но не помогает", timestamp: 6 },
                { sender: "Иван Иванов Иванович", text: "Да, но не помогает", timestamp: 7 },
                { sender: "Иван Иванов Иванович", text: "Да, но не помогает", timestamp: 8 },
              ],
            },
            {
              id: 2,
              shortpage: "ВАЗАААААААП",
              text: "Привет!",
              sender: "Иван Иванов Иванович",
              location: "Цех 1",
              type: "Поломка оборудования",
              status: "Не выполнена",
              chat: [
                { sender: "Иван Иванов Иванович", text: "Когда сможете починить?", timestamp: 1 },
                { sender: "Техподдержка", text: "Завтра утром", timestamp: 2 },
              ],
            },
        ];

        const foundMessage = messages.find(msg => msg.id === parseInt(id)); // Ищем сообщение по id
        setMessage(foundMessage);
    }, [id]); // Каждый раз когда id меняется
    const goToEnd = (id) => {
        navigate(`/watch/${message.id}/end`);
      };
      const goback = () => {
    if(message.status === "Выполнена")
    {
        navigate("/history")
    }
    else
    {
        navigate("/watch")
    }
    };
    if (!message) {
        return <div>Загрузка...</div>; // пока сообщение не будет найдено
    }
    const goToApplication = () => {
        navigate(`/watch/${message.id}`);
    };
    return (
        <div>
            <div>
                <div className={styles.cab}>
                    <span className={styles.hText}>Чат с отправителем</span>
                    <div className={styles.side}>
                                    <span className={styles.sTextH}>Управление заявкой</span><br/>
                                    <span className={styles.sText} onClick={goToApplication}>Общая информация</span><br/>
                                    <span className={classNames(styles.sText, styles.activesText)} >Чат</span><br/>
                                    <span className={styles.sText} onClick={() => goToEnd(message.id)} >Вывод</span><br/>
                                    <div className={classNames(styles.goback, styles.midle)}>
                                        <button onClick={goback} className={styles.backbutton}>К заявкам</button> 
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
                    {message.chat.map((msg, index) => (
                        <div 
                            key={index} 
                            className={`${styles.messageContainer} ${msg.sender === workername ? styles.usermessage : styles.othermessage}`}
                        >
                            <strong>{msg.sender}</strong><br/> {msg.text}
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