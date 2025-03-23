import React, { useState } from 'react';
import './Sendpage.css';

import Siteheader from './Siteheader.jsx';
import Spacecomponent from './Spacecomponent.jsx';

const Sendpage = ({navigate, setFormData, workername}) =>{
    const [text, setText] = useState('');
    const [image, setImage] = useState(null)

    const goback = () => {
        navigate("/cabinet");
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = () => {
        const formData = {
            text,
            image,
            senderName: workername // Замените на реальное имя из вашего массива
        };

        // Передаем данные в родительский компонент
        setFormData(formData);

        // Переход на страницу Watchpage
        navigate("/watch");

        // Очистка формы после отправки
        setText('');
        setImage(null);
        console.log('Image type:', typeof image);
        console.log('Image data:', image);
    };

    return(
        <div>
        <Siteheader />
        <Spacecomponent />
        <div className="sconteiner">
            <span className='sh'>Отправить заявку</span>
            <button className="return" onClick={goback} >X</button>
            <span className='sText firstText'>Опишите вашу проблему в поле ниже:</span>
            <textarea id="bigText" name="bigText" rows="10" cols="50" onChange={handleTextChange}></textarea>
            <span className='sText lastText'>Отправьте изображение при необходимости:</span>
            <input type="file" className="imageUpload" name="image" accept="image/*" onChange={handleImageChange}/>
            <button className="ssend" onClick={handleSubmit}>Отправить</button>
        </div>
        </div>
    );
};

export default Sendpage;