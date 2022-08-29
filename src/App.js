import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CartProvider from "./context/CartProvider";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <>
      <CartProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
