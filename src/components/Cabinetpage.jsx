import React from 'react';
import styles from './Cabinetpage.module.css';
import classNames from 'classnames';
import Siteheader from './Siteheader.jsx';

import workerpng from './assets/worker.png'
import support from './assets/support.svg'

const Cabinetpage = ({goToDock, goToWork }) =>{
    return(
        <div>
            <div className={styles.zero}>
            <span className={styles.zeroHText}>Личные данные</span>
            <div className={styles.side}>
                <span className={styles.sideHText}>Личный кабинет</span><br/>
                <span className={classNames(styles.sideText, styles.activeText)}> Личные данные</span><br/>
                <span className={styles.sideText} onClick={goToDock}>Документы</span><br/>
                <span className={styles.sideText} onClick={goToWork}>Информация по работе</span><br/>
            </div>
            <img src={workerpng} className={styles.workerImage}/>
            </div>
            <div className={styles.container}>
                <div className={classNames(styles.infoConteiner1)}>
                    <div className={styles.smallConteiner}>
                    <span className={styles.infoText}>Имя</span><br/>
                    <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.smallConteiner}>
                    <span className={styles.infoText}>Отчество</span> <br/>
                    <input type="text" className={styles.input} /> 
                    </div>
                    <div className={styles.smallConteiner}>
                    <span className={styles.infoText}>Фамилия</span> <br/>
                    <input type="text" className={styles.input} /> 
                    </div>
                </div>
                <div className={classNames(styles.infoConteiner2 )}>
                    <div className={styles.smallConteiner}>
                        <span className={styles.infoText}>E-mail</span> <br/>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.smallConteiner}>
                        <span className={styles.infoText}>Телефон</span> <br/>
                        <input type="text" className={styles.input} />
                    </div>
                    </div>
                    <div className={classNames(styles.infoConteiner3)}>
                    <div className={styles.smallConteiner}>
                        <span className={styles.infoText}>Дата рождения</span> <br/>
                        <input className={styles.smallInput}></input>
                        <input className={styles.smallInput}></input>
                        <input className={styles.smallInput}></input>
                    </div>
                    <div className={styles.smallConteiner}>
                        <span className={styles.infoText}>Пол</span> <br/>
                        <input className={styles.smallInput}></input>
                    </div>
                    </div>
                    <div className={styles.warningContainer}>
                        <span>
                            Никогда и никому не сообщайте код входа в ваш 
                            рабочий аккаунт веб-приложения РУСАЛ, даже если запрос поступил от якобы официальных лиц. 
                            Это может привести к компрометации ваших 
                            данных и утрате доступа к системе. Будьте бдительны и защищайте свою учетную запись!
                        </span>
                    </div>
                    <div className={styles.copyrightContainer}>
                        <span>Приложение разработано командой © РУСАЛ для удобной и эффективной работы с электронными заявками.</span>
                    </div>
                    <div className={styles.supportContainer}>
                        <button className={styles.supportButton}> <img src={support} className={styles.supportImage}/>Написать в поддержку</button>
                    </div>
                </div>
                
            </div>
    );
};

export default Cabinetpage;