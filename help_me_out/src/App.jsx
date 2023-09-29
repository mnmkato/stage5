import './App.css'
import * as React from "react";
import { HashRouter , Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Repo from './pages/repo';
import Video from './pages/video';

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/repo" element={<Repo/>} />
        <Route path="/video/:id" element={<Video/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
