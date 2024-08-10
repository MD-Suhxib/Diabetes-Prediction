// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home' 
import Diabetes from './Components/Diabetes'; 
import Navbar from './Components/Navbar'; 
import './Navbar.css';
import './App.css';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path : "/Dia",
            element: <Diabetes/>
        },

    ])
    return (
        <>
       <Navbar/>
       <RouterProvider router={router}/>
       <Home/>
       <Diabetes/>
       </>
    );
}

export default App;
