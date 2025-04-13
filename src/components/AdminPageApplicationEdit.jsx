import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styles from './AdminPage.module.css';

import check from './assets/badge-alert.svg';
import x from './assets/badge-x.svg';
import done from './assets/badge-check.svg';
import percent from "./assets/percent.svg"
import classNames from 'classnames';

const AdminPageApplicationEdit = ({ goToAdminAplication,  goToUsers, messages }) =>{
    const { id } = useParams(); // достаем id из URL
    const user = messages.find(message => String(message.id) === String(id)); // переводим в стринг иначе не найдет пользователя


    if (!user) {
        return <div>Пользователь не найден</div>;
      }
return(
    <div>
        <div className={styles.zero}>
            <span className={styles.zeroHText}>Изменение данных заявки</span>
                <div className={styles.side}>
                    <span className={styles.sideHText}>Возможности администратора</span><br/>
                    <span className={styles.sideText} onClick={goToUsers}>Работа с данными пользователей</span><br/>
                    <span className={styles.sideText} onClick={goToAdminAplication}>Работа с заявками</span><br/>
                </div>   
        </div>
        <div className={classNames(styles.conteiner)}>
            <div className={classNames(styles.statusBigConteiner, styles.midle )}>
                <span className={styles.applicationPageEditText}>Изменить тип заявки</span><br/>
                <select className={classNames(styles.list , styles.bottomBorder)} id="problemType " defaultValue="">
                    <option value="" disabled hidden>Изменить тип поломки</option>
                    <option value="1">Поломка компьютерного оборудования</option>
                    <option value="2">Перебои электроэнергии</option>
                    <option value="3">Поломка рабочего оборудования</option>
                </select>
            </div>
            <div className={classNames(styles.statusBigConteiner , styles.midle)}>
                <span className={styles.applicationPageEditText}>Изменить место проишествия</span><br/>
                <select className={classNames(styles.list , styles.bottomBorder)} id="problemType " defaultValue="">
                    <option value="" disabled hidden>Изменить место проишествия</option>
                    <option value="1">Цех 1</option>
                    <option value="2">Цех 2</option>
                    <option value="3">Цех 3</option>
                    <option value="4">Цех 4</option>
                </select> 
            </div>
            <div className={classNames(styles.statusBigConteiner , styles.midle)}>
            <span className={styles.applicationPageEditText}>Изменить статус заявки</span><br/>
                <div className={styles.checkBoxBigContainer}>
                    <div className={styles.checkBoxContainer}>
                        <picture className={styles.coutImage}>
                        <img src={done} height="25px" width="25px"/>
                        </picture>
                        <input type="checkbox"></input>
                        <span className={styles.coutText}>Выполненна</span>
                    </div>
                    <div className={styles.checkBoxContainer}>
                        <picture className={styles.coutImage}>
                        <img src={check} height="25px" width="25px"/>
                        </picture>
                        <input type="checkbox"></input>
                        <span className={styles.coutText}>Доп.решение</span>
                    </div>
                    <div className={styles.checkBoxContainer}>
                        <picture className={styles.coutImage}>
                        <img src={x} height="25px" width="25px"/>
                        </picture>
                        <input type="checkbox"></input>
                        <span className={styles.coutText}>Не выполненна</span>
                    </div>
                    <div className={styles.checkBoxContainer}>
                        <picture className={styles.coutImage}>
                        <img src={percent} height="25px" width="25px"/>
                        </picture>
                        <input type="checkbox"></input>
                        <span className={styles.coutText}>В проц.выполнения</span>
                    </div>
                </div>
            </div>
            <div className={classNames(styles.buttonsContainer , styles.sectionConteiner , styles.buttonsContainerGap)}>  
                <button className={styles.bottomButtons}>Удалить заявку</button>
                <button className={styles.bottomButtons}>Изменить</button>
            </div>
        </div>
    </div>
);
};

export default AdminPageApplicationEdit;