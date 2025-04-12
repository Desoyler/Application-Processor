import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Applicationpage.module.css';
import classNames from 'classnames';

const ApplicationPage = ({ messages, goToChat, goback, goToEnd }) => {
  const { id } = useParams(); // Получаем параметр id из URL
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Ищем сообщение по id
    const foundMessage = messages.find(msg => msg.id === parseInt(id));
    setMessage(foundMessage);
  }, [id, messages]); // Добавляем messages, чтобы обновить, когда изменяется список сообщений

  // Проверка, чтобы не пытаться использовать message, пока оно не загружено
  if (!message) {
    return <div>Загрузка...</div>; // пока сообщение не будет найдено
  }

  return (
    <div>
      <div>
        <div className={styles.zero}>
          <span className={styles.zeroHText}>Общая информация о заявке</span>
          <div className={styles.side}>
            <span className={styles.sideHText}>Управление заявкой</span><br />
            <span className={classNames(styles.sideText, styles.activeText)}>Общая информация</span><br />
            <span className={styles.sideText} onClick={() => goToChat(message.id)}>Чат</span><br />
            <span className={styles.sideText} onClick={() => goToEnd(message.id)} >Отчет</span><br />
            <div className={styles.midle}>
              <button onClick={() => goback(message.status)} className={styles.backbutton}>К заявкам</button>
            </div>
          </div>
          <div className={styles.leftApplicationText}>
            <span className={styles.boldText}>От: </span><span className={styles.ApplicationText}>{message.sender}</span><br />
            <span className={styles.boldText}>Местоположение:</span> <span className={styles.ApplicationText}>{message.location}</span><br />
            <span className={styles.boldText}>Тип:</span> <span className={styles.ApplicationText}>{message.type}</span><br />
            <span className={styles.boldText}>Статус:</span> <span className={styles.ApplicationText}>{message.status}</span><br />
          </div>
          <div className={classNames(styles.blockText, styles.rightApplicationText)}>
            <span className={styles.ApplicationNumber}>Заявка {message.id}</span>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={classNames(styles.shortText, styles.midle)}>
          <span>{message.shortpage}</span>
        </div>
        <div className={classNames(styles.problemText)}>
          <span className={styles.ApplicationText}>{message.text}</span>
        </div>
        <div className={styles.midle}>
          <hr className={styles.hr}></hr>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
