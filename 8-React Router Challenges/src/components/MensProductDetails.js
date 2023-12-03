import React from 'react'
import { useParams } from 'react-router-dom'

export const MensProductDetails = () => {

    const { mensId } = useParams()

    // const params = useParams()
    // const mensId = params.mensId
    console.log(mensId)



  return (
    <div className='product-detail'>
        <h3 className='product-detail-h3'>Mens Product Deatils {mensId}</h3>
    </div>
  )
}


// {
//     if ({mensId}){
//        return <h3>Product Details {mensId}</h3>;
//     } else if ({womensId}) {
//         return <h3>Product Details {womensId}</h3>;
//     } else if ({kidsId}) {
//        return  <h3>Product Details {kidsId}</h3>;
//     }
// }


//  {/* Product Details {mensId}
//       Product Details {womensId}
//       Product Details {kidsId} */}