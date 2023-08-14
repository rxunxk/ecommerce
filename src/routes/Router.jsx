import { Routes, Route } from "react-router-dom";
import Products from "../components/Products";
import AddProduct from "../components/AddProduct";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/Add" element={<AddProduct />} />
    </Routes>
  );
};

export default Router;
