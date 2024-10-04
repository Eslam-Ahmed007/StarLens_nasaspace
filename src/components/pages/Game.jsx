import React, { useRef, useState } from 'react'
import "./Game.css" 
import { gamedata } from '../../assets/game-data'
import bgvideo from "../../assets/back.mp4"

const Game = () => {
    
    let [index , setindex] = useState(0) ;
    let [ question , setquestion ]= useState(gamedata[index]) ; 
    let [lock ,setlock] =useState(false) ;
    let [score ,setscore] = useState(0)  ;
    let [result ,setresult] = useState(false) ; 
    let [hint , sethint] = useState(0) ;

    let option1 =useRef(null) ;
    let option2 =useRef(null) ;
    let option3 =useRef(null) ;
    let option4 =useRef(null) ;
    const player1 =useRef(null) ;
    const player2 =useRef(null) ;
    const player3 =useRef(null) ;
    let option_array =[option1 ,option2 , option3 ,option4] ;

    const checkAns = (e,ans) => {

        if (lock === false) {

            if (question.ans===ans) {
                e.target.classList.add("game-correct") ;
                setlock(true);
                setscore(prev => prev+1 ) ;
            }
            else
            {
                // e.target.classList.add("game-wrong") ;
                // setlock(true);
                // option_array[question.ans-1].current.classList.add("game-correct")
                 sethint(ans)  ;
                


            }   

        }
    }

    const next = ()=>
    {   
        if (lock ===true)
         {
            if (index === gamedata.length -1 ) 
            {
             setresult(true) ;
             return 0 ;   
            }
            setindex(++index) ;
            setquestion(gamedata[index]) ;
            setlock(false) ;
            option_array.map((option)=> {
            option.current.classList.remove("game-wrong") ;
            option.current.classList.remove("game-correct") ;
            return null ; 
            

            } )
        }
    }

    const reset = ()=>
    {
        setindex(0);
        setquestion(gamedata[0]) ; 
        setscore(0); 
        setlock(false) ;
        setresult(false) 
        sethint(false)       
    }
    
    const closehint = (e)=>
    {
       if (e.target === player1.current) {
        sethint(0)  ;
       }
       if (e.target === player2.current) {
        sethint(0)  ;
       }
       if (e.target === player3.current) {
        sethint(0)  ;
       }
    }

    

  return (

    <div>
        <div className="quiz-container">
            <video src={bgvideo} autoPlay muted loop className="video-bg"  />
            {/* <div className="bg-overlay"></div> */}

            <div className="Quiz-box">

                <h1>Find the mysterious Exoplanet!</h1>
                <hr />
                {result? <></> : <>

                <h2>{index+1}. {question.question} </h2>
                <ul>
                    <li ref={option1} onClick={(e)=>{checkAns(e,1)}} >
                        {/* {question.option1}  */}
                        <div className="kelperoption1">
                            <h3>Kepler 62f</h3>
                            <img src="src\assets\image42.png" alt="" />
                        </div>

                    </li>
                    <li ref={option2} onClick={(e)=>{checkAns(e,2)}} >
                        {/* {question.option2} */}
                        <div className="kelperoption1">
                            <h3>Kepler 22b</h3>
                            <img src="src\assets\image44.png" alt="" />
                        </div>

                    </li>
                    <li ref={option3}  onClick={(e)=>{checkAns(e,3)}} >
                        {/* {question.option3} */}
                        <div className="kelperoption1">
                            <h3>Trappist 1e</h3>
                            <img src="src\assets\image47.png" alt="" />
                        </div>

                    </li>
                    {/* <li ref={option4} onClick={(e)=>{checkAns(e,4)}} >
                        {question.option4}

                    </li> */}
                </ul>
                <button onClick={next} >Next</button>
                <div className="index">{index+1} of {gamedata.length} question</div>
               
                </> }
                
                {result? <> <h2>Yeah you did it</h2>
                {/* <h2>You Scored {score} aut of {gamedata.length}</h2> */}
                <button onClick={reset}>Reset</button>
                </> : <></>}
              

            </div> {/**quiz box */}


            <div className="ayyklam"></div>

                        <div ref={player1} onClick={closehint} className= {`hint ${(hint === 1) ?  "" :"hinthide"  } `} >
                            <div className="hint-box   ">
                            <p>I am larger than Earth but much smaller than gas giants like Neptune!</p>
                             </div>
                        </div>
                        <div ref={player2} onClick={closehint} className= {`hint ${(hint === 2 )?  "" :"hinthide"  } `} >
                            <div className="hint-box  hint-box2">
                            <p>My size is more than twice the Earth’s size, I could fit it inside me many times over!</p>
                             </div>
                        </div>
                        <div ref={player3} onClick={closehint} className= {`hint ${(hint === 3 )?  "" :"hinthide"  } `} >
                            <div className="hint-box hint-box3">
                            <p>I am very close in size to Earth but still counted as smaller with a radius 0.91 times that of Earth!</p>
                             </div>
                        </div>
        </div>

    </div>
  )
} 

export default Game