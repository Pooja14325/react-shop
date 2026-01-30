import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { ProductContext } from '../store/ProductStore'
import "../App.css"


const ProductDetails = () => {
  const { addCartHandler } = useContext(ProductContext)
  const { id } = useParams()
  const [item, setItem] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://dummyjson.com/products/${id}`)
      setItem(res.data)
    }
    fetchData()
  }, [])
  return (
    <div className='container-xxl custom-container'>
      <div className='border mt-4 p-4 add-cards' style={{ width: "32rem" }}>
        <br />
        <img src={item.thumbnail} className='img-fluid rounded' alt={item.title} />
        <br />
        <h2>{item.title}</h2>
        <div className='d-flex justify-content-between'>
          <h5 className="text-muted">{item.category}</h5>
          <h5 className="text-success">${item.price}</h5>
        </div>
        <div>{item.description}</div>
        <br />
        <Link to={"/carts"} onClick={() => addCartHandler(item)} className='btn px-4 btn-primary'>Add to Cart</Link>
      </div>
    </div>
  )
}

export default ProductDetails