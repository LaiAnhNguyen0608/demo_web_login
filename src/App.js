import React, {useState} from "react";
import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Home } from "./components/Home";
import { Navi } from "./components/Navigation/Navi";
import { Outlet } from "react-router-dom";
import AuthDetails from "./components/auth";

function App() {


  const [isLogin,setIsLogin] =useState(true);
  return (
    <div className="App">
      <AuthDetails/>
      
      <div className='app-header'>
        <Navi/>
        
      </div>
      <div className='app-content'>
        <Outlet/>
        {/*app content*/}
      </div>
    </div>
  );
}
export default App;
