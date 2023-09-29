import './App.css'
import * as React from "react";
import { HashRouter , Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Repo from './pages/repo';

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/repository" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Repo/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
