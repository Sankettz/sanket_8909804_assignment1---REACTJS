import React, { useState } from 'react';

const Account = ({ user, updateUser }) => {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [shippingAddress, setShippingAddress] = useState(user.shippingAddress || '');
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || '');

  const handleSave = () => {
    updateUser({ ...user, name, email, shippingAddress, phoneNumber });
  };

  return (
    <div className="container">
      <h1>Account Information</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Shipping Address</label>
        <input type="text" className="form-control" id="shippingAddress" value={shippingAddress} onChange={e => setShippingAddress(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input type="tel" className="form-control" id="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleSave}>Save</button>
    </div>
  );
};

export default Account;
