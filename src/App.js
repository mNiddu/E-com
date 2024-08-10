import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Category from './pages/Category';
import FilterProduct from './pages/FilterProduct';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/cat-product/:catName' element={<FilterProduct/>}/>
      <Route path='/single/:id' element={<SingleProduct/>}/>
      
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
