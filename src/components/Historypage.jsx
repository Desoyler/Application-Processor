import React from 'react';
import './Historypage.css';

import Siteheader from './Siteheader.jsx';
import Spacecomponent from './Spacecomponent.jsx';

const Historypage = ({}) =>{

    return(
        <div>
            <Siteheader />
            <Spacecomponent />
        <div className="hconteiner">
            <span>Просмотр истории заявок</span>
        </div>
        </div>
    );
};

export default Historypage;