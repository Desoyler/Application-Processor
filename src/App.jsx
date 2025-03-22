import { useState } from 'react'

import './App.css'
import Authorizationpage from './components/Authorizationpage.jsx'
import Siteheader from './components/Siteheader.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="mainconteiner">
      <Siteheader />
      <Authorizationpage />
    </div>
  );
};

export default App
