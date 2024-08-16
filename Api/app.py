from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

# Load the trained model and scaler
try:
    model = joblib.load('diabetes_model.pkl')
    scaler = joblib.load('scaler.pkl')
except Exception as e:
    print(f"Error loading model or scaler: {e}")
    raise

@app.route('/predict', methods=['POST'])
@cross_origin() 
def predict():
    # Log the request for debugging
    app.logger.debug('Predict endpoint was hit')
    
    # Get the JSON data from the request
    data = request.get_json()

    # Prepare input data for prediction
    input_data = np.array([[
        data['pregnancies'],
        data['glucose'],
        data['bloodPressure'],
        data['skinThickness'],
        data['insulin'],
        data['bmi'],
        data['diabetesPedigreeFunction'],
        data['age']
    ]])

    # Standardize the input data
    standardized_data = scaler.transform(input_data)

    # Make prediction
    prediction = model.predict(standardized_data)

    # Return the prediction result
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
