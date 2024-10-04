import React from 'react'
import "./Posts.css"

export const Posts = () => {
  
  return (

     <div>
         <div className="container-post">
          <div className="postlanding">
            <h1>Explore, share, and communicate!</h1>
            <button>Share Now</button>
          </div>

          
      

          <div className="post-sec">

                <div className="post-item">
                    <div className="post-nav">

                      <div className="lpost-nav">
                        <img src="src\assets\Ellipse 11.png" alt="" />
                        <span className='post-usern'>Emilly Smith</span> <span className='post-usere' >@emillysmith.17h</span>
                      </div>
                      <div className="rpost-nav">
                        <img src="src\assets\Vector (4).png" alt="" />
                      </div>
                      
                    </div>

                    <p>Hey guys, <br/> check this one, I think I’ve just come across a new constellation!! it was super fun to try to catch one!</p>
                  
                    <div className="post-img">

                    <img className='postimg' src="src\assets\image 18.png" alt="" />
                    <img  className='postdraw' src="src\assets\Vector (5).png" alt="" />

                    </div>
                </div>


                <div className="post-item">
                    <div className="post-nav">

                      <div className="lpost-nav">
                        <img src="src\assets\Ellipse 12.png" alt="" />
                        <span className='post-usern'>George william</span> <span className='post-usere' >@georgewilliam.20h</span>
                      </div>
                      <div className="rpost-nav">
                        <img src="src\assets\Vector (4).png" alt="" />
                      </div>
                      
                    </div>

                    <p>I Worked hard to find this one! I think this is Aquila, it looks fabulous <br /> and you guys see this shooting star!!!! GREAT coincidence  </p>
                  
                    <div className="post-img">

                    <img className='postimg' src="src\assets\image 19.png" alt="" />
                    <img  className='postdraw' src="src\assets\Vector (6).png" alt="" />

                    </div>
                </div>



          </div>


         </div>
    </div>
  )
}
