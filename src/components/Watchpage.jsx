import React, { useState, useEffect } from 'react';
import './Watchpage.css';

import Siteheader from './Siteheader.jsx';
import Spacecomponent from './Spacecomponent.jsx';

const Watchpage = ({ text, navigate }) => {
    const [messages, setMessages] = useState([
        { shortpage: "ВАЗАААААААП", text: "Привет!", sender: "Alice" },
        { shortpage: "ЧУВААААААААК", text: "Hello!", sender: "Vanya" },  // позже замена на сообщения с сервера
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
                <button className="return" onClick={goback}>X</button>
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        <h3 className="shortpage">{msg.shortpage}</h3>
                        <p className="text"><strong>{msg.sender}</strong></p>
                        <span className="text">{msg.text} </span>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Watchpage;
