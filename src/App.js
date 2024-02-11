import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart';
import Account from './Account';

const App = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ shippingAddress: '' });

  const addToCart = (productId) => {
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const productToAdd = products.find(product => product.id === productId);
      if (productToAdd) {
        setCart([...cart, { ...productToAdd, quantity: 1 }]);
      }
    }
  };

  const updateQuantity = (productId, quantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const finalizePurchase = () => {
    setCart([]);
    alert('Purchase finalized!');
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  const products = [
    { id: 1, name: 'Iphone 15 PRO', image: 'ip.png', price: 1600.99 },
    { id: 2, name: 'Apple Vision Pro', image: 'visionPro.png', price: 3499.99 },
    { id: 3, name: 'Apple Watch Ultra 2', image: 'appleWatch.jpeg', price: 1099.90 },
    { id: 4, name: 'MacBook Pro', image: 'Mac.png', price: 2100.11 },
    { id: 5, name: 'Ipad', image: 'ipad.jpeg', price: 1011.11 },
    { id: 6, name: 'AirPods Max', image: 'airpodsMax.jpeg', price: 780.99 }

  ];

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div> <h1> Shopping Website</h1>
          </div>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/cart">Shopping Cart</Link>
            <Link to="/account">Profile</Link>
          </nav>

        </header>
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} products={products} />} />
          <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} finalizePurchase={finalizePurchase} />} />
          <Route path="/account" element={<Account user={user} updateUser={updateUser} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
