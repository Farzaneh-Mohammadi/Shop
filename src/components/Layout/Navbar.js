import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartProvider";
import  "./Navbar.css";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <header>
      <nav className="navContainer">
        <ul className="navLeft">
          <li>
            <NavLink to="/"  className={(navData) => navData.isActive ? "nav-active-link" : ""}  style={{ fontWeight: "500", fontSize: "18px" }}>
              Home
            </NavLink>
          </li>


          <li className="nav-li">
            <NavLink  to="/cart"  className={(navData) => navData.isActive ? "nav-active-linkk" : ""}  style={{ fontWeight: "500", fontSize: "18px" }}>
              Cart
              <span className='nav-cartBadge'>{cart.length}</span>
            </NavLink>
          </li>


        </ul>
      </nav>
    </header>
  );
};

export default Navbar;