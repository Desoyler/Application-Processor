import React from 'react';
import './Watchpage.css';

import Siteheader from './Siteheader.jsx';
import Spacecomponent from './Spacecomponent.jsx';

const Watchpage = ({navigate, formData}) =>{

    return(
        <div>
        <Siteheader />
        <Spacecomponent />
        <div className="wconteiner">
            <span>Просмотр активных заявок</span>
        </div> 
        </div>
    );
};

export default Watchpage;