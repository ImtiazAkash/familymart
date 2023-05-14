import React, { useState } from "react";
import Class from "../../styles/NavandSidebar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assests/images/logo3.png";
import {BsCaretDown} from "react-icons/bs"
import {useMediaQuery} from 'react-responsive'
import { Outlet } from "react-router-dom";

function NavandSidebar({children}) {

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const isMobile = useMediaQuery({maxWidth: 600})

  function openDropdown() {
    setDropdown(!dropdown);
  }
  function openSidebar() {
    setOpen(!open);
    // if (document.getElementById("mySidebar").style.width === "250px") {
    //   document.getElementById("mySidebar").style.width = "0";
    //   document.getElementById("content").style.marginLeft = "0"
    // } else {
    //   document.getElementById("mySidebar").style.width = "250px";
    //   document.getElementById("content").style.marginLeft = "250px";
    // }
  }

  return (
    <div>
      <div className={Class.Navbar}>
        <div className={Class.logo}>
          <img src={logo} alt="" />
          <button id="openbtn" className={Class.openbtn} onClick={openSidebar}>
            ☰
          </button>
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
      <div className={Class.container}>

        {/* Here comes the sidebar  */}
        <div className={open ? `${Class.sidebar} ${Class.showSidebar}` : `${Class.sidebar}`} id="mySidebar">
          <Link className={`${Class.link} ${Class.active}`} to="dashboard" onClick={openSidebar}>
            Dashboard
          </Link>
          <Link className={Class.link} onClick={openDropdown}>
            Products <BsCaretDown />
          </Link>

          <div className={dropdown ? Class.showDropdown : Class.hideDropdown}>
          <Link to="products" className={Class.link} onClick={openSidebar}>All Products</Link>
            <Link to="addProduct" className={Class.link} onClick={openSidebar}>Add Product</Link>
            <Link to="categories" className={Class.link} onClick={openSidebar}>Categories</Link>
          </div>
          <Link className={Class.link} to="orders" onClick={openSidebar}>
            Orders
          </Link>
          <Link className={Class.link} to="customers" onClick={openSidebar}>
            Customers
          </Link>
          <Link className={Class.link} to="statistics" onClick={openSidebar}>
            Statistics
          </Link>
        </div>

        {/* here comes the content  */}
        <div className={open ? `${Class.content} ${Class.shrinkContent}` : `${Class.content}`} id="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default NavandSidebar;
