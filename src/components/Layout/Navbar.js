import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"


const Navbar = () => {
  return (
    <header>
        <nav className={styles.navContainer}>
            <ul className={styles.navLeft}>
                <li>
                    <NavLink to="/" style={{fontWeight: "500", fontSize: "18px"}}>Home</NavLink>
                </li>
                <li>
                <NavLink to="/cart" style={{fontWeight: "500", fontSize: "18px"}}>Cart</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar