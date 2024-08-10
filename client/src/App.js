// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/home'
import Diabetes from './Components/Diabetes'; 
import Navbar from './Components/Navbar'; 
import About from './Components/About';
import './Navbar.css';
import './App.css';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <><Navbar/><Home/></>
        },
        {
            path : "/Dia",
            element: <><Navbar/><Diabetes/></>
        },
        {
            path : "/about",
            element: <><Navbar/><About/></>
        },

    ])
    return (
        <>
       {/* <Navbar/> */}
       <RouterProvider router={router}/>
       {/* <Home/> */}
       {/* <Diabetes/> */}
       </>
    );
}

export default App;
