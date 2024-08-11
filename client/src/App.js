// src/App.js
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/home/home'
import Diabetes from './Components/Diabetes'; 
import Navbar from './Components/Navbar/Navbar'; 
import About from './Components/About';
import './Components/Navbar/Navbar.css';
import './App.css';
import Background from './Components/Background/Background';

function App() {

    let heroData = [
        {text1:'Dive into', text2: 'what you love'},
        {text1:'Indulge', text2: 'your passion'},
        {text1:'Give in to ', text2: 'your passion'},
    ]
    const[heroCount, setHeroCount] = useState(0);
    const[playStatus, setPlayStatus] = useState(false);



    const router = createBrowserRouter([
        {
            path: "/",
            element: <><Navbar/><Home
            setPlayStatus={setPlayStatus}
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
            playStatus={playStatus}
            /></>
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
       <Background playStatus={playStatus} heroCount={heroCount}/>
       <RouterProvider router={router}/>
       {/* <Home/> */}
       {/* <Diabetes/> */}
       </>
    );
}

export default App;
