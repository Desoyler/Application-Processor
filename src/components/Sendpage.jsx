import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import styles from './Sendpage.module.css';
import classNames from 'classnames';
import Siteheader from './Siteheader.jsx';

const Sendpage = ({workername, text, setText, shorttext, setshorttext, image, setImage, Sender, setSender,status, setStatus, messages}) =>
    {

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
        <div className={styles.cab}>
            <span className={styles.hText}>Отправка технической заявки</span>
        </div>
        <div className={styles.sconteiner}>
            <div className={styles.shortconteiner}>
                <span className={styles.ssText}>Опишите кратко проблему</span><br/>
                <input type="text" className = {classNames(styles.shortTextInput, styles.bottomborder)} id="shortTextInput"  onChange={handleshortTextChange} ></input>
            </div>
            <div className={styles.bigtextconteiner}>
                <span className={styles.ssText}>Опишите вашу проблему детально в поле ниже:</span><br/>
                <textarea className={styles.sbigText} id="bigText" rows="10" cols="50" onChange={handleTextChange} ></textarea>
            </div>
            <div className={classNames(styles.shortconteiner, styles.scheight)}>
                <select className={classNames(styles.list, styles.bottomborder)} id="Location" defaultValue="">
                    <option value=""  disabled hidden>Выбирите место где произошла поломка</option>
                    <option value="1">Цех 1</option>
                    <option value="2">Цех 2</option>
                    <option value="3">Цех 3</option>
                    <option value="4">Цех 4</option>
                </select>
            </div>
            <div className={classNames(styles.shortconteiner, styles.scheight)}>
                <select className={classNames(styles.list, styles.bottomborder)} id="problemType " defaultValue="">
                    <option value="" disabled hidden>Выбирите тип поломки</option>
                    <option value="1">Поломка компьютерного оборудования</option>
                    <option value="2">Перебои электроэнергии</option>
                    <option value="3">Поломка рабочего оборудования</option>
                </select>
            </div>
            <div className={styles.shortconteiner}>
            </div>
            <div className={styles.shortconteiner}>
            <button className={styles.ssendbutton} onClick={handleSubmit}><span className={styles.ssendbuttonText}>Отправить</span></button>
            </div>
        </div>
        </div>
    );
};

export default Sendpage;