import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Category from "./products/Category";
import { Product, ProductLayout, Products } from "./products";
import Login from "./pages/Login";
import Fav from "./pages/Fav";
import PrivateRoute from "./PrivateRoute";
import Cart from "./pages/Cart";

function SiteRoutes({handleLogin, user}) {
  return (
    <Routes>
      <Route path="/" element={<Home user={user}/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Products" element={<ProductLayout />} >
        <Route index={true} element={<Products user={user}/>}/>
        <Route path="category/:categoryName" element={<Category user={user}/>}/>
        <Route path="product/:productId" element={<Product user={user} />}/>
      </Route>
      <Route path="/Login" element={<Login handleLogin={handleLogin}/>} />
      <Route path="/Fav" element={<PrivateRoute user={user}><Fav user={user}/></PrivateRoute>}/>
      <Route path="/Cart" element={<Cart />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default SiteRoutes;