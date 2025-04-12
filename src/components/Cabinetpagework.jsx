import React from 'react';
import styles from './Cabinetpage.module.css';
import classNames from 'classnames';

import workerpng from './assets/worker.png'
import support from './assets/support.svg'

const Cabinetpagework = ({goToDock, goToCabinet}) => {
        
    return(
        <div>
            <div className={styles.zero}>
            <span className={styles.zeroHText}>Информация</span>
            <div className={styles.side}>
                <span className={styles.sideHText}>Личный кабинет</span><br/>
                <span className={styles.sideText } onClick={goToCabinet}> Личные данные</span><br/>
                <span className={styles.sideText} onClick={goToDock}>Документы</span><br/>
                <span className={classNames(styles.sideText, styles.activeText)} >Информация по работе</span><br/>
            </div>
            <img src={workerpng} className={styles.workerImage}/>
            </div>
            <div className={styles.container}>

                <div className={classNames(styles.infoConteiner2)}>
                    <div className={styles.smallConteiner}>
                        <span className={styles.infoText}>Заработная плата</span> <br/>
                        <input type="text" className={styles.input} /> 
                    </div>
                    <div className={styles.smallConteiner}> 
                        <span className={styles.infoText}>Дней до оплачиваемого отпуска</span> <br/>
                        <input type="text" className={styles.input} /> 
                    </div>
                </div>
                <div className={classNames(styles.infoConteiner3 )}>
                    <div className={styles.smallConteiner}>
                    </div>
                </div>
                <div className={classNames(styles.infoConteiner3)}>
                    <div className={styles.smallConteiner}>
                    </div>
                    <div className={styles.smallConteiner}>
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

export default Cabinetpagework;