import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Sendpage.css';

import Siteheader from './Siteheader.jsx';

const Sendpage = ({workername, text, setText, shorttext, setshorttext, image, setImage, Sender, setSender,status, setStatus}) =>
    {

    const navigate = useNavigate();

    const goback = () => 
    {
        navigate("/cabinet");
    };

    const handleTextChange = (event) =>
    {
        const element = document.getElementById("bigText"); 
        setText(element.value); 
    };

    const handleshortTextChange = (event) =>
    {
        const element = document.getElementById("shortTextInput"); 
        setshorttext(element.value); 
    };

    const handleImageChange = (event) =>
    {
        const file = event.target.files[0]; 
        if (file) 
        {
        setImage(file); 
        };
    }

    const handleSubmit = (event) =>
    {
        setStatus('Не выполнена') // в базе данных отправить notcomplited для дальнейшей логики
        //тут должна быть отправка данных на сервер
    };

    return(
        <div>
        <Siteheader />
        
        <div className="sconteiner">
            <span className='sh'>Отправить заявку</span>
            <button className="sreturn" onClick={goback} >X</button>
            <span className='sText firstText'>Опишите кратко проблему</span>
            <input type="text" id="shortTextInput"  onChange={handleshortTextChange} ></input>
            <span className='sText Text'>Опишите вашу проблему детально в поле ниже:</span>
            <textarea id="bigText" name="bigText" rows="10" cols="50" onChange={handleTextChange} ></textarea>
            <select className="list" id="Location" defaultValue="">
                <option value=""  disabled hidden>Выбирите место где произошла поломка</option>
                <option value="1">Цех 1</option>
                <option value="2">Цех 2</option>
                <option value="3">Цех 3</option>
                <option value="4">Цех 4</option>
            </select>
            <select className="list" id="problemType" defaultValue="">
                <option value="" disabled hidden>Выбирите тип поломки</option>
                <option value="1">Поломка компьютерного оборудования</option>
                <option value="2">Перебои электроэнергии</option>
                <option value="3">Поломка рабочего оборудования</option>
            </select>
            <span className='sText lastText'>Отправьте изображение при необходимости:</span>
            <input type="file" className="imageUpload" id="imageUpload" name="image" accept="image/*" onChange={handleImageChange} />
            <button className="ssend" onClick={handleSubmit}>Отправить</button>
        </div>
        </div>
    );
};

export default Sendpage;