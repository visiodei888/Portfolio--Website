import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import './signup.css'; // Import the CSS file
import { redirect, useNavigate } from 'react-router-dom';
// import Navbar from './Navbar'; 
import { useUserContext } from './UserContext';
import { Link } from 'react-router-dom';

import axios from 'axios'

const Login = ({ setIsLoggedIn, isLoggedIn}) => {
  const navigate = useNavigate();
  const { setUserEmailContext } = useUserContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://portfolio-backend-sy44.onrender.com/auth/login', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.data;
  
      
      if (response.data) {
        console.log('User logged in successfully:', data);
       
        const userEmail = data.data.email;
        setUserEmailContext(userEmail);

        setIsLoggedIn(true);
        navigate('/fullstack'); 
    } else {
      console.error('Error logging in:', data.error);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};
      //   navigate('/tracknow', { state: { userEmail } });
      // } else {
      //   console.error('Error logging in:', data.error);
        
      // }
      
    
      
  //     if (userEmail) {
  //       console.log('Navigating to /tracknow with userEmail:', userEmail);
  //       navigate('/fullstack', { state: { userEmail } });
  //     } else {
  //       console.error('User email is undefined or null');
  //     }
  //   } else {
  //     console.error('Error logging in:', data.error);
  //   }
  //   } catch (error) {
  //     console.error('Error:', error.message);
      
  //   }
  // };
  
  
  return (
    <div className="bg-div">
    <div className='c-div' style={{backgroundImage: "url('/w.png')"}}>
    <div className="form-container">
        <form onSubmit={handleLogin}>
          <div className="button-container">
          <button className="google-btn" style={{backgroundImage: "url('/google-color-icon.png')"}} type='button'>
          </button>
          <button className="google-btns" style={{backgroundImage: "url('/apple-icon.png')"}} type='button'>
          </button>
          </div>
          <h6 className='continue'>---------------------Or continue with------------------------</h6>
          
          <div className="form-group">
            <input type="email" placeholder="Email" className="wide-input" value={email}
              onChange={handleEmailChange} />
          </div>
          <div className="form-groups">
            <input type="password" placeholder="Password" className="wide-input" value={password}
              onChange={handlePasswordChange} />
          </div>
          <button type="submit">Login</button>
          
          <h6 className='member'>Not a member? <Link to="/signup">Sign Up</Link></h6>
          
        </form>
      </div>
    </div>
  </div>
    
  );
};

export default Login;
