import React from 'react'
import "./Fotter.css"

export const Fotter = () => {
  return (
    <div className="fotter">
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
        </div>
  )
}
