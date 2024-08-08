import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    pregnancies: '',
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    diabetesPedigreeFunction: '',
    age: ''
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    setPrediction(data.prediction);
  };

  return (
    <div className="App">
      <h1>Diabetes Prediction System</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pregnancies:
          <input type="number" name="pregnancies" value={formData.pregnancies} onChange={handleChange} required />
        </label>
        <label>
          Glucose:
          <input type="number" name="glucose" value={formData.glucose} onChange={handleChange} required />
        </label>
        <label>
          Blood Pressure:
          <input type="number" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} required />
        </label>
        <label>
          Skin Thickness:
          <input type="number" name="skinThickness" value={formData.skinThickness} onChange={handleChange} required />
        </label>
        <label>
          Insulin:
          <input type="number" name="insulin" value={formData.insulin} onChange={handleChange} required />
        </label>
        <label>
          BMI:
          <input type="number" step="0.001" name="bmi" value={formData.bmi} onChange={handleChange} required />
        </label>
        <label>
          Diabetes Pedigree Function:
          <input type="number" step="0.001" name="diabetesPedigreeFunction" value={formData.diabetesPedigreeFunction} onChange={handleChange} required />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </label>
        <button type="submit">Predict</button>
      </form>
      {prediction !== null && (
        <div>
          <h2>Prediction Result</h2>
          <p>{prediction === 1 ? 'The person is diabetic' : 'The person is not diabetic'}</p>
        </div>
      )}
    </div>
  );
}

export default App;
