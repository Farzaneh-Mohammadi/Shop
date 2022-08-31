import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartProvider";
import "./Navbar.css";

import { IconContext } from "react-icons";
import { GrHomeRounded } from "react-icons/gr";
import { BsCart2 } from "react-icons/bs";
import { IoIosCheckboxOutline } from "react-icons/io";


const Navbar = () => {
  const { cart, save } = useCart();

  return (
    <header>




      <nav className="navContainer">
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

               Home
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

               Cart
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
               Save List
              <span className="nav-cartBadge2">{save.length}</span>
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
