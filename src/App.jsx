import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import AllProducts from "./components/AllProduct";
import Deals from "./components/Deals";
import ProductDetail from "./components/ProductDetail";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Product text={"Featured Products"} tag={"beverages"} number={4}/>
              </>
            }
          />
          <Route path='/deals'element={<Deals/>}/>
          {/* <Route path='/cart'element={<h1>This is cart page</h1>}/>*/} 
          <Route path='/products'element={<AllProducts/>}/> 
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path='*'element={<NotFound/>}/>
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
