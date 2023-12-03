import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Profile.css'

export const Profile = () => {

    const { name } = useParams()
    // const navigate = useNavigate()

  return (
    <div className='profile-container'>
    {
      (
        name === 'Admin' ?
        <h3>Welcome {name}!</h3> : 
        <div>
            <h3>Please Login!</h3> 
            <Link to='/login' className='back-login'>Go back to Login!</Link>
        </div>
      ) 
    }
    </div>
  )
}

// (
//     name === 'Admin' ?
//     <h3>Welcome {name}!</h3> : 
//     <div>
//         <h3>Please Login!</h3> 
//         <Link to='/login' className='back-login'>Go back to Login!</Link>
// //     </div>
// // )

//         {/* {
//             switch (name) {
//                 case 'Admin':
//                   return <h3>Welcome {name}!</h3>;
//                 default:
//                   return (
//                     <div>
//                       <h3>Please Login!</h3>
//                       <Link to='/login' className='back-login'>
//                         Go back to Login!
//                       </Link>
//                     </div>
//                   );
//               }
//         } */}