import React from 'react';
import './Sendpage.css';

import Siteheader from './Siteheader.jsx';
import Spacecomponent from './Spacecomponent.jsx';

const Sendpage = ({navigate}) =>{
    
    const goback = () => {
        navigate("/cabinet");
    };

    return(
        <div>
        <Siteheader />
        <Spacecomponent />
        <div className="sconteiner">
            <span className='sh'>Отправить заявку</span>
            <button className="return" onClick={goback} >X</button>
            <span className='sText firstText'>Опишите вашу проблему в поле ниже:</span>
            <textarea id="bigText" name="bigText" rows="10" cols="50"></textarea>
            <span className='sText lastText'>Отправьте изображение при необходимости:</span>
            <input type="file" className="imageUpload" name="image" accept="image/*" />
            <button className="ssend" >Отправить</button>
        </div>
        </div>
    );
};

export default Sendpage;