import React from 'react'
import { useParams } from 'react-router-dom'

export const WomensProductDetails = () => {

    const { womensId } = useParams()

  return (
    <div className='product-detail'>
        <h3 className='product-detail-h3'>Womens Product Deatils {womensId}</h3>
    </div>
  )
}
