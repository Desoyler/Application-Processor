import React, { useState, useEffect } from 'react';
import './Sendpage.css';

import Siteheader from './Siteheader.jsx';
import Spacecomponent from './Spacecomponent.jsx';

const Sendpage = ({navigate, workername, text, setText, shorttext, setshorttext, image, setImage, Sender, setSender,status, setStatus}) =>
    {
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
        setStatus('Не выполнена')
        //тут должна быть отправка данных на сервер
    };

    return(
        <div>
        <Siteheader />
        <Spacecomponent />
        <div className="sconteiner">
            <span className='sh'>Отправить заявку</span>
            <button className="return" onClick={goback} >X</button>
            <span className='sText firstText'>Опишите кратко проблему</span>
            <input type="text" id="shortTextInput"  onChange={handleshortTextChange} ></input>
            <span className='sText Text'>Опишите вашу проблему детально в поле ниже:</span>
            <textarea id="bigText" name="bigText" rows="10" cols="50" onChange={handleTextChange} ></textarea>
            <span className='sText lastText'>Отправьте изображение при необходимости:</span>
            <input type="file" className="imageUpload" id="imageUpload" name="image" accept="image/*" onChange={handleImageChange} />
            <button className="ssend" onClick={handleSubmit}>Отправить</button>
        </div>
        </div>
    );
};

export default Sendpage;