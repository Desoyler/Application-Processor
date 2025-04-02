import React , {useState}from 'react';
import { useNavigate } from "react-router-dom";
import './Historypage.css';

import Siteheader from './Siteheader.jsx';



const Historypage = ({goToAplication}) =>{

    const navigate = useNavigate();

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

        const goback = () => {
            navigate("/cabinet");
        };

    return(
        <div>
            <div className="cab">
              <span className="hText">История заявок</span>
            </div>
        <div className="hconteiner">
            {messages
            .filter(msg => msg.status === "Выполнена")
            .map((msg, index) => (
                <div key={index} className="message">
                    <h3 className ="wshortpage">{msg.shortpage}</h3>
                    <span className="wType">{msg.type}</span>
                    <span className="wLocation">{msg.location}</span>
                    <span className="wsender">{msg.sender}</span>
                    <span className="wstatus">{msg.status}</span>
                    <button className="wgo" onClick={() => goToAplication(msg.id)}>Перейти к заявке</button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Historypage;