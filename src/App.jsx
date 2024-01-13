import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Profile from "./pages/profile";
import Header from "./components/header";
import About from "./pages/About";

export default function App() 
{
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} Route/>
        <Route path='/signin' element={<SignIn/>} Route/>
        <Route path='/signup' element={<SignUp/>} Route/>
        <Route path='/profile' element={<Profile/>} Route/>
        <Route path='/about' element={<About/>} Route/>
      </Routes>
    </BrowserRouter>
    
  )
}