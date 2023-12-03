import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='home-container'>
      <p>Stay Warm | Fit Cool</p>
      <h3>Winter Offer</h3>
      <h3>2023 Collection</h3>
      <button onClick={() => navigate('/products')}>SHOP NOW</button>
    </div>
  )
}

// export default Home
