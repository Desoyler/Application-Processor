import React, { useState } from 'react';
import styles from './Sendpage.module.css';
import classNames from 'classnames';

const Sendpage = ({ setText, setshorttext, setStatus, users, activeuser }) => {
  // Выбор пользователя из массива
  
  const [shortpage, setShortpage] = useState('');
  const [text, setBigText] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  // Найти выбранного пользователя по id
 

  const handleShortTextChange = (e) => {
    setShortpage(e.target.value);
    setshorttext && setshorttext(e.target.value);
  };

  const handleTextChange = (e) => {
    setBigText(e.target.value);
    setText && setText(e.target.value);
  };

  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleTypeChange = (e) => setType(e.target.value);
  const handleUserChange = (e) => setSelectedUserId(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus && setStatus('Не выполнена');
    // Формируем данные для отправки
    const data = {
      shortpage,
      type,
      status: 'Не выполнена',
      text,
      otschet: '',
      sender: selectedUser ? selectedUser.workername : '',
      location
    };
    try {
      const response = await fetch('http://localhost:3000/api/zayavki', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Ошибка при отправке заявки');
      alert('Заявка успешно отправлена!');
      setShortpage('');
      setBigText('');
      setLocation('');
      setType('');
    } catch (err) {
      alert('Ошибка: ' + err.message);
    }
  };

  return (
    <div>
      <div className={styles.zero}>
        <span className={styles.zeroHText}>Отправка технической заявки</span>
      </div>
      <div className={styles.conteiner}>
        <form onSubmit={handleSubmit}>
          {/* Динамический выбор пользователя */}
          <div className={styles.smallConteiner}>
            <span className={styles.Text}>Отправитель</span><br/>
            <select
              className={styles.list}
              value={selectedUserId}
              onChange={handleUserChange}
              required
              disabled
            >
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.workername} ({user.profession})
                </option>
              ))}
            </select>
          </div>
          <div className={styles.smallConteiner}>
            <span className={styles.Text}>Опишите кратко проблему</span><br/>
            <input
              type="text"
              className={classNames(styles.shortTextInput, styles.bottomBorder)}
              value={shortpage}
              onChange={handleShortTextChange}
              required
            />
          </div>
          <div className={styles.bigTextConteiner}>
            <span className={styles.Text}>Опишите вашу проблему детально в поле ниже:</span><br/>
            <textarea
              className={styles.bigText}
              rows="10"
              cols="50"
              value={text}
              onChange={handleTextChange}
              required
            />
          </div>
          <div className={classNames(styles.smallConteiner, styles.height)}>
            <select
              className={classNames(styles.list, styles.bottomborder)}
              value={location}
              onChange={handleLocationChange}
              required
            >
              <option value="" disabled hidden>Выберите место где произошла поломка</option>
              <option value="цех1">Цех 1</option>
              <option value="цех2">Цех 2</option>
              <option value="цех3">Цех 3</option>
              <option value="цех4">Цех 4</option>
            </select>
          </div>
          <div className={classNames(styles.smallConteiner, styles.height)}>
            <select
              className={classNames(styles.list, styles.bottomBorder)}
              value={type}
              onChange={handleTypeChange}
              required
            >
              <option value="" disabled hidden>Выберите тип поломки</option>
              <option value="Поломка компьютерного оборудования">Поломка компьютерного оборудования</option>
              <option value="Перепад электроэнергии">Перепад электроэнергии</option>
              <option value="Поломка рабочего компьютера">Поломка рабочего компьютера</option>
            </select>
          </div>
          <div className={styles.smallConteiner}>
            <button className={styles.sendbutton} type="submit">
              <span className={styles.sendButtonText}>Отправить</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sendpage;
