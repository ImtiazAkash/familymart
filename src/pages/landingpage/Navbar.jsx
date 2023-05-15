import React from "react";
import Class from "../../styles/Navbar.module.css";
import logo from "../../assests/images/logo3.png";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

function Navbar() {
  return (
    <div>
      <div className={Class.Navbar}>
        <div className={Class.logo}>
          <span>FamilyMart</span>
        </div>

        <form className={Class.searchContainer}>
          <input className={Class.searchInput} type="text" placeholder="Search..." />
          <button className={Class.searchButton} type="submit">Go</button>
        </form>

        <div className={Class["right-side"]}>
          <button className={Class.userbtn} to="#login">
            <AiOutlineUser />
          </button>
          <button className={Class.cartbtn} to="#signup">
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
