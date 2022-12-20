import React, { useContext } from "react";
import "../assets/css/Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import CartContext from "../context/CartContext";

const Product = () => {
  const { id } = useParams();
  const { products, addCart } = useContext(CartContext);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      {products.map((item) =>
        item.id == id ? (
          <div key={id} className="container product">
            <button className="back" onClick={() => handleBack()}>
              <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
            </button>
            <img src={item.img} alt={item.nombre} />
            <h1>{item.nombre}</h1>
            <p className="text-muted">Medidas: {item.medidas}</p>
            <h2>${item.precio}</h2>
            <p className="description">{item.descripcion}</p>
            <button className="add" onClick={() => addCart(item)}>
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </button>
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default Product;
