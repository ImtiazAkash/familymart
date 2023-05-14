import React from 'react'
import Class from "../../styles/Navbar.module.css"
import logo from "../../assests/images/logo3.png"

function Navbar() {
  return (
    <div>
      <div className={Class.Navbar}>
        <div className={Class.logo}>
          <img src={logo} alt="" />
        </div>

        
        <div className={Class["right-side"]}>
          <button className={Class.userbtn} to="#login">
            Login
          </button>
          <button className={Class.userbtn} to="#signup">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar