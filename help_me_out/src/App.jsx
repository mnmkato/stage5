import './App.css'
import * as React from "react";
import { HashRouter , Routes, Route} from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
