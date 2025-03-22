import React from 'react';
import './Siteheader.css'

const Siteheader = () =>{
    return(
        <div class="headerconteiner">
            <picture src="./assets/icen.png"></picture>
            <button class="headerbutton">История Заявок</button>
            <button class="headerbutton">Подать заявку</button>
            <button class="headerbutton">Просмотр активных заявок</button>
        </div>
    );
};

export default Siteheader;