import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Applicationpage.module.css';
import classNames from 'classnames';

import Siteheader from './Siteheader.jsx';

const ApplicationPage = ({workername}) => {
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
    const goToChat = (id) => {
        navigate(`/watch/${message.id}/chat`);
      };

    return (
        <div>
            <div>
                <div className={styles.cab}>
                    <span className={styles.hText}>Общая информация о заявке</span>
                    <div className={styles.side}>
                                    <span className={styles.sTextH}>Управление заявкой</span><br/>
                                    <span className={classNames(styles.sText, styles.activesText)}>Общая информация</span><br/>
                                    <span className={styles.sText} onClick={() => goToChat(message.id)}>Чат</span><br/>
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
                <div className={classNames(styles.shorttext, styles.midle)}>
                     <span>{message.shortpage}</span>
                </div>
                <div className={classNames(styles.problemtext, styles.midle)}>
                    <span className={styles.ApplecationText}>{message.text}</span>
                </div>
                <div className={styles.midle}>
                    <hr className={styles.hr}></hr>
                </div>
            </div>
        </div>
    );
};

export default ApplicationPage;