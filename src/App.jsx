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
import SupportChatPage from './components/SupportChatPage.jsx';

const users = [
  { id: 1, username: 'user1', password: 'pass1', profession: 'Глава финансов', firstName:"Иван", middleName: "Иванович", lastName: "Иванов", workername: 'Иван Иванов Иванович', email: 'xxxxxxxx@mail.ru', phone: '+7949XXXXXXXX', birthDay: 11, birthMonth: 6, birthYear: 1996, state: 'M', passport: 243454, inn: 332131, snils: 3213213, oms: 231321312, driverLicense: 32131, salary: 60500, days: 5,
    supportBanner:[{id: 1, sender: "Иван Иванович Иванов", Active: true,
      chat:[{id:1, messages:"dsadasdas", timestamp: 1, sender: 'Подержка'}]
    }]},
    { id: 2, username: 'user2', password: 'pass2', profession: 'Глава финансов', firstName:"Василий", middleName: "Васильевич", lastName: "Василий", workername: 'Иван Иванов Иванович', email: 'xxxxxxxx@mail.ru', phone: '+7949XXXXXXXX', birthDay: 11, birthMonth: 6, birthYear: 1996, state: 'M', passport: 243454, inn: 332131, snils: 3213213, oms: 231321312, driverLicense: 32131, salary: 60500, days: 5,
      supportBanner:[{id: 2, sender: "Иван Иванович Иванов", Active: true,
        chat:[{id:1, messages:"dsadasdas", timestamp: 1, sender: 'Подержка'}]
      }]},
];

const messages = [
  {id: 1, shortpage: "Поломка компьютера", type: "Поломка компьютерного оборудования", status: "Выполнена", text: "У рабочего неожиданно перестал работать компьютер. Он пытался перезагрузить систему, но экран так и остался чёрным. Сначала подумал, что проблема в проводах, но все было подключено правильно. Включил его в другой розетке, но это не помогло. Решил проверить блок питания, но и он работал нормально. Попробовал включить ПК в безопасном режиме, но и это не дало результата. Рабочий запаниковал и позвонил в сервис, чтобы узнать причину. Специалисты сообщили, что у него сгорела видеокарта, и потребуется заменить часть комплектующих.", otschet: "", sender: "Иван Иванович Иванов", location: "цех1",  
    chat:[{id: 1, message: "Здраствуйте неработает компьютер", timestamp: 1, sender: "Вова" }
    ]}, 
    {id: 2, shortpage: "Поломка компьютера", type: "Перепад электроэнергии", status: "Выполнена", text: "Компьютер сломан нужна замена частей", otschet: "", sender: "Иван Иванович Иванов", location: "цех1",  
      chat:[{id: 1, message: "Здраствуйте неработает компьютер", timestamp: 1, sender: "Иван Иванов Иванович" }
      ]} ,
    {id: 3, shortpage: "Поломка компьютера", type: "Поломка рабочего компьютера", status: "Выполнена", text: "Компьютер сломан нужна замена частей", otschet: "", sender: "Иван Иванович Иванов", location: "цех1",  
      chat:[{id: 1, message: "Здраствуйте неработает компьютер", timestamp: 1, sender: "Иван Иванов Иванович" }
      ]} 
];


function App() 
{

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
const goToSupportChat = (id) => 
  {
    navigate(`/support/chat/${id}`);
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
  const user = users.find(u => u.username === username);

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

              setUsername={setUsername}
              setPassword={setPassword}
    
              firstName={firstName}
              lastName={lastName}
              middleName={middleName}
              birthDay={birthDay}
              birthMonth={birthMonth}
              birthYear={birthYear}
              email={email}
              phone={phone}
              state={state}
            /> : <Authorizationpage handleLogin={handleLogin} />}
        />
        <Route path="/cabinet/:id/documents"
          element={
            isAuthentificated ? 
            <Cabinetpagedocuments 
              goToCabinet={goToCabinet} 
              goToWork={goToWork}

              passport={passport}
              inn={inn}
              snils={snils}
              oms={oms}
              driverLicense={driverLicense}
            /> : <Authorizationpage handleLogin={handleLogin} />}
        />
        <Route path="/cabinet/:id/work"
          element={
            isAuthentificated ? 
            <Cabinetpagework 
              goToDock={goToDock} 
              goToCabinet={goToCabinet} 

              salary={salary}
              days={days}
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
        <Route path="/support/chat/:id"
        element={
          isAuthentificated ?
          <SupportChatPage
          users={users}
          /> : <Authorizationpage handleLogin={handleLogin}/>}
        />
      </Routes>
    </div>
  );
};

export default App
