import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Navi from './Navi'
import { useUserContext } from './UserContext';


function Fullstack({isLoggedIn}) {
  const { userEmail } = useUserContext();
  
  console.log("Fullstack userEmail:", userEmail);
  console.log(isLoggedIn)
  return (
    <>
      <Navi />
      <HeroSection />
      <Footer isLoggedIn={isLoggedIn} userEmail={userEmail} />
    </>
  );
}

export default Fullstack;