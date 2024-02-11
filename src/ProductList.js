import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ addToCart }) => {

  const products = [
    { id: 1, name: 'Iphone 15 PRO', description: '6.1-inch Super Retina XDR display footnote featuring ProMotion, Always-On, and Dynamic Island', image: 'ip.png', price: 1600.99 },
    { id: 2, name: 'Apple Vision Pro', description: 'This is Apple’s first 3D camera. The Digital Crown gives you full control over how immersed you are.', image: 'visionPro.png', price: 3499.99 },
    { id: 3, name: 'Apple Watch Ultra 2', description: '49mm case Aerospace-grade titanium Dual speakers Three-microphone array with beamforming.', image: 'appleWatch.jpeg', price: 1099.90 },
    { id: 4, name: 'MacBook Pro', description: '4-inch Liquid Retina XDR display² Two Thunderbolt / USB 4 ports, HDMI port, SDXC card slot, headphone jack', image: 'Mac.png', price: 2100.11 },
    { id: 5, name: 'Ipad', description: 'Liquid Retina XDR display or Liquid Retina displayFootnote² ProMotion technology P3 wide colour Anti-reflective coating', image: 'ipad.jpeg', price: 1011.11 },
    { id: 6, name: 'AirPods Max', description: ' a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.The ultimate personal listening experience. ', image: 'airpodsMax.jpeg', price: 780.99 }

  ];

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <span className="price">$ {product.price}</span>
                <input type="number" className="form-control" defaultValue={1} min={1} />

                <button className="btn btn-primary" onClick={() => addToCart(product.id)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
