import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProductContext } from '../store/ProductStore'
import "../App.css"

const Navbar = () => {
  const navigate = useNavigate()

  const auth = localStorage.getItem("auth") === "true"

  const handleLogout = () => {
    localStorage.removeItem("auth")
    navigate("/login")
  }

  const { setLimit } = useContext(ProductContext)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-xxl custom-container">
          <Link onClick={() => setLimit(12)} className="navbar-brand fs-1" to={auth ? "/home" : "/landing"}>React<span className="text-primary">Shop</span> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-4" style={{ gap: "1.5rem" }}>
              <li className="nav-item">
                <Link onClick={() => setLimit(12)} className="nav-link active" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link onClick={() => setLimit(60)} className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/carts">Carts</Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleLogout} className="nav-link text-danger">Logout</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar