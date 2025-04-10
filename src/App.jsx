import { useState } from 'react'
import { Routes, Route, useNavigate, Router } from 'react-router-dom';

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
import ApplicationPageEnd from  './components/ApplicationPageEnd.jsx';
import ApplicationPageChat from "./components/ApplicationPageChat.jsx"
import AdminPageUserAdd from "./components/AdminPageUserAdd.jsx"
import AdminPageUserEdit from "./components/AdminPageUserEdit.jsx"
import AdminPageUsers from './components/AdminPageUsers.jsx';
import AdminPageApplication from './components/AdminPageApplication.jsx';
import AdminPageApplicationEdit from './components/AdminPageApplicationEdit.jsx';

const users = [
  { id: 1, username: 'user1', password: 'pass1', profession: 'Глава финансов', workername: 'Иван Иванов Иванович', email: 'xxxxxxxx@mail.ru', phone: '+7949XXXXXXXX', birthdaydate: 22, pol: 'M', passport: 243454, inn: 332131, snils: 3213213, oms: 231321312, driver: 32131, zarplata: 60500, days: 5 },
];

const messages = [
  {id: 1, shortpage: "Поломка компьютера", type: "Сломано", status: "Не выполнена", text: "У рабочего неожиданно перестал работать компьютер. Он пытался перезагрузить систему, но экран так и остался чёрным. Сначала подумал, что проблема в проводах, но все было подключено правильно. Включил его в другой розетке, но это не помогло. Решил проверить блок питания, но и он работал нормально. Попробовал включить ПК в безопасном режиме, но и это не дало результата. Рабочий запаниковал и позвонил в сервис, чтобы узнать причину. Специалисты сообщили, что у него сгорела видеокарта, и потребуется заменить часть комплектующих.", otschet: "", sender: "Иван Иванович Иванов", location: "цех1",  
    chat:[{id: 1, message: "Здраствуйте неработает компьютер", timestamp: 1, sender: "Вова" }
    ]}, 
    {id: 2, shortpage: "Поломка компьютера", type: "Сломано", status: "Не выполнена", text: "Компьютер сломан нужна замена частей", otschet: "", sender: "Иван Иванович Иванов", location: "цех1",  
      chat:[{id: 1, message: "Здраствуйте неработает компьютер", timestamp: 1, sender: "Иван Иванов Иванович" }
      ]} ,
    {id: 3, shortpage: "Поломка компьютера", type: "Сломано", status: "Выполнена", text: "Компьютер сломан нужна замена частей", otschet: "", sender: "Иван Иванович Иванов", location: "цех1",  
      chat:[{id: 1, message: "Здраствуйте неработает компьютер", timestamp: 1, sender: "Иван Иванов Иванович" }
      ]} 
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
  const [Sender, setSender] = useState();

  // useState для состояния заявки
  const [status, setStatus] = useState('')



// Функции навигации
const navigate = useNavigate(); 
 
const goToDock = () => 
{
    navigate("/cabinet/documents");
};

const goToCabinet = () => 
{
    navigate("/cabinet/");
};

const goToWork = () => 
{
    navigate("/cabinet/work");
};

const goToHistory = () => 
{
    navigate("/history");
};

const goToSend = () => 
{
    navigate("/send");
};

const goToWatch = () => 
{
    navigate("/watch");
};

const goToUsers = () => 
{
  navigate("/admin/users");
};    

const goToAdminAplication = () => 
{
  navigate(`admin/application`);
};

const goToAdd = () => 
{
  navigate("/admin/users/add");
};


//Фукции нафигации с айдишником от массива
const goToEnd = (id) => 
{
  navigate(`/watch/${id}/end`);
};

const goToApplication = (id) => 
{
  navigate(`/watch/${id}`);
};

const goToEdit = (id) => 
{
  navigate(`admin/users/edit/${id}`);
};

const goToEditApplication = (id) => 
{
  navigate(`/admin/application/edit/${id}`)
}
const goToChat = (id) => 
{
  navigate(`/watch/${id}/chat`);
};



//Функции навигации с проверками
const goback = (status) => {
  if(status === "Выполнена")
  {
      navigate("/history")
  }
  else
  {
      navigate("/watch")
  }
}
  

//ФУНКЦИИ
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
        <Siteheader handleLogout={handleLogout} goToCabinet={goToCabinet} goToHistory={goToHistory} goToSend={goToSend} goToWatch={goToWatch} goToSearch={goToUsers}/>
        <Routes>
        <Route
          path="/"
          element={
            <Authorizationpage
              setUsername={setUsername}
              setPassword={setPassword}
              handleLogin={handleLogin}
            />
          }
        />
        <Route path="/cabinet"
          element={
            isAuthentificated ? 
            <Cabinetpage  
              goToDock={goToDock} 
              goToWork={goToWork}
            /> : <Authorizationpage handleLogin={handleLogin} />}
        />
        <Route path="/cabinet/documents"
          element={
            isAuthentificated ? 
            <Cabinetpagedocuments 
              goToCabinet={goToCabinet} 
              goToWork={goToWork}
            /> : <Authorizationpage handleLogin={handleLogin} />}
        />
        <Route path="/cabinet/work"
          element={
            isAuthentificated ? 
            <Cabinetpagework 
              goToDock={goToDock} 
              goToCabinet={goToCabinet} 
            /> : <Authorizationpage handleLogin={handleLogin} />}
        />
        <Route path="/send" 
        element={
          isAuthentificated ? 
            <Sendpage 
             setText = {setText}
             setshorttext = {setshorttext}
             setStatus={setStatus}
            /> : <Authorizationpage handleLogin={handleLogin}/>}
        />
      <Route path="/watch"
       element={
        isAuthentificated ? 
        <Watchpage 
          goToApplication={goToApplication} 
          messages={messages}
        /> : <Authorizationpage handleLogin={handleLogin}/>}
      />
      <Route path="/history"
        element={
          isAuthentificated ? 
          <Historypage 
            goToApplication={goToApplication}  
            messages={messages}
          /> : <Authorizationpage handleLogin={handleLogin}/>}
        />
       <Route path="/watch/:id"
        element={
          isAuthentificated ?
          <ApplicationPage 
          goToChat = {goToChat}
          users={users} 
          messages={messages}
          goback={goback}
          goToEnd = {goToEnd}

          /> : <Authorizationpage handleLogin={handleLogin}/>}
        />
        <Route path="/watch/:id/end"
        element={
          isAuthentificated ?
          <ApplicationPageEnd
          messages={messages}
          goToApplication = {goToApplication}
          goToChat = {goToChat}
          goback={goback}
          /> : <Authorizationpage handleLogin={handleLogin}/>}
        />
        <Route path="/watch/:id/chat"
        element={
          isAuthentificated ?
          <ApplicationPageChat
          messages={messages}
          workername = {currentUser.workername}
          goToApplication={goToApplication} 
          goToEnd = {goToEnd}
          goback = {goback}
          /> : <Authorizationpage handleLogin={handleLogin}/>}
        />
        <Route path="/admin/users/add"
        element={
          isAuthentificated ?
          <AdminPageUserAdd
          goToUsers={goToUsers}
          goToAdminAplication={goToAdminAplication}
          /> : <Authorizationpage handleLogin={handleLogin}/>}
        />
        <Route path="/admin/users/edit/:id"
        element={
          isAuthentificated ?
          <AdminPageUserEdit
          goToUsers={goToUsers}
          goToAdminAplication={goToAdminAplication}
          /> : <Authorizationpage handleLogin={handleLogin}/>}
        />
        <Route path="/admin/users"
        element={
          isAuthentificated ?
          <AdminPageUsers
          goToAdd = {goToAdd}
          users={users} 
          messages={messages}
          workername = {currentUser.workername}
          goToAdminAplication = {goToAdminAplication}
          goToEdit = {goToEdit}
          /> : <Authorizationpage handleLogin={handleLogin}/>}
        />
        <Route path="/admin/application"
        element={
          isAuthentificated ?
          <AdminPageApplication
          users={users} 
          messages={messages}
          goToEditApplication = {goToEditApplication}
          goToUsers={goToUsers}
          /> : <Authorizationpage handleLogin={handleLogin}/>}
        />
        <Route path="/admin/application/edit/:id"
        element={
          isAuthentificated ?
          <AdminPageApplicationEdit
          goToUsers={goToUsers}
          goToAdminAplication = {goToAdminAplication}
          /> : <Authorizationpage handleLogin={handleLogin}/>}
        />
      </Routes>
    </div>
  );
};

export default App
