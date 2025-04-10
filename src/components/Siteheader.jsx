import React from 'react';

import styles from './Siteheader.module.css';

import logo from './assets/icon2.svg';
import fileclock from './assets/file-clock.svg';
import fileplus from './assets/file-plus-2.svg';
import logout from './assets/log-out.svg';
import user from './assets/user.svg';
import file from './assets/file.svg';
import cog from './assets/cog.svg';

const Siteheader = ({handleLogout, goToCabinet, goToHistory, goToSend, goToWatch, goToSearch, messages}) =>
    {
    return(
        <div className={styles.headerConteiner}>
            <picture className={styles.rusalLogo} >
            <img src={logo} width="200px" height="200px"></img>
            </picture>
            <picture className={styles.headerButtons} onClick={goToCabinet}>
            <img src={user} width="50px" height="50px"></img>
            </picture>
            <picture className={styles.headerButtons} onClick={goToHistory}>
            <img src={fileclock} width="50px" height="50px"></img>
            </picture>
            <picture className={styles.headerButtons} onClick={goToWatch}>
            <img src={file} width="50px" height="50px"></img>
            </picture>
            <picture className={styles.headerButtons} onClick={goToSend}>
            <img src={fileplus} width="50px" height="50px"></img>
            </picture>
            <picture className={styles.headerButtons} onClick={goToSearch}>
            <img src={cog} width="50px" height="50px"></img>
            </picture>
            <picture className={styles.logoutButton} onClick={handleLogout}>
            <img src={logout} width="50px" height="50px"></img>
            </picture>
        </div>
    );
};

export default Siteheader;