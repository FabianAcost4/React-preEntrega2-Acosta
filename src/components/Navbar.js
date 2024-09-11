import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navBar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">Marcas</Link>
      <Link to="/category/electronics">Electronica</Link>
      <Link to="/category/clothing">Ropa</Link>
      <Link to="/cart">Carrito </Link>
    </nav>
  );
}

export default Navbar;
