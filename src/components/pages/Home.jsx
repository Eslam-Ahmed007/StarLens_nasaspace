import React, { useRef } from 'react'
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import "./Home.css"
export const Home = () => {

  const slider =useRef()
  let tx = 0 ;
  const slideforward = ()=>{
    if (tx > -50)
    {
      tx -= 33 ;
    }
    slider.current.style.transform = `translateX(${tx}%)` ;
  }
  const slidebackward = ()=>{ 
    if (tx < 0)
    {
      tx += 33;
    }
    slider.current.style.transform = `translateX(${tx}%)` ;
  }

  return (
    <div>
      <div className="container">
          
        <div className="mainboxhome">
        <h2>Your Destination To Explore</h2>
        <h1>SPACE</h1>
       <Link  to="/destination"><button>Get Started</button>  </Link>
        </div>
        {/* sec1  Destination*/}
        <div className="Destination">
              <div className="Destitle">
              <span className='Three' >Three</span> <span > Steps to set off</span>
              </div>
              <div className="Destcontain">

                <img  className='destfimg' src="src\assets\Rectangle.png" alt="" />
                <div className="deschosse">
                  <p>1.Choose your destination</p>   <button>Show all</button>
                </div>

                  <img src="src\assets\back-icon.png" alt=""  className='destlbutton'    onClick={slidebackward} />
                  <img src="src\assets\next-icon.png" alt=""  className='destrbutton'    onClick={slideforward} />

                  <div className="destslider">
                      <ul ref={slider}>
                        <li>
                        <div className="destcard">
                           <img src="src/assets/image42.png" alt="" />
                           <a href="">Kelper 62f</a><span></span>
                        </div>
                        </li>
                        <li>
                        <div className="destcard">
                           <img src="src/assets/image47.png" alt="" />
                           <a href="">Trappist le </a><span></span>
                        </div>
                        </li>
                        <li>
                        <div className="destcard">
                           <img src="src/assets/image44.png" alt="" />
                           <a href="">Kepler 22b</a><span></span>
                        </div>
                        </li>
                        <li>
                        <div className="destcard">
                           <img src="src/assets/image41.png" alt="" />
                           <a href="">Kepler 16</a><span></span>
                        </div>
                        </li>
                         <li>
                            <div className="destcard">
                           <img src="src/assets/image46.png" alt="" />
                           <a href=""> GJ504 B</a><span></span>
                            </div>
                        </li>
                        <li>
                        <div className="destcard">
                           <img src="src/assets/image44.png" alt="" />
                           <a href="">Kepler 22b</a><span></span>
                        </div>
                        </li>


                      </ul>
                  </div>
              


              </div>

        </div>
        {/* Educate your self */}
        <div className="educate">

            <div className="edupalnet">
           
              <h1 className='titlesec'>2.Educate yourself</h1>
              <img className='eduimg1' src="src\assets\Rectangle1.png" alt="" />
              <img  className='eduimg2'  src="src\assets\Rectangle2.png" alt="" />
              <img  className='eduimg3' src="src\assets\Rectangle3.png" alt="" />

            </div>

            <div className="eduinfo">
              <img src="src\assets\Rectangle4.png" alt="" />
              <span>Info you may consider before setting off</span>
              <h3>Potential for Life</h3>
              <p>While no signs of life have been detected, its location in the habitable zone means it might host microbial life or even more complex organisms, depending on environmental factors.</p>
              <h3>Surface & Water</h3>
              <p>Kepler-62f is thought to possibly have oceans and may even be a water world. There could be vast, deep oceans covering much of the planet, although solid land may also exist.
              Bring swimming gear just in case!</p>
              <h3>Communication & Return</h3>
              <p>Since Kepler-62f is 1,200 light-years away, messages back to Earth would take 1,200 years to arrive. So, pack for a long stay or prepare for very delayed communication with home!</p>
              <h3 className='lasth3'>If you want to know more information about Kepler 62f or other destinations, please visit <Link to="/educational" > <a href="">Educational</a></Link> . </h3>
            </div>
 
        </div>

        {/* Explore */}
        <div className="explore">
          <h1 className='titlesec'>3.Explore the surroundings</h1>
          <div className="expbox">
            <span className='nowb'>NOW, </span><span>you’re ready to <Link to="/destination" > <a href="">set off</a> </Link> </span>
           
            </div>
        </div>  

        {/* <div className="fotter">
          <div className="left">
            <p>Follow us on</p>
            <img src="src\assets\social.png" alt="" />
            <p>@2024 | Nasa space apps | Horizon</p>
          </div>
          <div className="right">
            <ul>
              <li>Cookies settings</li>
              <li>privacy policy</li>
              <li>Terms of use</li>
            </ul>
            <p>By using this site you agree to the terms of use and privacy policy</p>
          </div>
        </div> */}



        </div>
    </div>
  )
}

