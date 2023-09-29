import './App.css'
import * as React from "react";
import { HashRouter , Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
