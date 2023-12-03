import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const Mens = () => {

    const navigate = useNavigate()

    let boxesArray = [1,2,3,4,5,6]

  return (
    <div>
        <h3 className='product-detail-h3'>Mens Collections</h3>
      <div className='box-container'>
        {
          boxesArray.map(box => {
            return (             
                <div key={box} className='each-box' onClick={() => navigate(`${box}`)}>
                  <h4 className='product-text' >
                        Mens Collection {box}
                  </h4>
                  {/* <Outlet /> */}
                </div>             
            )
          })
        }
      </div>
    </div>
  )
}

// export default Mens

//  <Link to=':mensId'>Mens Collection {box}</Link>
