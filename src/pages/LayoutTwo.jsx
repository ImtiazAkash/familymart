import React from 'react'
import NavandSidebar from './dashboard/NavandSidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './dashboard/AddProduct'
import AddCategory from './dashboard/AddCategory'
import ProductGrid from './dashboard/ProductGrid'
import Dashboard from './dashboard/Dashboard'

function LayoutTwo() {
  return (
    <NavandSidebar>
        <Routes>
          <Route exact path="/addProduct" element={<AddProduct />} />
          <Route exact path="/categories" element={<AddCategory />} />
          <Route exact path="/products" element={<ProductGrid />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
      </NavandSidebar>
  )
}

export default LayoutTwo