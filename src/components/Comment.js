import React, { useState} from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';

const Comment = ({ isLoggedIn}) => {
  // const location = useLocation();
  const navigate = useNavigate();
  const { userEmail } = useUserContext();
  // const userEmail = location.state?.userEmail;
  const [answers, setAnswers] = useState('');

  console.log("Comment userEmail:", userEmail);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      // const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
      const currentDate = new Date().toISOString().split('T')[0];
      
      const data = {
        answers: answers,
        date: currentDate,
        userEmail: userEmail,
      };

      console.log('Data to be submitted:', data);
      console.log(isLoggedIn)
      // Send a POST request to the backend

      if(!isLoggedIn) {
        navigate('/login')
      }

      const response = await fetch('http://localhost:3001/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok && isLoggedIn) {
        navigate("/")
        console.log('Data submitted successfully');
        
      } else {
        console.error('Error submitting data');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };


  return (
    <div>
        <h1>
            Comments 
        </h1>
        <form id="comment-form">
            <textarea id="comment" placeholder='Type your comment...' name="comment" required value={answers}
            onChange={(e) => setAnswers(e.target.value)}></textarea>
            <div>

            <button type="submit" onClick={handleSubmit}>Submit Comment</button>
            </div>
        </form>
    </div>
  )
}

export default Comment  