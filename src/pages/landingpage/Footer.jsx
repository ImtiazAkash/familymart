import React from 'react'
import Class from "../../styles/Footer.module.css"

function Footer() {
  return (
    <footer className={Class.footer}>
      <div className={Class.container}>
        <div className= {Class.footerContent} >
          <p className= {Class.footerInfo} >
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <nav className= {Class.footerLinks} >
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer