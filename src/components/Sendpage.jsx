import React from 'react';
import './Sendpage.css';

import Siteheader from './Siteheader.jsx';
import Spacecomponent from './Spacecomponent.jsx';

const Sendpage = ({}) =>{

    return(
        <div>
        <Siteheader />
        <Spacecomponent />
        <div className="sconteiner">
            <span>Отправить заявку</span>
        </div>
        </div>
    );
};

export default Sendpage;