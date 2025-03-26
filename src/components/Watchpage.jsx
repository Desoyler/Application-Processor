import React, { useState, useEffect } from 'react';
import './Watchpage.css';

import Siteheader from './Siteheader.jsx';
import Spacecomponent from './Spacecomponent.jsx';

const Watchpage = ({ text, navigate }) => {
    const [messages, setMessages] = useState([
        { id: 1, shortpage: "Вышел из строя рабочий компьютер", text: "Привет!", sender: "Иван", location: "Цех 1", type: "Поломка оборудования", status:"Выполнена" },
        { id: 2, shortpage: "ВАЗАААААААП", text: "Привет!", sender: "Alice", location: "Цех 1", type: "Поломка оборудования", status:"Не выполнена" },
        { id: 3, shortpage: "ВАЗАААААААП", text: "Привет!", sender: "Alice", location: "Цех 1", type: "Поломка оборудования", status:"Не выполнена" },
        { id: 4, shortpage: "ВАЗАААААААП", text: "Привет!", sender: "Alice", location: "Цех 1", type: "Поломка оборудования", status:"Не выполнена" },
        { id: 5, shortpage: "ВАЗАААААААП", text: "Привет!", sender: "Alice", location: "Цех 1", type: "Поломка оборудования", status:"Не выполнена" },
    ]);

    const goback = () => {
        navigate("/cabinet");
    };

    return (
        <div>
            <Siteheader />
            <Spacecomponent />
            <div className="wconteiner"> 
                <h2>Список активных заявок</h2>
                <button className="wreturn" onClick={goback}>X</button>
                {messages
                .filter(msg => msg.status === "Не выполнена")
                .map((msg, index) => (
                    <div key={index} className="message">
                        <h3 className="wshortpage">{msg.shortpage}</h3>
                        <span className="wType">{msg.type} </span>
                        <span className="wtLocation">{msg.location} </span>
                        <p className="wsender"><strong>{msg.sender}</strong></p>
                        <button className="wgo">Перейти к заявке</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Watchpage;
