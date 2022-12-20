import React, { useContext } from "react";
import "../assets/css/ItemHome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemHome = ({ img, nombre, medidas, precio, id, product }) => {
  const { addCart } = useContext(CartContext);
  return (
    <div className="col-6 col-md-3 mt-3 item-home">
      <div className="card h-100">
        <div className="card-img-top">
          <Link to={`/product/${id}`}>
            <img src={img} alt={nombre} />
          </Link>
        </div>
        <div className="card-body">
          <Link to={`/product/${id}`} className="card-title">
            <h4>{nombre}</h4>
          </Link>
          <p className="card-subtitle mb-2 text-muted">Medidas: {medidas}</p>
          <div className="price">${precio}</div>
          <button className="add" onClick={() => addCart(product)}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemHome;
