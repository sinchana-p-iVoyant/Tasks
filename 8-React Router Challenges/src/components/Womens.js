import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Womens = () => {

    const navigate = useNavigate()

    let boxesArray = [1,2,3,4,5,6]

  return (
    <div>
        <h3 className='product-detail-h3'>Womens Collections</h3>
      <div className='box-container'>
        {
          boxesArray.map(box => {
            return (             
                <div key={box} className='each-box' onClick={() => navigate(`${box}`)}>
                  <h4 className='product-text'>
                    Womens Collection {box}
                </h4>
                </div>             
            )
          })
        }
      </div>
    </div>
  )
}

// export default Womens
