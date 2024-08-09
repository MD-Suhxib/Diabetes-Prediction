// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'client/src/Components/Home.js' 
import Diabetes from './Components/Diabetes'; // Import PredictionPage component
import NavBar from './Components/Navbar'; // Import NavBar component

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar /> {/* Include the NavBar here */}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/predict" component={Diabetes} />
                    {/* Add more routes as needed */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
