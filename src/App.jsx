import { useState } from 'react'

import './App.css'
import Authorizationpage from './components/Authorizationpage.jsx'
import Siteheader from './components/Siteheader.jsx';
import Spacecomponent from './components/spacecomponent.jsx';

const users = [
  { username: 'user1', password: 'pass1', profession: 'boss'},
  { username: 'user2', password: 'pass2', profession: 'worker'},
  { username: 'user3', password: 'pass3', profession: 'admin'},
];

function App() {

  const [isAuthentificated, setIsAutheticated] = useState(false); //Проверка авторизован ли
  const [username, setUsername] = useState(''); //Логин
  const [password, setPassword] = useState(''); //пороль
  const [profession, setProfession] = useState(''); //Профессия
  const [currentUser, setCurrentUser] = useState(null); //тек. данные
  const handleLogout = () => {
    setIsAutheticated(false); //не авторизован
    setCurrentUser(null);  // Чистка данных что хранятся в текущем пользователе
    setUsername(''); // Очищаем 
    setPassword(''); 
    setProfession(''); 
    alert('Вы вышли из системы.');
  };
  const handleLogin = () => {
    const user = users.find(u => u.username === username);
  if (!user) {
    alert('Пользователь с таким логином не найден!');
    return;
  }
  if (user.password !== password) {
    alert('Неверный пароль!');
    return;
  }
  setIsAutheticated(true); // Пользователь авторизован
  setCurrentUser(user); 
  setProfession(user.profession); 
  alert('Успешный вход!');
};
  return (
    <div className="mainconteiner">
      <Siteheader />
      <Spacecomponent />
      <Authorizationpage setIsAutheticated={setIsAutheticated}
        username={username}
        password={password}
        profession={profession}
        setUsername={setUsername}
        setPassword={setPassword}
        setProfession={setProfession}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default App
