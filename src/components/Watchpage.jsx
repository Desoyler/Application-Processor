import React, { useState, useEffect } from 'react';
import './Watchpage.css';

import Siteheader from './Siteheader.jsx';

const Watchpage = ({goToAplication, goToCabinet}) => {
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
          status: "Не выполнена",
          chat: [
            { sender: "Alice", text: "Когда сможете починить?", timestamp: 1 },
            { sender: "Техподдержка", text: "Завтра утром", timestamp: 2 },
          ],
        },
    ];

    return (
        <div>
            <Siteheader />
    
            <div className="wconteiner"> 
                <h2>Список активных заявок</h2>
                <button className="wreturn" onClick={goToCabinet}>X</button>
                {messages
                .filter(msg => msg.status === "Не выполнена")
                .map((msg, index) => (
                    <div key={index} className="message">
                        <h3 className="wshortpage">{msg.shortpage}</h3>
                        <span className="wType">{msg.type} </span>
                        <span className="wtLocation">{msg.location} </span>
                        <p className="wsender"><strong>{msg.sender}</strong></p>
                        <button className="wgo" onClick = {() => goToAplication(msg.id)}>Перейти к заявке</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Watchpage;
