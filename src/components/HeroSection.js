import React from 'react';





function HeroSection() {
  return (
    <div className='hero-container' color='blue'>
      
      <video src='/video-4.mp4' autoPlay loop muted /> 
      <h1>WATER MONITORING SYSTEM</h1>
      <div className='para'>
      <p>OVERVIEW:
The Water Monitoring System is a comprehensive web application designed to efficiently track and manage water consumption. 
It provides users with a suite of features including signup, login, real-time monitoring, historical data analysis, user 
profile management, and helpful tips for water conservation.</p>
<br></br>
<p>Tools Used:
Frontend: React
Backend: Node.js, Express
Database: MySQL </p>
<br></br>
<p>Features:

Signup/Login Pages: Users can securely register and log in to their accounts to access the system's features.
Home Page: Upon logging in, users are greeted with a visually appealing dashboard displaying real-time water usage statistics and conservation tips.
Track Now Page: Users can monitor their current water consumption in real-time, allowing them to make informed decisions about their usage habits.
History Page: Detailed historical data is provided, enabling users to track their water usage patterns over time and identify areas for improvement.
User Profile Details: Users have the ability to manage their profiles, update personal information, and customize settings according to their preferences.
Tips Page: Informative resources and tips are available to educate users on water conservation practices, promoting sustainable behavior.</p>
</div>
    </div>
  );
}

export default HeroSection;
