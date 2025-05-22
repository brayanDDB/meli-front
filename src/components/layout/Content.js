import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Product from "../Product";

function Content() {
  return (
    <section className="content">
        <Routes>
            <Route path="*" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/product/:id" element={<Product/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
        </Routes>
    </section>
  )
}

export default Content