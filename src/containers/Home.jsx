import React, { useContext, useEffect } from "react";
import "../assets/css/Home.css";
import ItemHome from "../components/ItemHome";
import CartContext from "../context/CartContext";

const Home = () => {
  const { products, setProducts } = useContext(CartContext);

  useEffect(() => {
    setProducts();
  }, []);
  return (
    <div className="container home">
      <div className="row">
        {products.map(
          (item, i) =>
            item.id != 1112 ? (
              <ItemHome {...item} product={item} key={i}></ItemHome>
            ) : (
              ""
            )
          //el condicional es para evitar un producto que carga sin foto de la api
        )}
      </div>
    </div>
  );
};

export default Home;

