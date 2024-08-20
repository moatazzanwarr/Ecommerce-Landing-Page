// Imports
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Header from './components/header/header';
import { useState } from 'react';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Cart from './components/Cart/cart';
import Test from './components/test/test';

function App() {
const openCart = ()=>{

}

const [cart,setCart] = useState([])
const addToCart = (product)=>{
  setCart([...cart,product])
}
  return (
    <div className="App">
      <BrowserRouter>
        <Header openCart={openCart}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/test" element={<Test/>}/>

          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
