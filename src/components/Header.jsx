import React, { useContext } from "react";
import "../assets/css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="header">
      <div className="title">
        <Link to="/">
          <h1>Tienda de Stickers</h1>
        </Link>
      </div>
      <div className="cart">
        <Link to="/cart" className="btn-cart">
          {cart.length != 0 ? (
            <span className="cart-quantity">{cart.length}</span>
          ) : (
            ""
          )}
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
};

export default Header;
