import { BrowserRouter } from "react-router-dom";
import HeaderNav from "../components/layout/HeaderNav";
import Footer from "../components/layout/Footer";
import Content from "../components/layout/Content";
import Payment from "../components/layout/Payment";

function MainRouter() {
  return (
    <BrowserRouter>
        <HeaderNav/>
        <Content/>
        <Payment/>
        <Footer/>
    </BrowserRouter>
  )
}

export default MainRouter