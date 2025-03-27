import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import './Watchpage.css';

import Siteheader from './Siteheader.jsx';
import Spacecomponent from './Spacecomponent.jsx';

const ApplicationPage = () => {
    const { id } = useParams(); // Получаем параметр id из URL
    const navigate = useNavigate(); 

    const [message, setMessage] = useState(null);

    useEffect(() => {
        
        const messages = [
            { id: 1, shortpage: "Вышел из строя рабочий компьютер", text: "Привет!", sender: "Иван", location: "Цех 1", type: "Поломка оборудования", status:"Выполнена" },
            { id: 2, shortpage: "ВАЗАААААААП", text: "Привет!", sender: "Alice", location: "Цех 1", type: "Поломка оборудования", status:"Не выполнена" },
            { id: 3, shortpage: "ВАЗАААААААП", text: "Привет!", sender: "Alice", location: "Цех 1", type: "Поломка оборудования", status:"Не выполнена" },
            { id: 4, shortpage: "ВАЗАААААААП", text: "Привет!", sender: "Alice", location: "Цех 1", type: "Поломка оборудования", status:"Не выполнена" },
            { id: 5, shortpage: "ВАЗАААААААП", text: "Привет!", sender: "Alice", location: "Цех 1", type: "Поломка оборудования", status:"Не выполнена" },
        ];

        const foundMessage = messages.find(msg => msg.id === parseInt(id)); // Ищем сообщение по id
        setMessage(foundMessage);
    }, [id]); // Каждый раз когда id меняется

    const goback = () => {
        navigate("/watch"); 
    };

    if (!message) {
        return <div>Загрузка...</div>; // Показать загрузку, пока сообщение не будет найдено
    }

    return (
        <div>
            <Siteheader />
            <Spacecomponent />
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
        </div>
    );
};

export default ApplicationPage;
