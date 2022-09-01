import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CartProvider from "./context/CartProvider";
import CheckoutPage from "./pages/CheckoutPage";
import SavePage from "./pages/SavePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
// import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      <CartProvider>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/signup" element={<SignUpPage />} /> */}

          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/save" element={<SavePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

          <Route path="/*" element={<NotFound />} />

        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
