import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
    setCartCount(prevCount => prevCount + item.quantity);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProductPage
              cartCount={cartCount}
              onAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              cartCount={cartCount}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              cartItems={cartItems}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
