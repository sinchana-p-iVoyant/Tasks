import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Products.css'

export const Products = () => {

  // let boxesArray = [1,2,3,4,5,6]

  return (
    <div className='products-container'>
      {/* <h3>Products Page</h3> */}

      <p>Choose Your Category</p>

      <NavLink to='mens'>Mens</NavLink>
      <NavLink to='womens'>Womens</NavLink>
      <NavLink to='kids'>Kids</NavLink>
      <Outlet />




      {/* <div className='box-container'>
        {
          boxesArray.map(box => {
            return (             
                <div key={box} className='each-box'>
                  <h4 className='product-text'>Product {box}</h4>
                </div>             
            )
          })
        }
      </div> */}
    </div>
  )
}

// export default Products

// boxesArray.map(box => {
//   return (
//     <div key={box}>{box}</div>
//   )
// })