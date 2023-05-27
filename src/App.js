import AddCategory from "./pages/dashboard/AddCategory";
import AddProduct from "./pages/dashboard/AddProduct";
import NavandSidebar from "./pages/dashboard/NavandSidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductGrid from "./pages/dashboard/ProductGrid";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/Layout";
import Home from "./pages/landingpage/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";


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
        <Route exact path="/" element={<Layout />} >
          <Route exact path="" element={<Home />} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="/auth/login" element={<Login />} />
          <Route exact path="/auth/signup" element={<Signup />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
