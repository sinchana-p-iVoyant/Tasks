import React from 'react'
import { useParams } from 'react-router-dom'

export const KidsProductDetails = () => {

    const { kidsId } = useParams()

  return (
    <div className='product-detail'>
        <h3 className='product-detail-h3'>Kids Product Deatils {kidsId}</h3>
    </div>
  )
}
