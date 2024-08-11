import './home.css'
import {Link} from 'react-router-dom'
import arrow_btn from '../../Assets/arrow_btn.png'
import play_icon from '../../Assets/play_icon.png'
import pause_icon from '../../Assets/pause_icon.png'
const home = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-about" >
        <p>Explore the App</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero-play">
        <ul className="hero-dots">
          {/* <li onClick={()=>setHeroCount(0)}  className={heroCount===0?'hero-dot orange':"hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)}  className={heroCount===1?'hero-dot orange':"hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)}  className={heroCount===2?'hero-dot orange':"hero-dot"}></li> */}
        </ul>
      </div>
    </div>
  )
}

export default home
