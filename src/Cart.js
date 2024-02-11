import React from 'react';

const Cart = ({ cart, updateQuantity, removeFromCart, finalizePurchase }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <div className="row">
        <div className="col-md-8">
          {cart.map(item => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <p className="card-text">Price: ${item.price}</p>
                    <button className="btn btn-outline-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total</h5>
              <p className="card-text">Total: ${calculateTotal()}</p>
              <button className="btn btn-primary" onClick={finalizePurchase}>Finalize Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
