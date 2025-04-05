import React from 'react';
import { useNavigate } from "react-router-dom";

import styles from './Siteheader.module.css';

import logo from './assets/icon2.svg';
import fileclock from './assets/file-clock.svg';
import fileplus from './assets/file-plus-2.svg';
import logout from './assets/log-out.svg';
import user from './assets/user.svg';
import file from './assets/file.svg';
import cog from './assets/cog.svg';

const Siteheader = ({handleLogout}) =>
    {
        const navigate = useNavigate();

        const goToCabinet = () => {
            navigate("/cabinet");
        };
        const goToHistory = () => {
            navigate("/history");
        };
    
        const goToSend = () => {
            navigate("/send");
        };
    
        const goToWatch = () => {
            navigate("/watch");
        };
        const goToAdmin = () => {
            navigate("/admin");
        };
        
    return(
        <div className={styles.headerconteiner}>
            <picture className={styles.logo} >
            <img src={logo} width="200px" height="200px"></img>
            </picture>
            <picture className={styles.headerbutton} onClick={goToCabinet}>
            <img src={user} width="50px" height="50px"></img>
            </picture>
            <picture className={styles.headerbutton} onClick={goToHistory}>
            <img src={fileclock} width="50px" height="50px"></img>
            </picture>
            <picture className={styles.headerbutton} onClick={goToWatch}>
            <img src={file} width="50px" height="50px"></img>
            </picture>
            <picture className={styles.headerbutton} onClick={goToSend}>
            <img src={fileplus} width="50px" height="50px"></img>
            </picture>
            <picture className={styles.adminbutton} onClick={goToAdmin}>
            <img src={cog} width="50px" height="50px"></img>
            </picture>
            <picture className={styles.logoutbutton} onClick={handleLogout}>
            <img src={logout} width="50px" height="50px"></img>
            </picture>
        </div>
    );
};

export default Siteheader;