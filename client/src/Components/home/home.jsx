import React from 'react' ;
import './home.css'
// import {Link} from 'react-router-dom'
import arrow_btn from '../../Assets/arrow_btn.png'
import { useNavigate } from 'react-router-dom'
const Home = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  const navigate = useNavigate();
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <div className="hero-text2">
        <p>{heroData.text2}</p>
        </div>
        
      </div>
      <div className="hero-about" >
        <p>Download Sample Data</p>
        <a href="https://docs.google.com/document/d/1TeLZ-AC535_Vdl32lnT9d-AuuOF4OF0g/edit?usp=
        sharing&ouid=116673282843835837563&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
        <img src={arrow_btn} alt="" />
        </a>
        <button onClick={()=> navigate ("/features")} className="sample-button">Predict</button>
        

      </div>
      <div className="hero-play">
        <ul className="hero-dots">
          
        </ul>
      </div>
    </div>
  )
}

export default Home
