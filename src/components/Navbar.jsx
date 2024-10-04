import React , {useEffect, useState} from 'react'
import { Link , NavLink } from 'react-router-dom'
import "./Navbar.css"
export const Navbar = () => {
      const [menuOpen ,setmenuOpen ] = useState(false);
      const [sticky , setsticky] = useState(false);

      useEffect( ()=> {
        window.addEventListener('scroll' ,()=>{ 
          window.scrollY> 250 ? setsticky(true)  : setsticky(false)
        }  )
      } , []);
  return (
    <nav  className= { sticky ? 'dark-nav' : ''  }> 
        <Link className='title' to="/" ><img src="src/assets/logo.png" alt="" /></Link>
        <div className='menu'  onClick={ () => 
          {
            setmenuOpen(!menuOpen)
          }
        } >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul  className={menuOpen ? "open" :""}>
            <li>
            <NavLink to="/" >Home</NavLink>
            </li>
            <li>
            <NavLink to="/educational" >Educational</NavLink>
            </li>
            <li>
            <NavLink to="/posts" >Posts</NavLink>
            </li>
            <li>
            <NavLink to="/vr" >VR Exp</NavLink>
            </li>
            <li>
            <NavLink to="/support" >Support</NavLink>
            </li>
            <li>
            <NavLink to="/about_us" >About us</NavLink>
            </li>
      
        </ul>

        <div className='profile-pic'>
          <img src="src\assets\Ellipse1.png" alt="" />
          <p>Hi ,<br />Eslam  </p>
          </div>
       
      
    </nav>
  )  
}
