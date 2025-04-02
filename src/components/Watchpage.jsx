import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Watchpage.css';

import Siteheader from './Siteheader.jsx';
import hammer from './assets/hammer.svg';
import computer from './assets/binary.svg';
import zap from './assets/zap-off.svg';
import cable from './assets/cable.svg';

const Watchpage = ({goToAplication}) => {
  const messages = [
    {
        id: 1,
        shortpage: "Вышел из строя рабочий компьютер",
        text: "Привет!",
        sender: "Иван",
        location: "Цех 1",
        type: "Поломка оборудования",
        status: "Не выполнена",
        chat: [
            { sender: "Иван", text: "Компьютер не включается", timestamp: 1 },
            { sender: "Техподдержка", text: "Вы пробовали перезагрузить?", timestamp: 2 },
            { sender: "Иван", text: "Да, но не помогает", timestamp: 3 },
        ],
    },
    {
        id: 2,
        shortpage: "Проблемы с интернетом",
        text: "Интернет не работает!",
        sender: "Петр",
        location: "Офис 3",
        type: "Сетевые проблемы",
        status: "Не выполнена",
        chat: [
            { sender: "Петр", text: "Нет соединения с Wi-Fi", timestamp: 1 },
            { sender: "Техподдержка", text: "Выключите и включите роутер", timestamp: 2 },
        ],
    },
    {
        id: 3,
        shortpage: "Принтер не печатает",
        text: "Не выходит печать",
        sender: "Анна",
        location: "Отдел кадров",
        type: "Неисправность принтера",
        status: "Не выполнена",
        chat: [
            { sender: "Анна", text: "Принтер зажевывает бумагу", timestamp: 1 },
            { sender: "Техподдержка", text: "Почистите ролики подачи бумаги", timestamp: 2 },
        ],
    },
    {
        id: 4,
        shortpage: "Не работает кондиционер",
        text: "Кондиционер не охлаждает",
        sender: "Мария",
        location: "Конференц-зал",
        type: "Поломка техники",
        status: "Не Выполнена",
        chat: [
            { sender: "Мария", text: "Кондиционер дует теплым воздухом", timestamp: 1 },
            { sender: "Техподдержка", text: "Заправили фреоном", timestamp: 2 },
        ],
    },
    {
        id: 5,
        shortpage: "Не работает проектор",
        text: "Экран не включается",
        sender: "Алексей",
        location: "Переговорная 2",
        type: "Поломка оборудования",
        status: "Не выполнена",
        chat: [
            { sender: "Алексей", text: "Проектор не включается", timestamp: 1 },
            { sender: "Техподдержка", text: "Проверьте кабели", timestamp: 2 },
        ],
    },
    {
        id: 6,
        shortpage: "Сломалась кофемашина",
        text: "Кофе не наливается",
        sender: "Сергей",
        location: "Кухня",
        type: "Поломка оборудования",
        status: "Не выполнена",
        chat: [
            { sender: "Сергей", text: "Кофемашина не подает воду", timestamp: 1 },
            { sender: "Техподдержка", text: "Попробуйте почистить фильтр", timestamp: 2 },
        ],
    },
    {
        id: 7,
        shortpage: "Не включается монитор",
        text: "Монитор не подает признаков жизни",
        sender: "Виктор",
        location: "Рабочее место 5",
        type: "Неисправность монитора",
        status: "Не выполнена",
        chat: [
            { sender: "Виктор", text: "Монитор черный", timestamp: 1 },
            { sender: "Техподдержка", text: "Заменили кабель питания", timestamp: 2 },
        ],
    },
    {
        id: 8,
        shortpage: "Компьютер перегревается",
        text: "Очень сильно шумит и греется",
        sender: "Елена",
        location: "Отдел бухгалтерии",
        type: "Перегрев системы",
        status: "Не выполнена",
        chat: [
            { sender: "Елена", text: "Компьютер выключается сам", timestamp: 1 },
            { sender: "Техподдержка", text: "Почистите от пыли и замените термопасту", timestamp: 2 },
        ],
    },
    {
        id: 9,
        shortpage: "Не работают динамики",
        text: "Нет звука на компьютере",
        sender: "Олег",
        location: "Лаборатория",
        type: "Проблемы со звуком",
        status: "Не выполнена",
        chat: [
            { sender: "Олег", text: "Звук пропал", timestamp: 1 },
            { sender: "Техподдержка", text: "Обновили драйверы", timestamp: 2 },
        ],
    },
    {
        id: 10,
        shortpage: "Мышь перестала работать",
        text: "Не двигается курсор",
        sender: "Дмитрий",
        location: "Отдел разработки",
        type: "Неисправность периферии",
        status: "Не выполнена",
        chat: [
            { sender: "Дмитрий", text: "Мышка не реагирует", timestamp: 1 },
            { sender: "Техподдержка", text: "Попробуйте заменить батарейки или подключить другой порт", timestamp: 2 },
        ],
    }
];
    return (
        <div className='wpage'>
            <div className="cab">
              <span className="hText">Просмотр активных заявок</span>
              <div className='side'>
                <span className='shText'>Фильтр</span>
                <span className='shtText'>По поломке</span>
                  <div>
                    <picture>
                      <img src={hammer} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className='scheck'></input>
                      <span className='sText'>Ошибка в работе программы/системы</span>
                  </div>
                  <div>
                      <picture>
                      <img src={computer} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className='scheck'></input>
                      <span className='sText'>Поломка компьютерного оборудования</span>
                  </div>
                  <div>
                      <picture>
                      <img src={zap} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className='scheck'></input>
                      <span className='sText'>Перепад электроэнергии</span>
                  </div>
                  <div>
                      <picture>
                      <img src={cable} height="25px" width="25px"/>
                      </picture>
                      <input type="checkbox" className='scheck'></input>
                      <span className='sText'>Поломка рабочего компьютера</span>
                  </div>
              </div>
            </div>
            <div className="wconteiner"> 
                {messages.length === 0 ? (
                   <div className="nomessages">
                    Ошибка: заявок нет
                  </div>
                ) :
                messages
                .filter(msg => msg.status === "Не выполнена")
                .map((msg, index) => (
                    <div key={index} className="message">
                        <div className='wShortPage'>
                        <h3 className="wShortPageText">{msg.shortpage}</h3>
                        </div>
                        <div className='lists'>
                        <span className="wType">Тип поломки: {msg.type} </span> <br/>
                        <span className="wtLocation">Место проишествия: {msg.location} </span>
                        </div>
                        <div className='wsender'>
                        <p><strong>Отправитель: {msg.sender}</strong></p>
                        </div>
                        <div className='wgo'>
                        <button className="goToApplication" onClick = {() => goToAplication(msg.id)}>Перейти к заявке</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Watchpage;
