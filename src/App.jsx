import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Homepage />} />
        {/* <Route path="*" element={<p>page not found</p>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
