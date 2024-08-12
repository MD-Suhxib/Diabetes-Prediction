import React from 'react';
import { useNavigate } from 'react-router-dom';
import './predict-but.css';


function PredictionPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Multi-Disease Prediction System</h1>
      <div className="button-group">
      <button onClick={() => navigate('/Dia')} className="predict-button">
        Predict Diabetes
      </button>
      <button className="predict-button">Predict Heart Disease</button>
      <button className="predict-button">Predict Cardiovascular Disease</button>
      <button className="predict-button">Predict Another Disease</button>
      {/* Add more buttons as needed */}
    </div>
    </div>
  );
}

export default PredictionPage;
