import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import "../assets/css/ShoppingCart.css";
import ItemCart from "../components/ItemShoppingCart";
import CartContext from "../context/CartContext";

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);
  let precio_total = 0;
  cart.map((item) => {
    precio_total += item.precio * item.quantity;
  });
  return (
    <>
      {cart.length == 0 ? (
        <div className="empty">
          <h1>No hay nada en el carrito!</h1>
        </div>
      ) : (
        <div className="container shopping-cart pt-3">
          <div className="row">
            <div className="cart-container">
              {cart.map((item, i) => (
                <ItemCart
                  {...item}
                  key={i}
                  position={i}
                  product={item}
                ></ItemCart>
              ))}
            </div>
          </div>
          <div className="row cart-resume mt-3">
            <div className="col total">
              <p>Total a pagar:</p>
              <h3>${precio_total}</h3>
            </div>
            <div className="col buy">
              <button>Comprar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
