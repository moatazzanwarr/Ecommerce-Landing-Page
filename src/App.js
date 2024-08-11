// Imports
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
