  import React from 'react';


  import { Link } from 'react-router-dom';
  import Comment from './Comment';

  function Footer({ isLoggedIn, userEmail }) { 
    console.log("Footer userEmail:", userEmail);
    return (
      <div className='footer-container'>
        <Comment isLoggedIn={isLoggedIn} userEmail={userEmail}/>
        {/* {isLoggedIn && <Comment userEmail={userEmail} />} */}
      </div>
    );
  }

  export default Footer;
