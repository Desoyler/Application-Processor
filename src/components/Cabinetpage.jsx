import React from 'react';
import './Cabinetpage.css';

import Siteheader from './Siteheader.jsx';
import workerpng from './assets/worker.png'
import support from './assets/support.svg'

const Cabinetpage = ({workername, profession, handleLogout}) =>{
    return(
        <div>
            <div className='cab'>
            <span className="hText">Личные данные</span>
            <div className='side'>
                <span className='sTextH'>Личный кабинет</span><br/>
                <span className='sText activesText'> Личные данные</span><br/>
                <span className='sText'>Документы</span><br/>
                <span className='sText'>Информация по работе</span><br/>
            </div>
            <img src={workerpng} className='pngworker'/>
            </div>
            <div className="cabinetConteiner">

                <div className='infoconteiner'>
                    <div className='smallconteiner'>
                    <span className='Text'>Имя</span><br/>
                    <input type="text" className='input' />
                    </div>
                    <div className='smallconteiner'>
                    <span className='Text'>Отчество</span> <br/>
                    <input type="text" className='input' /> 
                    </div>
                    <div className='smallconteiner'>
                    <span className='Text'>Фамилия</span> <br/>
                    <input type="text" className='input' /> 
                    </div>
                </div>
                <div className='infoconteiner'>
                    <div className='smallconteiner'>
                        <span className='Text'>E-mail</span> <br/>
                        <input type="text" className='input' />
                    </div>
                    <div className='smallconteiner'>
                        <span className='Text'>Телефон</span> <br/>
                        <input type="text" className='input' />
                    </div>
                    </div>
                    <div className='infoconteiner infoconteiner2'>
                    <div className='smallconteiner'>
                        <span className='Text'>Дата рождения</span> <br/>
                        <input type="text" className='smallinput' />
                        <input type="text" className='smallinput' />
                        <input type="text" className='smallinput' />
                    </div>
                    <div className='smallconteiner'>
                        <span className='Text'>Пол</span> <br/>
                        <input type="text" className='smallinput' />
                    </div>
                    </div>
                    <div className='Warning'>
                        <span className='wText'>
                            Никогда и никому не сообщайте код входа в ваш 
                            рабочий аккаунт веб-приложения РУСАЛ, даже если запрос поступил от якобы официальных лиц. 
                            Это может привести к компрометации ваших 
                            данных и утрате доступа к системе. Будьте бдительны и защищайте свою учетную запись!
                        </span>
                    </div>
                    <div className='Copyright'>
                        <span>Приложение разработано командой © РУСАЛ для удобной и эффективной работы с электронными заявками.</span>
                    </div>
                    <div className='support'>
                        <button className='supportbutton'> <img src={support} height="50"px width="t0px"/>Написать в поддержку</button>
                    </div>
                </div>
                
            </div>
    );
};

export default Cabinetpage;