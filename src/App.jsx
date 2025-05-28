// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './Home';
// import ProductDetail from './ProductDetail';
// import AboutUs from './AboutUs';
// import ContactUs from './ContactUs';
// import Shop from './Shop';
// import SignIn from './SignIn';
// import Register from './Register';
// import Cart from './Cart';
// import { CartProvider } from './context/CartContext';

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <Navbar />
//         <div className="pt-[60px]">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/product/:id" element={<ProductDetail />} />
//             <Route path="/about" element={<AboutUs />} />
//             <Route path="/contact" element={<ContactUs />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/signin" element={<SignIn />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import ProductDetail from './ProductDetail';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Shop from './Shop';
import SignIn from './SignIn';
import Register from './Register';
import Cart from './Cart';
import { CartProvider } from './context/CartContext';
import { useEffect } from 'react';

function AppWrapper() {
  const location = useLocation();

  // Routes where navbar should not show
  const hideNavbarRoutes = ['/signin', '/register'];

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0); // Optional: scroll to top on route change
  }, [location]);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <div className="pt-[60px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="">
          <AppWrapper />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
