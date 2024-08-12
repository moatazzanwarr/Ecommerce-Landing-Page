// Imports
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Header from './components/header/header';
import { useState } from 'react';

function App() {
const openCart = ()=>{

}

const [add,setAdd] = useState([])
const addToCart = ()=>{
  setAdd([...add,])
}
  return (
    <div className="App">
      <BrowserRouter>
        <Header cartLength={5} openCart={openCart}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
