import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import RegisterPaso2 from './components/register/register_paso_2';
import RegisterPaso3 from './components/register/register_paso_3';
import Dashboard from './components/home/dashboard';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/register" element={<Register setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/register_paso_2" element={<RegisterPaso2 setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/register_paso_3" element={<RegisterPaso3 setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/home" element={<Dashboard setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;