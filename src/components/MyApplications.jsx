import React, { useState, useEffect } from 'react';
import styles from './Watchpage.module.css';

const MyApplications = ({goToApplication , messages, workername }) => {
    const [selectedTypes, setSelectedTypes] = useState([]);

    const handleCheckboxChange = (typeText) => {
        setSelectedTypes(prev =>
        prev.includes(typeText)
            ? prev.filter(t => t !== typeText)
            : [...prev, typeText]
        );
    };

    const filteredMessages = messages
        .filter(msg => msg.status === "В процессе выполнения")
        .filter(msg =>selectedTypes.length === 0 || selectedTypes.includes(msg.type)
    );

    useEffect(() => {
        console.log("Messages:", messages);
        console.log("Filtered (in progress):", messages.filter(msg => msg.status === "В процессе выполнения"));
        console.log("workername:", workername);
      }, [messages, workername]);

    return (
        <div className={styles.watchPage}>
            <div className={styles.zero}>
              <span className={styles.zeroHText}>Просмотр активных заявок</span>
            </div>
            <div className={styles.conteiner}> 
                {filteredMessages.length === 0 ? (
                   <div className={styles.noApplications}>
                    Ошибка: заявок нет
                  </div>
                ) :
                filteredMessages
                .filter(msg => msg.sender === workername)
                .map((msg, index) => (
                    <div key={index} className={styles.applicationConteiner}>
                        <div className={styles.shortTextConteiner}>
                        <h3 className={styles.shortText}>{msg.shortpage}</h3>
                        </div>
                        <div className={styles.mainContainer}>
                        <span>Тип поломки: {msg.type} </span> <br/>
                        <span>Место проишествия: {msg.location} </span>
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

export default MyApplications;