import React, { useContext } from 'react'
import { ProductContext } from '../store/ProductStore'

const SearchBar = () => {
    const {searchTerm, setSearchTerm} = useContext(ProductContext)

  return (
    <input type='text' placeholder='Search Products...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='border px-3 py-2 rounded w-full max-w-md'/>
  )
}

export default SearchBar