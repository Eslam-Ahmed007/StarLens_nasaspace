import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import "./Destination.css"

export const Destination = () => {


  return (
    
    <div>
            <div className="destinationcontainer">
                <div className="destlanding">

                    <div className="spacedestination"></div>

                    <h1 className='desttitle'  >Your destination -Kepler 16</h1>
                    <Link to="/setoff" >  <button>Set Off</button>    </Link>
                   

                
                </div>
                <div className="destinfo">

                <div className="spacedestination"></div>
               

                    <div className="f-sec-dest">
                        <img src="src\assets\Vector.png" alt="" />
                        <p>Kepler-16 is a fascinating exoplanet system located about 200 light-years from Earth, within the constellation <strong>Cygnus</strong> . What makes Kepler-16 particularly intriguing is that it orbits not one, but two stars, making it a <strong>circumbinary planet</strong> . </p>
                        <br />
                        <p>The discovery of Kepler-16b in 2011 by NASA’s Kepler Space Telescope expanded our understanding of planetary systems, proving that planets can exist in binary star systems!</p>
                    </div>

                    <div className="n2nd-sec-dest">
                        
                    <div className="edu-title kidtitle">
                        <h1><img src="src\assets\Vector (2).png" alt="" />Surprising facts about Kepler 16</h1>
                    </div>

                    <p><strong>. Kepler-16b orbits two stars!</strong>  That means if you stood on this planet, you would see two suns in the sky. Imagine watching two sunsets at once—just like Tatooine from Star Wars! </p>
                    <p><strong>. Weighed Like Styrofoam!</strong>Although it’s similar in size to Saturn, Kepler-16b is made up mostly of gas, so it’s much lighter than you'd think! Its density is so low that if you could place it in a giant ocean, it might float, just like a balloon or a piece of styrofoam!  </p>
                    <p><strong>. No Solid Ground to Walk On! </strong> Kepler-16b is a gas giant, meaning it doesn’t have a solid surface like Earth. If you tried to land there, you would keep falling through its clouds of gas, similar to how Jupiter and Saturn are structured.                    </p>
                    <p><strong>. Not a Likely Place for Life</strong>While Kepler-16b may have two suns, it’s probably not a place where aliens live. The cold temperatures and gas composition make it unlikely for life as we know it to survive there. But its unique double-star system makes it one of the most fascinating planets we’ve discovered! </p>
                    <p><strong>. Real-Life Star Wars Planet</strong>  Fans of Star Wars will love this: Kepler-16b is often compared to Tatooine, the desert planet where Luke Skywalker grew up. While Kepler-16b isn't a desert planet, the fact that it orbits two suns gives it a real sci-fi feel!</p>
         
                        <h2> <img src="src\assets\Vector (3).png" alt="" /> You can always know more  <Link to="/educational"><a>in Educational</a></Link>! </h2>

                    </div>

                    <div className="ayyklam"></div>

                </div>  {/**destinfo */}          
           
           
           
           
            </div>
    </div>
  )

}
