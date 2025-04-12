import React, { useState, useEffect } from 'react';

import styles from './Sendpage.module.css';
import classNames from 'classnames';

const Sendpage = ({setText, setshorttext, setStatus, }) =>
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

    

    const handleSubmit = (event) =>
    {
        setStatus('Не выполнена') // в базе данных отправить notcomplited для дальнейшей логики
        //тут должна быть отправка данных на сервер
    };

    return(
        <div>
        <div className={styles.zero}>
            <span className={styles.zeroHText}>Отправка технической заявки</span>
        </div>
        <div className={styles.conteiner}>
            <div className={styles.smallConteiner}>
                <span className={styles.Text}>Опишите кратко проблему</span><br/>
                <input type="text" className = {classNames(styles.shortTextInput, styles.bottomBorder)} id="shortTextInput"  onChange={handleshortTextChange} ></input>
            </div>
            <div className={styles.bigTextConteiner}>
                <span className={styles.Text}>Опишите вашу проблему детально в поле ниже:</span><br/>
                <textarea className={styles.bigText} id="bigText" rows="10" cols="50" onChange={handleTextChange} ></textarea>
            </div>
            <div className={classNames(styles.smallConteiner, styles.height)}>
                <select className={classNames(styles.list, styles.bottomborder)} id="Location" defaultValue="">
                    <option value=""  disabled hidden>Выбирите место где произошла поломка</option>
                    <option value="1">Цех 1</option>
                    <option value="2">Цех 2</option>
                    <option value="3">Цех 3</option>
                    <option value="4">Цех 4</option>
                </select>
            </div>
            <div className={classNames(styles.smallConteiner, styles.height)}>
                <select className={classNames(styles.list, styles.bottomBorder)} id="problemType " defaultValue="">
                    <option value="" disabled hidden>Выбирите тип поломки</option>
                    <option value="1">Поломка компьютерного оборудования</option>
                    <option value="2">Перебои электроэнергии</option>
                    <option value="3">Поломка рабочего оборудования</option>
                </select>
            </div>
            <div className={styles.smallConteiner}>
            <button className={styles.sendbutton} onClick={handleSubmit}><span className={styles.sendButtonText}>Отправить</span></button>
            </div>
        </div>
        </div>
    );
};

export default Sendpage;