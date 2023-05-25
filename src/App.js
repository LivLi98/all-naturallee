import React from "react";
import './App.css';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import MakeUpQuiz from './Components/MakeUpQuiz';
import Products from './Components/MUProducts';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MakeUpInventory from "./Components/Summary";




function App() {
  return (
    <>
    <Header />
    <MakeUpQuiz />
   <ProductList />
  
<Routes>
<Route path="/products" element={<Products />} />
<Route path="/makeup-inventory" element={<MakeUpInventory />} />
<Route path="/" element={<App />} />
</Routes>

    </>
  );
}

export default App;
