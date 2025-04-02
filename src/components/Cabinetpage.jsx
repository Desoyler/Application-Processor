import React from 'react';
import styles from './Cabinetpage.module.css';
import classNames from 'classnames';
import Siteheader from './Siteheader.jsx';
import { useNavigate } from "react-router-dom";

import workerpng from './assets/worker.png'
import support from './assets/support.svg'

const Cabinetpage = ({workername, profession, handleLogout}) =>{
    const navigate = useNavigate();

        const goToDock = () => 
            {
            navigate("/cabinet/dockuments");
        };
        const goToCabinet = () => 
        {
            navigate("/cabinet/");
        };
        const goToWork = () => 
        {
            navigate("/cabinet/work");
        };
    return(
        <div>
            <div className={styles.cab}>
            <span className={styles.hText}>Личные данные</span>
            <div className={styles.side}>
                <span className={styles.sTextH}>Личный кабинет</span><br/>
                <span className={classNames(styles.sText, styles.activesText)}> Личные данные</span><br/>
                <span className={styles.sText} onClick={goToDock}>Документы</span><br/>
                <span className={styles.sText} onClick={goToWork}>Информация по работе</span><br/>
            </div>
            <img src={workerpng} className={styles.pngworker}/>
            </div>
            <div className={styles.cabinetConteiner}>

                <div className={classNames(styles.infoconteiner)}>
                    <div className={styles.smallconteiner}>
                    <span className={styles.Text}>Имя</span><br/>
                    <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.smallconteiner}>
                    <span className={styles.Text}>Отчество</span> <br/>
                    <input type="text" className={styles.input} /> 
                    </div>
                    <div className={styles.smallconteiner}>
                    <span className={styles.Text}>Фамилия</span> <br/>
                    <input type="text" className={styles.input} /> 
                    </div>
                </div>
                <div className={classNames(styles.infoconteiner2 )}>
                    <div className={styles.smallconteiner}>
                        <span className={styles.Text}>E-mail</span> <br/>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.smallconteiner}>
                        <span className={styles.Text}>Телефон</span> <br/>
                        <input type="text" className={styles.input} />
                    </div>
                    </div>
                    <div className={classNames(styles.infoconteiner3)}>
                    <div className={styles.smallconteiner}>
                        <span className={styles.Text}>Дата рождения</span> <br/>
                        <input className={styles.smallinput}></input>
                        <input className={styles.smallinput}></input>
                        <input className={styles.smallinput}></input>
                    </div>
                    <div className={styles.smallconteiner}>
                        <span className={styles.Text}>Пол</span> <br/>
                        <input className={styles.smallinput}></input>
                    </div>
                    </div>
                    <div className={styles.Warning}>
                        <span className={styles.wText}>
                            Никогда и никому не сообщайте код входа в ваш 
                            рабочий аккаунт веб-приложения РУСАЛ, даже если запрос поступил от якобы официальных лиц. 
                            Это может привести к компрометации ваших 
                            данных и утрате доступа к системе. Будьте бдительны и защищайте свою учетную запись!
                        </span>
                    </div>
                    <div className={styles.Copyright}>
                        <span>Приложение разработано командой © РУСАЛ для удобной и эффективной работы с электронными заявками.</span>
                    </div>
                    <div className={styles.support}>
                        <button className={styles.supportbutton}> <img src={support} className={styles.supportimg}/>Написать в поддержку</button>
                    </div>
                </div>
                
            </div>
    );
};

export default Cabinetpage;