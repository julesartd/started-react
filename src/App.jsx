import React, { useState } from 'react'
import SearchBar from './components/forms/SearchBar'
import ProductTable from './components/products/ProductTable';


const PRODUCTS = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

function App() {
 

  const [maxPrice, setMaxPrice] = useState(Infinity)

  const [showOnlyStocked, setShowOnlyStocked] = useState(false)

  const [search, setSearch] = useState('')

  const filteredProducts = PRODUCTS.filter(product => {
    if (showOnlyStocked && !product.stocked) {
      return false
    }

    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
      return false
    }

    if (maxPrice && Number(product.price.substring(1)) > maxPrice) {
      return false
    }

    return true
  })

  const reset = () => {
    setMaxPrice(Infinity)
    setShowOnlyStocked(false)
    setSearch('')
  }

  return <>
    <SearchBar 
      showOnlyStocked={showOnlyStocked} 
      onShowOnlyStockedChanged={setShowOnlyStocked}
      search={search}
      onSearchChanged={setSearch}
      setMaxPrice={setMaxPrice}
      maxPrice={maxPrice}

    />
    <button onClick={reset} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Reset</button>
    <ProductTable products={filteredProducts}/>
    
  </>

}

export default App
