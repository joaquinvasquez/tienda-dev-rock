import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Product from "./containers/Product";
import ShoppingCart from "./containers/ShoppingCart";
import Layout from "./components/Layout";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <BrowserRouter>
        <CartProvider>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home></Home>}></Route>
              <Route
                exact
                path="/product/:id"
                element={<Product></Product>}
              ></Route>
              <Route
                exact
                path="/cart"
                element={<ShoppingCart></ShoppingCart>}
              ></Route>
            </Routes>
          </Layout>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

// https://colorhunt.co/palette/49537174959a98b4aaf1e0ac


