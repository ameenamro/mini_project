import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import Add from './companants/Add'
import Feach from './companants/Feach'
import Login from './companants/login'
import Mypage from './companants/Mypage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './companants/Navbar'


function App() {
  // const [count, setCount] = useState(0)

  return (

   
<Router>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/Mypage" element={<Mypage></Mypage>} />

      </Routes>
    </Router>

  )
}

export default App
