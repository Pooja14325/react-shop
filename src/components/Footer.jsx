import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container-xxl custom-container p-4">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-4 mb-3 mt-3">
            <h5 className='fs-3'>React Shop</h5>
            <p className='fs-5'>Best deals on all products, only at React Shop!</p>
          </div>
          <div className="col-12 col-md-4 mb-3 mt-3">
            <h5 className='fs-3'>Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column" style={{ gap: "10px" }}>
              <li><a href="/" className="text-white text-decoration-none fs-5">Home</a></li>
              <li><a href="/products" className="text-white text-decoration-none fs-5">Products</a></li>
              <li><a href="/carts" className="text-white text-decoration-none fs-5">Cart</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-3 mt-3">
            <h5 className='fs-3'>Contact</h5>
            <p className='fs-5'>Email: support@reactshop.com</p>
            <p className='fs-5'>Phone: +91 98765 43210</p>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-center p-4">
        <small className='fs-4'>&copy; 2025 React Shop. All Rights Reserved.</small>
      </div>
    </footer>

  )
}

export default Footer