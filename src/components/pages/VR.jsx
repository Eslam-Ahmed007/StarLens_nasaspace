import React , { useState , Suspense} from 'react'
import "./Setoff.css"
import { Canvas } from '@react-three/fiber';
import { Environment, Example, OrbitControls } from '@react-three/drei';
import Moon from './Moon';
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./Vr.css"

const VR = () => {
  return (
    <div>
             <div className="d3container"> 
        <div className="setoff-title">
          <h1>Kepler 22 b</h1>
        </div>
        <div className="moon-sec">
        <Moon />
        </div>
        <div className="moonsky">
          <video src="src\assets\starmap_2020_tour_1080p30.mp4" autoPlay muted loop  ></video>
        </div>
        <div className="moonspace">
          
        </div>
        
    
       </div>
    </div>
  )
}

export default VR