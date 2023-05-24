import AddCategory from "./pages/dashboard/AddCategory";
import AddProduct from "./pages/dashboard/AddProduct";
import NavandSidebar from "./pages/dashboard/NavandSidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductGrid from "./pages/dashboard/ProductGrid";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./pages/landingpage/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/admin" element={<NavandSidebar />}>
        <Route exact path="" element={<Dashboard />} />
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route exact path="addProduct" element={<AddProduct />} />
          <Route exact path="categories" element={<AddCategory />} />
          <Route exact path="products" element={<ProductGrid />} />
        </Route>
        <Route exact path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
