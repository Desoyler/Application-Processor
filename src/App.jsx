import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import './App.css'
import Authorizationpage from './components/Authorizationpage.jsx'
import Siteheader from './components/Siteheader.jsx';
import Spacecomponent from './components/Spacecomponent.jsx';
import Cabinetpage from './components/Cabinetpage.jsx';
import Sendpage from './components/Sendpage.jsx';
import Historypage from './components/Historypage.jsx';
import Watchpage from './components/Watchpage.jsx';

const users = [
  { username: 'user1', password: 'pass1', profession: 'boss', workername: 'Иван Иванов Иванович'},
  { username: 'user2', password: 'pass2', profession: 'worker', workername: 'Иван Иванов Иванович'},
  { username: 'user3', password: 'pass3', profession: 'admin', workername: 'Иван Иванов Иванович'},
];

function App() 
{
  const [isAuthentificated, setIsAutheticated] = useState(false); //Проверка авторизован ли
  const [username, setUsername] = useState(''); //Логин
  const [password, setPassword] = useState(''); //пороль
  const [profession, setProfession] = useState(''); //Профессия
  const [currentUser, setCurrentUser] = useState(null); //тек. данные

  const [formData, setFormData] = useState(null); //данные с юзформы send

  const navigate = useNavigate(); // Хук для навигации
  

  const handleLogout = () => 
    {
    setIsAutheticated(false); //не авторизован
    setCurrentUser(null);  // Чистка данных что хранятся в текущем пользователе
    setUsername(''); // Очищаем 
    setPassword(''); 
    setProfession(''); 
    alert('Вы вышли из системы.');
  };


  const handleLogin = () => 
    {
    const user = users.find(u => u.username === username);
  if (!user) 
    {
    alert('Пользователь с таким логином не найден!');
    return;
  }
  if (user.password !== password) 
    {
    alert('Неверный пароль!');
    return;
  }
  setIsAutheticated(true); // Пользователь авторизован
  setCurrentUser(user);  
  navigate("/cabinet");
};


  return (
    <div className="mainconteiner">
        <Routes>
        <Route
          path="/"
          element={
            <Authorizationpage
              setIsAutheticated={setIsAutheticated}
              username={username}
              password={password}
              profession={profession}
              setUsername={setUsername}
              setPassword={setPassword}
              setProfession={setProfession}
              handleLogin={handleLogin}
            />
          }
        />
        <Route
          path="/cabinet"
          element={isAuthentificated ? <Cabinetpage workername={currentUser.workername} profession={currentUser.profession} navigate={navigate} /> : <Authorizationpage handleLogin={handleLogin} />}
        />
      <Route path="/history" element={<Historypage/>}/>
      <Route path="/send" element={isAuthentificated ? <Sendpage navigate={navigate} setFormData={setFormData} name={currentUser.workername}/> : <Authorizationpage handleLogin={handleLogin}/>}/>
      <Route path="/watch" element={isAuthentificated ? <Watchpage navigate={navigate} formData={formData}  /> : <Authorizationpage handleLogin={handleLogin}/>}/>
      </Routes>
    </div>
  );
};

export default App
