import React, { useState, useEffect } from 'react';
import styles from'./AdminPage.module.css';
import classNames from 'classnames';
import { useParams } from 'react-router-dom'

const AdminPageUserEdit = ({ goToUsers, goToAdminAplication, users}) =>{
    const { id } = useParams(); // достаем id из URL
    const user = users.find(user => String(user.id) === String(id)); // переводим в стринг иначе не найдет пользователя


    if (!user) {
        return <div>Пользователь не найден</div>;
      }
return(
    
    <div>
        <div className={styles.zero}>
            <span className={styles.zeroHText}>Изменение данных пользователя</span>
                <div className={styles.side}>
                    <span className={styles.sideHText}>Возможности администратора</span><br/>
                    <span className={styles.sideText} onClick={goToUsers}>Работа с данными пользователей</span><br/>
                    <span className={styles.sideText} onClick={goToAdminAplication}>Работа с заявками</span><br/>
                </div>
        </div>
        <div className={styles.conteiner}>
            <div className={classNames(styles.bigConteiner , styles.sectionConteiner)}>
                <div className={classNames(styles.smallTextConteiner, styles.midle)}>
                    <span className={styles.sectionText}>Данные рабочего акаунта </span>
                </div>
            </div>
            <div className={styles.bigConteiner}>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите логин пользователя</span><br/>
                    <input placeholder='Логин' className={styles.userInput} value={user.username}></input>
                </div>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите пароль пользователя</span><br/>
                    <input placeholder='Пароль' className={styles.userInput} value={user.password}></input>
                </div>
            </div>
            <div className={classNames(styles.bigConteiner , styles.sectionConteiner)}>
                <div className={classNames(styles.smallTextConteiner , styles.midle)}>
                    <span className={styles.sectionText}>Введите личные данные пользователя</span>
                </div>
            </div>
            <div className={styles.bigConteiner}>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите имя</span><br/>
                    <input placeholder='Имя' className={styles.userInput} value={user.firstName}></input>
                </div>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите отчество</span><br/>
                    <input placeholder='Отчество' className={styles.userInput} value={user.middleName}></input>
                </div>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите фамилию</span><br/>
                    <input placeholder='Фамилия' className={styles.userInput} value={user.lastName}></input>
                </div>
            </div>
            <div className={styles.bigConteiner}>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Полное имя работника</span><br/>
                    <input placeholder='Полное имя работника' className={styles.userInput} value={user.workername}></input>
                </div>
            </div>
            <div className={classNames(styles.bigConteiner , styles.sectionConteiner)}>
                <div className={classNames(styles.smallTextConteiner , styles.midle)}>
                        <span className={styles.sectionText}>Введите контактные данные </span>
                </div>
            </div>
            <div className={styles.bigConteiner}>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите e-mail</span><br/>
                    <input placeholder='Почта' className={styles.userInput} value={user.email}></input>
                </div>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите телефон</span><br/>
                    <input placeholder='+7' className={styles.userInput} value={user.phone}></input>
                </div>
            </div>
            <div className={classNames(styles.bigConteiner , styles.sectionConteiner)}>
                <div className={classNames(styles.smallTextConteiner , styles.midle)}>
                    <span className={styles.sectionText}>Введите личные данные пользователя </span>
                </div>
            </div>
            <div className={styles.bigConteiner}>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите пол</span><br/>
                    <input placeholder='Пол' className={styles.userInput} value={user.state}></input>
                </div>
            </div>
            <div className={styles.bigConteiner}>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите день рождения</span><br/>
                    <input placeholder='' className={styles.userInput} value={user.birthDay}></input>
                </div>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите месяц рождения</span><br/>
                    <input placeholder='' className={styles.userInput} value={user.birthMonth}></input>
                </div>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите год рождения</span><br/>
                    <input placeholder='' className={styles.userInput} value={user.birthYear}></input>
                </div>
            </div>
            <div className={classNames(styles.bigConteiner , styles.sectionConteiner)}>
                <div className={classNames(styles.smallTextConteiner , styles.midle)}>
                    <span className={styles.sectionText}>Введите данные о документах пользователя </span>
                </div>
            </div>
            <div className={styles.bigConteiner}>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите паспорт</span><br/>
                    <input placeholder='XXXX XXX' className={styles.userInput} value={user.passport}></input>
                </div>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите ИНН</span><br/>
                    <input placeholder='ИНН' className={styles.userInput} value={user.inn}></input>
                </div>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите СНИЛС</span><br/>
                    <input placeholder='СНИЛС' className={styles.userInput} value={user.snils}></input>
                </div>
            </div>
            <div className={styles.bigConteiner}>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите ОМС</span><br/>
                    <input placeholder='ОМС' className={styles.userInput} value={user.oms}></input>
                </div>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите водительское удостоверение</span><br/>
                    <input placeholder='' className={styles.userInput} value={user.driverLicense}></input>
                </div>
                <div className={styles.smallConteiner}>
                    <span className={styles.inputText}>Введите зарплату</span><br/>
                    <input placeholder='' className={styles.userInput} value={user.salary}></input>
                </div>
            </div>
            <div className={classNames(styles.bigConteiner , styles.sectionConteiner , styles.buttonsContainerGap)}>  
                <button className={styles.bottomButtons}>Удалить пользователя</button>
                <button className={styles.bottomButtons}>Изменить</button>
            </div>
        </div>
</div>
);
};

export default AdminPageUserEdit;