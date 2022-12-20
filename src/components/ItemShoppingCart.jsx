import React, { useContext } from "react";
import "../assets/css/ItemShoppingCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemCart = ({ nombre, img, precio, position, id, quantity, product }) => {
  const { removeCart } = useContext(CartContext);
  return (
    <div className="item-cart">
      <div className="item-cart-img">
        <Link to={`/product/${id}`}>
          <img src={img} alt={nombre} />
        </Link>
      </div>
      <div className="item-cart-info">
        <Link to={`/product/${id}`}>
          <h2>{nombre}</h2>
          <h3>${precio}</h3>
        </Link>
        <h6 className="quantity">x{quantity}</h6>
      </div>
      <div className="item-cart-remove">
        <button onClick={() => removeCart(position, product)}>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
