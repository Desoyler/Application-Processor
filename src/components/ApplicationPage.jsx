import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Applicationpage.css';

import Siteheader from './Siteheader.jsx';

const ApplicationPage = ({workername, goback}) => {
    const { id } = useParams(); // Получаем параметр id из URL
    const navigate = useNavigate(); 

    const [message, setMessage] = useState(null);
    
    useEffect(() => {
        
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

    if (!message) {
        return <div>Загрузка...</div>; // Показать загрузку, пока сообщение не будет найдено
    }

    return (
        <div>
            <Siteheader />
            <div className='bigContainer'>
                <div className='acontainer'>
                    <h2>Заявка {message.id}</h2>
                    <p><strong>Краткое описание:</strong> {message.shortpage}</p>
                    <p><strong>Текст:</strong> {message.text}</p>
                    <p><strong>Отправитель:</strong> {message.sender}</p>
                    <p><strong>Местоположение:</strong> {message.location}</p>
                    <p><strong>Тип:</strong> {message.type}</p>
                    <p><strong>Статус:</strong> {message.status}</p>
                    <button onClick={goback}>Назад</button> 
                </div>
                <div className='bcontainer'>
                    <h2>Чат</h2>
                    <div className="chatcontainer">
                        {message.chat.map((msg, index) => (
                            <div 
                                key={index} 
                                className={`message-container ${msg.sender === workername ? "user-message" : "other-message"}`}
                            >
                                <strong>{msg.sender}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className='sendFooter'>
                        <input type="Text" placeholder="Введите сообщение" className="aText"></input>
                        <button className='aSend'>Отправить</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default ApplicationPage;
