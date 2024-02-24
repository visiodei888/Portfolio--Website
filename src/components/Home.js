import React from 'react';
import {NavBar} from './NavBar';
import {Banner} from './Banner';
import {Skills} from './Skills';
import {Projects} from './Projects';
import {Contact} from './Contact';



function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    
    </>
  );
}

export default Home;