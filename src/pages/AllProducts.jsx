import { useContext, useEffect } from 'react'
import { ProductContext } from '../store/ProductStore'
import { Link } from 'react-router-dom'

const AllProducts = () => {
  const { setLimit } = useContext(ProductContext)
  const {
    filteredItem,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm

  } = useContext(ProductContext)

  useEffect(() => {
    setLimit(60)
  }, [])

  return (
    <div className='container-xxl custom-container my-5'>

      <input type='text' className='form-control mb-3' placeholder='Search Products' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      <select className='form-select mb-4' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map((cat, i) => (
          <option key={i} value={cat.name}>{cat.name}</option>
        ))}
      </select>
      <div className="row">
        {filteredItem.length > 0 ? (
          filteredItem.map(item => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4 my-2 p-2">
              <div className="card h-100">
                <img src={item.thumbnail} className="card-img-top" alt={item.title} />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title.slice(0, 20)}...</h5>

                  <div className="d-flex justify-content-between mb-2">
                    <h6 className="text-muted">{item.category}</h6>
                    <h6 className="text-success">${item.price}</h6>
                  </div>

                  <p className="card-text">{item.description.slice(0, 60)}...</p>

                  <Link
                    to={`/details/${item.id}`}
                    className="btn btn-primary w-100 mt-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>


          ))
        ) : (
          <p className='text-center'>No Products found.</p>
        )}
      </div>
    </div>
  )
}

export default AllProducts;