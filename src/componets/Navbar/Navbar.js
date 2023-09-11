import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";

import TotalItems from "../CartContent/TotalItems";

import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <Link to={"/"}>
          <h1 className='navbar-logo'>Inicio</h1>   
        </Link>
        <Link to={"nosotros"}>
          <h1 className='navbar-logo'>Nosotros</h1>
        </Link>
        <Link to={"Iniciarsecion"}>
          <h1 className='navbar-logo'>Iniciar secion</h1>
        </Link>
        <Link className='seeCarrito' to={"/cart"}>
          🛒
          {cart.length > 0 ? <TotalItems /> : null}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
