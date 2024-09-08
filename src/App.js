// Imports
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Header from './components/header/header';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Cart from './components/Cart/cart';
import CreateAccount from './components/createAccount/createAccount';
import SignIn from './components/signIn/signIn';
import CheckOut from './components/checkOut/checkOut';
import ProductView from './components/singleProduct/productView';
import Shop from './components/shop/shop';
import Footer from './components/footer/footer';
import ChangePassword from './components/changePassword/changePassword';
import MobHeader from './components/mobHeader/mobHeader';
import { useEffect, useState } from 'react';


function App() {
  const width = window.innerWidth;
  return (
    <div className="App">
      <BrowserRouter>
        {/* {
          width <= 1024 ? <MobHeader /> : <Header />
        } */}
        <Header />
        <MobHeader />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/createAccount" element={<CreateAccount/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/checkOut" element={<CheckOut/>}/>
          <Route path="/productView/:id" element={<ProductView/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/changePassword" element={<ChangePassword/>}/>
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