import React, { useRef } from 'react'
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import "./Educational.css"

export const Educational = () => {
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
      <div className="containery">
            <div className="fedu">
            <img className='backedu-img' src="src\assets\eduactional planets.png" alt="" />
              <div className="space"></div>
             
              <div className="edu-title">
                <h1>scientific books</h1>
              </div>
              <div className="Destcontain  Scientific-book">

<img  className='destfimg' src="src\assets\Rectangle.png" alt="" />
{/* <div className="deschosse">
  <p>1.Choose your destination</p>   <button>Show all</button>
</div> */}

  <img src="src\assets\back-icon.png" alt=""  className='destlbutton'    onClick={slidebackward} />
  <img src="src\assets\next-icon.png" alt=""  className='destrbutton'    onClick={slideforward} />

  <div className="destslider">
      <ul ref={slider}>
        <li>
        <div className="destcard educard">
           <img src="src\assets\image20.png" alt="" />
           <p>The Human Cosmos: <br /> A Secret History of the Stars</p>
           <h3>Jo Marchant - 2020</h3>
        </div>
        </li>
        <li>
        <div className="destcard educard">
           <img src="src\assets\image22.png" alt="" />
           <p>Cosmos</p>
           <h3>Carl Sagan - 1980</h3>
        </div>
        </li>
        <li>
        <div className="destcard educard">
           <img src="src\assets\image88.png" alt="" />
           <p>Exoplanets</p>
           <h3>Michael E. Meyer - 2014</h3>
        </div>
        </li>
        <li>
        <div className="destcard educard">
           <img src="src\assets\image23.png" alt="" />
           <p>The Science of Interstellar</p>
           <h3>Kip Thorne - 2014</h3>
        </div>
        </li>
        <li>
        <div className="destcard educard">
           <img src="src\assets\image25.png" alt="" />
           <p>Black Hole Survival Guide</p>
           <h3>Janna Levin - 2020 </h3>
        </div>
        </li>
        <li>
        <div className="destcard educard">
           <img src="src\assets\image28.png" alt="" />
           <p>Hubble Legacy:<br/>30 Years of Discoveries and Images</p>
           <h3>Jo Marchant - 2020</h3>
        </div>
        </li>
       
        


      </ul>
  </div>



                </div>  {/*Destcontain*/}

              <div className="space"></div>
              <div className="edu-title">
                <img className='cosmoimgtitle' src="src\assets\Rectangle (3).png" alt="" />
                <h1>Best releases on Cosmology</h1>
              </div>

              <div className="cosmology">
                
              <div className="cosmocard">
                 <img src="src\assets\image11.png" alt="" />
                 <p>The Big Picture: <br/> On the Origins of Life, Meaning, and the Universe Itself</p>
                 <h3>Janna Levin - 2020 </h3>
               </div>
 
               <div className="cosmocard">
                 <img src="src\assets\image31.png" alt="" />
                 <p>A Brief History of Time</p>
                 <h3>Stephen Hawking - 1988</h3>
               </div>




              </div>


            </div>  {/*fedu */}


            <div className="secoundedu">

            {/* <div className="space"></div> */}
              <div className="edu-title kidtitle">
                <h1>Best picks for kids<img src="src\assets\Rectangle (2).png" alt="" /></h1>
              </div>

              <div className="edukids">

           
             <div className="cosmocard kidscard">
                 <img src="src\assets\image 32.png" alt="" />
                 <p>Hello, World! Kids' Guides :<br/>Exploring the Solar System </p>
                 <h3>Jill McDonald - 2022</h3>
               </div>
          
 
               <div className="cosmocard kidscard">
                 <img src="src\assets\image 36.png" alt="" />
                 <p>What’s about there?</p>
                 <h3>Lynn Wilson - 1993</h3>
               </div>
               <div className="cosmocard kidscard">
                 <img src="src\assets\image 38.png" alt="" />
                 <p>Sun and moon together</p>
                 <h3>Ethan Long - 2020</h3>
               </div>
 
               <div className="cosmocard kidscard">
                 <img src="src\assets\image 35.png" alt="" />
                 <p>Xo, Exoplanet</p>
                 <h3>Deborah Underwood - 2021</h3>
               </div>
               <div className="cosmocard kidscard">
                 <img src="src\assets\image 40.png" alt="" />
                 <p>Animals in the sky</p>
                 <h3>Sara Gillingham - 2018</h3>
               </div>
 
               <div className="cosmocard kidscard ">
                 <img src="src\assets\image 39.png" alt="" />
                 <p>National Geographic Kids First <br /> Big Book of Space</p>
                 <h3>Catherine D. Hughes - 2012</h3>
               </div>




               </div>  {/* *edukids */}

              <div className="space"></div> 
           
              <div className="mysteriosedu">

              <div className="edu-title mysterioustitle">
              <h1>Find the mysterious Exoplanet!</h1>
              </div>

                <div className="mystermargin"></div>
                <h2>Think, Try, and win</h2>             
                <Link to="/game" > <button>Play Now</button> </Link>

              


              </div>  {/**mysteriosedu */}

            </div>  {/** secoundedu */}
      </div>  {/*containery*/}
    </div>
  )
}
