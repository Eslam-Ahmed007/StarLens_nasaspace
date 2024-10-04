import React from 'react'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { About_us , Home , Educational , Posts , Support} from './components/pages' ; 
import { Fotter } from './components/fotter';
import { Destination } from './components/pages/Destination';
import Game from './components/pages/Game';
import Setoff from './components/pages/Setoff';
import VR from './components/pages/VR';




const App = () => {
  return (

    <div className='App'>
      <Navbar/>
      <Routes>
      <Route  path="/" element = { <Home/> } /> 
      <Route  path="/About_us" element = { <About_us/> } /> 
      <Route  path="/educational" element = {<Educational/> } /> 
      <Route  path="/posts" element = { <Posts/> } /> 
      <Route  path="/support" element = { <Support/> } /> 
      <Route path="/destination"  element= { <Destination/> } />
      <Route path="/game"  element= { <Game/> } />
      <Route path="/setoff"  element= { <Setoff/> } />
      <Route path="/vr"  element= { <VR/> } />
      </Routes>
      <Fotter/>
      
      
      
      
    </div>

  )
}

export default App