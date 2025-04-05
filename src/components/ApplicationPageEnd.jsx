import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Applicationpage.css';

import Siteheader from './Siteheader.jsx';
import check from './assets/badge-alert.svg';
import x from './assets/badge-x.svg';
import done from './assets/badge-check.svg';

const ApplicationPageEnd = ({}) => {
    const { id } = useParams(); // Получаем параметр id из URL
    const navigate = useNavigate(); 

    const [message, setMessage] = useState(null);
    
    useEffect(() => {
        
        const messages = [
            {
              id: 1,
              shortpage: "Вышел из строя рабочий компьютер",
              text: "Мой компьютер неожиданно перестал включаться после очередного рабочего дня. При нажатии на кнопку питания не загораются индикаторы, и вентиляторы не издают никаких звуков. Я проверил кабель питания и подключение к розетке, но это не дало никакого результата. Пробовал заменить блок питания, но ситуация осталась прежней. Возможно, проблема связана с материнской платой или перегревом процессора, который мог повредить ключевые компоненты. За день до поломки компьютер начал сильно тормозить и зависать, что могло быть первым сигналом неисправности. Теперь без профессиональной диагностики точно не разобраться, так что придется обращаться в сервисный центр.",
              sender: "Иван Иванов Иванович",
              location: "Цех 1",
              type: "Поломка оборудования",
              status: "Выполнена",
              chat: [
                { sender: "Иван Иванов Иванович", text: "Компьютер не включается", timestamp: 1 },
                { sender: "Техподдержка", text: "Вы пробовали перезагрузить?", timestamp: 2 },
                { sender: "Иван Иванов Иванович", text: "Да, но не помогает", timestamp: 3 },
                { sender: "Иван Иванов Иванович", text: "Да, но не помогает", timestamp: 4 },
                { sender: "Иван Иванов Иванович", text: "Да, но не помогает", timestamp: 5 },
                { sender: "Иван Иванов Иванович", text: "Да, но не помогает", timestamp: 6 },
                { sender: "Иван Иванов Иванович", text: "Да, но не помогает", timestamp: 7 },
                { sender: "Иван Иванов Иванович", text: "Да, но не помогает", timestamp: 8 },
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
    const goToEnd = (id) => {
        navigate(`/watch/${message.id}/end`);
      };
    const goback = () => {
        if(message.status === "Выполнена")
        {
            navigate("/history")
        }
        else
        {
            navigate("/watch")
        }
    };
    if (!message) {
        return <div>Загрузка...</div>; // пока сообщение не будет найдено
    }
    const goToChat = (id) => {
        navigate(`/watch/${message.id}/chat`);
      };
    const goToApplication = () => {
        navigate(`/watch/${message.id}`);
    };
    return (
        <div>
            <div>
                <div className="cab">
                    <span className="hText">Отсчет о проделанной работе</span>
                    <div className="side">
                                    <span className="sTextH">Управление заявкой</span><br/>
                                    <span className="sText" onClick={goToApplication}>Общая информация</span><br/>
                                    <span className="sText" onClick={() => goToChat(message.id)} >Чат</span><br/>
                                    <span className="sText activesText" >Вывод</span><br/>
                                    <div className='goback midle'>
                                        <button onClick={goback} className='backbutton'>К заявкам</button> 
                                    </div>
                    </div>
                    <div className='left'>
                        <span className='boldText'>От: </span><span className='ApplecationText'>{message.sender}</span><br/>
                        <span className='boldText'>Местоположение:</span> <span className='ApplecationText'>{message.location}</span><br/>
                        <span className='boldText'>Тип:</span> <span className='ApplecationText'>{message.type}</span><br/>
                        <span className='boldText'>Статус:</span> <span className='ApplecationText'>{message.status}</span><br/>
                    </div>
                    <div class="haText right">
                        <span className="Applicationh">Заявка {message.id}</span>
                    </div>
                </div>
            </div>
            <div className='bigContainer'>
                <div className='shorttext midle'>
                     <span>{message.shortpage}</span>
                </div>
                <div className='problemtextend midle'>
                    <span className='shortendtext'>Сделайте отсчет о проделанной работе в поле ниже:</span><br/>
                    <textarea className="endBigText" id="bigText" placeholder="Напишите отсчет в этом поле"  rows="10" cols="50"  ></textarea>
                    <span className='boldText'>Статус заявки:</span>
                    <div className='EndSolution'>
                        <div >
                            <picture className='endimg'>
                            <img src={done} height="25px" width="25px"/>
                            </picture>
                            <input type="checkbox" className="check"></input>
                            <span className="boldText">Выполненна</span>
                        </div>
                        <div>
                            <picture className='endimg'>
                            <img src={check} height="25px" width="25px"/>
                            </picture>
                            <input type="checkbox" className="check"></input>
                            <span className="boldText">Нужны дополнительные решения</span>
                        </div>
                        <div>
                            <picture className='endimg'>
                            <img src={x} height="25px" width="25px"/>
                            </picture>
                            <input type="checkbox" className="check"></input>
                            <span className="boldText">Не выполненна</span>
                        </div>
                    </div>
                    <button className='ssendbutton'>Отправить отсчет</button>
                </div>
            </div>
        </div>
    );
};

export default ApplicationPageEnd;