import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import ProductDetail from './ProductDetail';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Shop from './Shop';
import SignIn from './SignIn';
import Register from './Register';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="pt-[30px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
