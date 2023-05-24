import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Home';
import Card from './Card';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <div className="text-info">
      <CartProvider>
       <Home/>
        <Card/>
      </CartProvider>
    </div>
  );
}

export default App;
