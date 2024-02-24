import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner'
import {Skills} from './components/Skills'
import {Contact} from './components/Contact'
import {Projects} from './components/Projects'
//import { Route, Routes } from 'react-router-dom';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Fullstack from './components/Fullstack';
import Home from './components/Home';
import Login from './components/Login';
import { UserProvider } from './components/UserContext';
import SignUp from './components/SignUp';
import Comment from './components/Comment';
import Footer from './components/Footer';





function App() {
  // return (
  //   <div className="App">
  //     <NavBar />
  //     <Banner />
  //     <Skills />
  //     <Projects />
  //     <Contact />
  //     <Routes>
      
  //       <Route path='/fullstack' element={<Fullstack />}/>
  //     </Routes>
  //     </div>

    

    
  // );

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  return (
    <div className="App">
      <UserProvider>
      <Router>
      {/* {isLoggedIn && <Fullstack isLoggedIn={isLoggedIn} />} */}
      <Routes>
        {/* <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact /> */}
        <Route path='/' element={<Home />} exact />

        {/* <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          /> */}
        {!isLoggedIn && <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />}
                    
        <Route path='/signup' element={<SignUp />} exact />

        <Route path="/fullstack" element={<Fullstack isLoggedIn={isLoggedIn} userEmail={userEmail} />} />
        
        

      </Routes>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;