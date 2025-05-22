import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "../components/Home";
import Product from "../components/Product";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

function MainRouter() {
  return (
    <BrowserRouter>
        <HeaderNav/>
        <section className="content">
            <Routes>
                <Route path="*" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/product/:id" element={<Product></Product>}></Route>
                <Route path="/product" element={<Product></Product>}></Route>
            </Routes>
        </section>
        <div className="payment">
          <h1>Payment Method:</h1>
          <form>
            <input type="radio" name="fruit" value="apple" />PSE <br/>
            <input type="radio" name="fruit" value="orange" />Nequi <br/>
            <input type="radio" name="fruit" value="watermelon" />Credit Card <br/>
          </form>

        </div>
        <Footer/>
    </BrowserRouter>
  )
}

export default MainRouter