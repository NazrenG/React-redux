import { Route, Routes } from "react-router";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import BasketPage from "./pages/BasketPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product" element={<BasketPage />} />
      </Routes>
    </>
  );
}

export default App;
