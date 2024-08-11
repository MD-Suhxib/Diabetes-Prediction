import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="content">
        <h2>About This App</h2>
        <p>
          This app is designed to predict multiple diseases using advanced machine learning algorithms. 
          It's user-friendly and provides quick and accurate results, helping you stay informed about your health.
          Whether you’re looking to understand your risk factors or seeking preventive measures, HealthPredictor offers a user-friendly interface and accurate results to help you make informed decisions about your health. Our goal is to support you in leading a healthier 
          life by providing timely and actionable information.
        </p>
      </div>
    </div>
  );
};

export default About;
