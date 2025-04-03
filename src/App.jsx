import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

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
                <Product />
              </>
            }
          />
          {/* <Route path='/about'element={<h1>This is about page</h1>}/>
          <Route path='/cart'element={<h1>This is cart page</h1>}/>
          <Route path='/product'element={<h1>This is product page</h1>}/> */}
          <Route path='*'element={<NotFound/>}/>
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
