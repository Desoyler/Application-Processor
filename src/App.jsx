import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Router, Navigate } from 'react-router-dom';

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
import MyApplications from './components/MyApplications.jsx';

const users =[];
fetch('http://localhost:3000/api/users')
  .then(response => response.json())
  .then(data => {
    // Преобразование каждого пользователя к нужной структуре
    data.forEach(user => {
      users.push({
        id: user.id,
        login: user.login,
        password: user.password,
        profession: user.profession,
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
        workername: user.workername,
        email: user.email,
        phone: user.phone,
        birthDay: user.birthDay,
        birthMonth: user.birthMonth,
        birthYear: user.birthYear,
        state: user.state,
        passport: user.passport,
        inn: user.inn,
        snils: user.snils,
        oms: user.oms,
        driverLicense: user.driverLicense,
        active: user.active // исправлено с Active на active
      });
    });
    console.log(users);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });






function App() 
{

 const [users, setUsers] = useState([]);
const [messages, setMessages] = useState([]);
useEffect(() => {
  fetch('http://localhost:3000/api/zayavki')
    .then(response => response.json())
    .then(data => {
      setMessages(data);
      // Для отладки:
      console.log('Заявки с чатами:', data);
    })
    .catch(error => {
      console.error('Ошибка при получении заявок:', error);
    });
}, []);

 
useEffect(() => {
  fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(data => {
      setUsers(data.map(user => ({
        id: user.id,
        login: user.login,
        password: user.password,
        profession: user.profession,
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
        workername: user.workername,
        email: user.email,
        phone: user.phone,
        birthDay: user.birthDay,
        birthMonth: user.birthMonth,
        birthYear: user.birthYear,
        state: user.state,
        passport: user.passport,
        inn: user.inn,
        snils: user.snils,
        oms: user.oms,
        driverLicense: user.driverLicense,
        active: user.active
      })));
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
}, []);

// Функции навигации
const navigate = useNavigate(); 


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


const goToDock = () => 
{
    navigate(`/cabinet/${currentUser.id}/documents`);
};

const goToCabinet = () => 
{
    navigate(`/cabinet/${currentUser.id}`);
};

const goToWork = () => 
{
    navigate(`/cabinet/${currentUser.id}/work`);
};
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
const goToMyApplications = (id) =>
{
  navigate(`/cabinet/myapplication/${id}`)
}


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

// запоминаем данные пользователя из массива
const [isAuthentificated, setIsAutheticated] = useState(false);  // проверка на авторизацию
const [currentUser, setCurrentUser] = useState(null); // установка в коректного пользователя


const [username, setUsername] = useState(''); //логин
const [password, setPassword] = useState(''); //пароль


const [workername, setWorkerName] = useState(''); // полное имя
const [firstName, setFirstName] = useState(''); //имя
const [lastName, setLastName] = useState('');  //фамилия
const [middleName, setMiddleName] = useState(''); //Отчество
const [state, setState] = useState(''); //пол


const [birthDay, setBirthDay] = useState(0);   // День рождения 
const [birthMonth, setBirthMonth] = useState(0); // Месяц рождения 
const [birthYear, setBirthYear] = useState(0);   // Год рождения 


const [profession, setProfession] = useState(''); //должность


const [email, setEmail] = useState(''); //почта
const [phone, setPhone] = useState(''); //телефон
const [passport, setPassport] = useState(''); //паспорт
const [inn, setInn] = useState(''); //ИНН
const [snils, setSnils] = useState('') //Снилс                      
const [oms, setOms] = useState(''); //OMS                     
const [driverLicense, setDriverLicense] = useState(''); //Вод.удостоверение  
const [salary, setSalary] = useState(0); //зарплата                 
const [days, setDays] = useState(0); //Дни      



// useState для sendPage
const [text, setText] = useState('');
const [shorttext, setshorttext] = useState('');
const [Sender, setSender] = useState();

// useState для состояния заявки
const [status, setStatus] = useState('') 


const handleLogout = () => {
  setIsAutheticated(false);       // Не авторизован
  setCurrentUser(null);           // Очистка текущего пользователя
  setUsername('');                
  setPassword('');                
  setWorkerName('');              
  setFirstName('');               
  setLastName('');                
  setMiddleName('');              
  setBirthDay(0);                 
  setBirthMonth(0);               
  setBirthYear(0);                
  setProfession('');              
  setEmail('');                   
  setPhone('');                   
  setPassport('');
  setSnils('');                
  setInn('');                     
  setOms('');                     
  setDriverLicense('');           
  setSalary(0);                   
  setDays(0);
  setState('');                     

  navigate('/');
  alert('Вы вышли из системы.');
};

const handleLogin = () => {
  const user = users.find(u => u.login === username);

  if (!user || user.password !== password) {
    alert('Данные не корректны!');
    return;
  }

  //
  setIsAutheticated(true);        
  setCurrentUser(user);          

  // 
  setUsername(user.username);     
  setPassword(user.password);     

  // 
  setWorkerName(user.workername); 
  setFirstName(user.firstName);
  setLastName(user.lastName);
  setMiddleName(user.middleName);
  setState(user.state);

  // 
  setBirthDay(user.birthDay);   
  setBirthMonth(user.birthMonth); 
  setBirthYear(user.birthYear);

  // 
  setProfession(user.profession);

  // 
  setEmail(user.email);
  setPhone(user.phone);

  // 
  setPassport(user.passport);
  setSnils(user.snils);
  setInn(user.inn);
  setOms(user.oms);
  setDriverLicense(user.driverLicense);

  // 
  setSalary(user.salary);
  setDays(user.days);


  navigate(`/cabinet/${user.id}`);
};




  return (
    <div className="mainconteiner">
        <Siteheader handleLogout={handleLogout} isAuthentificated={isAuthentificated} goToCabinet={goToCabinet} goToHistory={goToHistory} goToSend={goToSend} goToWatch={goToWatch} goToSearch={goToUsers} setUsername={setUsername} setPassword={setPassword}/>
        <Routes>
        <Route
          path="/"
          element={
            <Authorizationpage
              setUsername={setUsername}
              setPassword={setPassword}
              handleLogin={handleLogin}
              users={users}
            />
          }
        />
        <Route path="/cabinet/:id"
          element={
            isAuthentificated ? 
            <Cabinetpage  
              goToDock={goToDock} 
              goToWork={goToWork}
              goToMyApplications = {goToMyApplications}

              setUsername={setUsername}
              setPassword={setPassword}
    
              users={users}
              firstName={firstName}
              lastName={lastName}
              middleName={middleName}
              birthDay={birthDay}
              birthMonth={birthMonth}
              birthYear={birthYear}
              email={email}
              phone={phone}
              state={state}
            /> : <Navigate to="/" replace />}
        />
        <Route path="/cabinet/:id/documents"
          element={
            isAuthentificated ? 
            <Cabinetpagedocuments 
              goToCabinet={goToCabinet} 
              goToWork={goToWork}
              goToMyApplications = {goToMyApplications}

              users={users}
              passport={passport}
              inn={inn}
              snils={snils}
              oms={oms}
              driverLicense={driverLicense}
            /> : <Navigate to="/" replace />}
        />
        <Route path="/cabinet/:id/work"
          element={
            isAuthentificated ? 
            <Cabinetpagework 
              goToDock={goToDock} 
              goToCabinet={goToCabinet} 
              goToMyApplications = {goToMyApplications}

              users={users}
              salary={salary}
              days={days}
            /> : <Navigate to="/" replace />}
        />
        <Route path="/send" 
        element={
          isAuthentificated ? 
            <Sendpage 
             setText = {setText}
             setshorttext = {setshorttext}
             setStatus={setStatus}
            /> : <Navigate to="/" replace />}
        />
      <Route path="/watch"
       element={
        isAuthentificated ? 
        <Watchpage 
          goToApplication={goToApplication} 
          messages={messages}
        /> : <Navigate to="/" replace />}
      />
      <Route path="/history"
        element={
          isAuthentificated ? 
          <Historypage 
            goToApplication={goToApplication}  
            messages={messages}
          /> : <Navigate to="/" replace />}
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

          /> : <Navigate to="/" replace />}
        />
        <Route path="/watch/:id/end"
        element={
          isAuthentificated ?
          <ApplicationPageEnd
          messages={messages}
          goToApplication = {goToApplication}
          goToChat = {goToChat}
          goback={goback}
          /> : <Navigate to="/" replace />}
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
          /> : <Navigate to="/" replace />}
        />
        <Route path="/admin/users/add"
        element={
          isAuthentificated ?
          <AdminPageUserAdd
          goToUsers={goToUsers}
          goToAdminAplication={goToAdminAplication}
          /> : <Navigate to="/" replace />}
        />
        <Route path="/admin/users/edit/:id"
        element={
          isAuthentificated ?
          <AdminPageUserEdit
          goToUsers={goToUsers}
          goToAdminAplication={goToAdminAplication}
          users={users}
          /> : <Navigate to="/" replace />}
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
          /> : <Navigate to="/" replace />}
        />
        <Route path="/admin/application"
        element={
          isAuthentificated ?
          <AdminPageApplication
          users={users} 
          messages={messages}
          goToEditApplication = {goToEditApplication}
          goToUsers={goToUsers}
          /> : <Navigate to="/" replace />}
        />
        <Route path="/admin/application/edit/:id"
        element={
          isAuthentificated ?
          <AdminPageApplicationEdit
          goToUsers={goToUsers}
          goToAdminAplication = {goToAdminAplication}
          messages={messages}
          /> : <Navigate to="/" replace />}
        />
        <Route path="/cabinet/myapplication/:id"
        element={
          isAuthentificated ?
          <MyApplications
          messages={messages}
          workername={workername}
          goToApplication={goToApplication}
        /> : <Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
};

export default App
