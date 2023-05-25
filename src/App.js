import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './Home';
import Card from './Card';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <div className="text-info">
        
      <CartProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/card' element={<Card/>}/>
          </Routes>
        </Router>
        {/* <Home/>
        <Card/> */}
      </CartProvider>
    </div>
  );
}

export default App;
