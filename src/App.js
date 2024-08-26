// Imports
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Header from './components/header/header';
import { useState } from 'react';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Cart from './components/Cart/cart';
import CreateAccount from './components/createAccount/createAccount';
import SignIn from './components/signIn/signIn';
import CheckOut from './components/checkOut/checkOut';
import ProductView from './components/singleProduct/productView';
import Footer from './components/footer/footer';

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

          <Route path="/cart" element={<Cart/>}/>
          <Route path="/createAccount" element={<CreateAccount/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/checkOut" element={<CheckOut/>}/>
          <Route path="/productView/:id" element={<ProductView/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}


export default App;

// // http://localhost:3000/products.json

// main_src
// title
// price
// discount
// info
// other_src [ ]
// size [ ]
// description_info
// details{ }
// rate