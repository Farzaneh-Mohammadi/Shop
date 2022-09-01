import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartProvider";
import "./Navbar.css";

import { IconContext } from "react-icons";
import { GrHomeRounded } from "react-icons/gr";
import { BsCart2 } from "react-icons/bs";
import { IoIosCheckboxOutline } from "react-icons/io";
import { useState } from 'react';


const Navbar = () => {

  const [fix, setFix] = useState(false)

  const { cart, save } = useCart();

function setFixHandler() {
  if(window.scrollY >= 5){
    setFix(true)
  } else {
    setFix(false)
  }
}


window.addEventListener("scroll", setFixHandler)

  return (
    <header>

      <nav className={fix ? "fixed" : "navContainer"}>
        <ul className="navLeft">
          <li className="nav-li">
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? "nav-active-link" : ""
              }
              style={{ fontWeight: "500", fontSize: "18px" }}
            >
                <IconContext.Provider value={{ size: "20px"}}>
                <GrHomeRounded />    </IconContext.Provider>
                <span  className="navSpan"> Home </span>

               
            </NavLink>
          </li>



          <li className="nav-li">
            <NavLink
              to="/cart"
              className={(navData) =>
                navData.isActive ? "nav-active-linkk" : ""
              }
              style={{ fontWeight: "500", fontSize: "18px" }}
            >
               <IconContext.Provider value={{ size: "20px"}}>
               <BsCart2 />  </IconContext.Provider>
<span  className="navSpan">  Cart </span>
             
              <span className="nav-cartBadge">{cart.length}</span>
            </NavLink>
          </li>



          <li className="nav-li">
            <NavLink
              to="/save"
              className={(navData) =>
                navData.isActive ? "nav-active-linkk" : ""
              }
              style={{ fontWeight: "500", fontSize: "18px", alignItems: "center" }}
            >
                   <IconContext.Provider value={{ size: "20px"}}>
                   <IoIosCheckboxOutline /> </IconContext.Provider>
              
               <span  className="navSpan">   Save List </span>
              <span className="nav-cartBadge2">{save.length}</span>
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
