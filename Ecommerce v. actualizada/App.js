/*General*/
import React from 'react';
import { Routes, Route } from 'react-router-dom';
/*CSS*/
import './App.css';
import "./pages/global-components/folder-css/product-card.css"
/*Componentes globales*/
import { Footer } from './pages/global-components/footer';
import { Header } from './pages/global-components/header';
/*Vistas*/
import { LandingPage } from "./pages/landing-page/landing-page";
import { ProductsPage } from './pages/products/products';
import { WishList } from './pages/wishlist/wishlist';
import { Cart } from './pages/cart/cart';
import { User } from './pages/user-management/user';
import { ProductDetail } from './pages/global-components/product-page';

// import { ProductCard } from './pages/global-components/product-card';
export function App() {
  return (
    <>
      <Header />
      {/* <ProductsList /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/products/:id" element={<ProductDetail />} /> 
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </>
  )
}