import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Header';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetails';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productid" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
