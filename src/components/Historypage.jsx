import React , {useState}from 'react';
import { useNavigate } from "react-router-dom";
import './Historypage.css';

import Siteheader from './Siteheader.jsx';



const Historypage = ({}) =>{

    const navigate = useNavigate();

    const [messages, setMessages] = useState([
            { id: 1, shortpage: "Вышел из строя рабочий компьютер", text: "Привет!", sender: "Иван", location: "Цех 1", type: "Поломка оборудования", status: "Выполнена" },
            { id: 2, shortpage: "ВАЗАААААААП", text: "Привет!", sender: "Alice", location: "Цех 1", type: "Поломка оборудования", status:"Не выполнена" },
            { id: 3, shortpage: "ВАЗАААААААП", text: "Привет!", sender: "Alice", location: "Цех 1", type: "Поломка оборудования", status:"Не выполнена" },
            { id: 4, shortpage: "ВАЗАААААААП", text: "Привет!", sender: "Alice", location: "Цех 1", type: "Поломка оборудования", status:"Не выполнена" },
            { id: 5, shortpage: "ВАЗАААААААП", text: "Привет!", sender: "Alice", location: "Цех 1", type: "Поломка оборудования", status:"Не выполнена" },
        ]);

        const goback = () => {
            navigate("/cabinet");
        };

    return(
        <div>
            <Siteheader />
            
        <div className="hconteiner">
            <span>Просмотр истории заявок</span>
            <button className="hreturn" onClick={goback}>X</button>
            {messages
            .filter(msg => msg.status === "Выполнена")
            .map((msg, index) => (
                <div key={index} className="message">
                    <h3 className ="wshortpage">{msg.shortpage}</h3>
                    <span className="wType">{msg.type}</span>
                    <span className="wLocation">{msg.location}</span>
                    <span className="wsender">{msg.sender}</span>
                    <span className="wstatus">{msg.status}</span>
                    <button className="wgo">Перейти к заявке</button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Historypage;