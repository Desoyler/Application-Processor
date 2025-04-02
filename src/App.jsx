import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css'
import Authorizationpage from './components/Authorizationpage.jsx'
import Siteheader from './components/Siteheader.jsx';
import Cabinetpage from './components/Cabinetpage.jsx';
import Sendpage from './components/Sendpage.jsx';
import Historypage from './components/Historypage.jsx';
import Watchpage from './components/Watchpage.jsx';
import ApplicationPage from './components/ApplicationPage.jsx';
import Cabinetpagedocuments from './components/Cabinetpagedocuments.jsx';
import Cabinetpagework from './components/Cabinetpagework.jsx';

const users = [
  { username: 'user1', password: 'pass1', profession: 'Глава финансов', workername: 'Иван Иванов Иванович'},
  { username: 'user2', password: 'pass2', profession: 'Рабочий', workername: 'Иван Иванов Иванович'},
  { username: 'user3', password: 'pass3', profession: 'Администратор', workername: 'Иван Иванов Иванович'},
];

function App() 
{
  const [isAuthentificated, setIsAutheticated] = useState(false); //Проверка авторизован ли
  const [username, setUsername] = useState(''); //Логин
  const [password, setPassword] = useState(''); //пороль
  const [profession, setProfession] = useState(''); //Профессия
  const [workername, setWorkerName] = useState(''); //Имя работника
  const [currentUser, setCurrentUser] = useState(null); //тек. данные

  // useState для sendPage
  const [text, setText] = useState('');
  const [shorttext, setshorttext] = useState('');
  const [image, setImage] = useState(null);
  const [Sender, setSender] = useState();

  // useState для состояния заявки
  const [status, setStatus] = useState('')

  const navigate = useNavigate(); // Хук для навигации



  
  
  const goToAplication = (id) => {
    navigate(`/watch/${id}`);
  };

  const handleLogout = () => 
    {
    setIsAutheticated(false); //не авторизован
    setCurrentUser(null);  // Чистка данных что хранятся в текущем пользователе
    setUsername(''); 
    setPassword(''); 
    setProfession('');
    setWorkerName('');
    alert('Вы вышли из системы.');
  };


  const handleLogin = () => 
    {
    const user = users.find(u => u.username === username);

      if (!user || user.password !== password) 
      {
      alert('Данные не коректны!');
      return;
      }
    setIsAutheticated(true); // Пользователь авторизован
    setCurrentUser(user);  
    navigate("/cabinet");
    };


  return (
    <div className="mainconteiner">
        <Siteheader handleLogout={handleLogout}/>
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
        <Route path="/cabinet"
          element={
            isAuthentificated ? 
            <Cabinetpage 
              handleLogout={handleLogout}
              workername={currentUser.workername} 
              profession={currentUser.profession} 
            /> : <Authorizationpage handleLogin={handleLogin} />}
        />
        <Route path="/cabinet/dockuments"
          element={
            isAuthentificated ? 
            <Cabinetpagedocuments 
              handleLogout={handleLogout}
              workername={currentUser.workername} 
              profession={currentUser.profession} 
            /> : <Authorizationpage handleLogin={handleLogin} />}
        />
        <Route path="/cabinet/work"
          element={
            isAuthentificated ? 
            <Cabinetpagework 
              handleLogout={handleLogout}
              workername={currentUser.workername} 
              profession={currentUser.profession} 
            /> : <Authorizationpage handleLogin={handleLogin} />}
        />
        <Route path="/send" 
        element={
          isAuthentificated ? 
            <Sendpage 
             workername={currentUser.workername} 
             text = {text} 
             setText = {setText}
             shorttext = {shorttext}
             setshorttext = {setshorttext}
             image = {image}
             setImage = {setImage}
             Sender={Sender} 
             setSender={setSender}
             status={status}
             setStatus={setStatus}

            /> : <Authorizationpage handleLogin={handleLogin}/>}
        />
      <Route path="/watch"
       element={
        isAuthentificated ? 
        <Watchpage 
          text={text}
          goToAplication={goToAplication}
        /> : <Authorizationpage handleLogin={handleLogin}/>}
      />
      <Route path="/history"
        element={
          isAuthentificated ? 
          <Historypage 
            text={text} 
            goToAplication={goToAplication}  
          /> : <Authorizationpage handleLogin={handleLogin}/>}
        />
       <Route path="/watch/:id"
        element={
          isAuthentificated ?
          <ApplicationPage 
          workername = {currentUser.workername}
          /> : <Authorizationpage handleLogin={handleLogin}/>}
        />
      </Routes>
    </div>
  );
};

export default App
