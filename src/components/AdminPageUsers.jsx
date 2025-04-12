import React, { useState, useEffect } from 'react';
import styles from './AdminPage.module.css';
import classNames from 'classnames';

import useradd from './assets/user-plus.svg';

const AdminPageUsers = ({goToEdit, goToAdminAplication, users, goToAdd}) =>{
    const [searchTerm, setSearchTerm] = useState("");
    


    const filteredUsers = users.filter(user =>
        user.workername.toLowerCase().includes(searchTerm.toLowerCase())
        );

return(
    <div>
        <div className={styles.zero}>
            <span className={styles.zeroHText}>Работа с данными пользователей</span>
                <div className={styles.side}>
                    <span className={styles.sideHText}>Возможности администратора</span><br/>
                    <span className={classNames(styles.sideText , styles.activeText)} onClick="">Работа с данными пользователей</span><br/>
                    <span className={styles.sideText} onClick={goToAdminAplication}>Работа с заявками</span><br/>
                    <span className={styles.sideText} onClick="">Запросы в поддержку</span><br/>
                </div>
        </div>
        <div className={styles.conteiner}>
            <div className={styles.searchbar}>
            <input
                type="text"
                placeholder="Введите имя работника..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
            />
            </div>
            <div className={styles.searchBaseContainer}>
                {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                <div key={user.id} className={styles.userCard} onClick={() => goToEdit(user.id)}>
                    <span>Имя работника: {user.workername}</span><br />
                    <span>айди пользовательской записи: {user.id}</span>
                </div>
                ))) : (<span>Ничего не найдено</span>)}
            </div>
            <div >
                <button className={styles.addbutton} onClick={goToAdd}><img src={useradd} className={styles.addimg}/></button>
            </div>
        </div>
</div>
);
};

export default AdminPageUsers;