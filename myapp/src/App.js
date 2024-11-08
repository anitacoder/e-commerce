import React from "react";
import About from "./Components/about";
import Contact from "./Components/contact";
import Home from "./Components/Home";
import LoginForm from "./Components/loginForm";
import Privacy from "./Components/privacy";
import SignUp from "./Components/signUp";
import Navbar from "./Components/Navbar";
import {HashRouter as Router,Routes,Route} from "react-router-dom";
const App = () =>  {
  return <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/privacy" element={<Privacy/>}/>  
        <Route path="/LoginForm" element={<LoginForm/>}/>  
        <Route path="/Contact" element={<Contact/>}/>  
        <Route path="/SignUp" element={<SignUp/>}/>    
      </Routes>
    </Router>
  </div>
};

export default App;
