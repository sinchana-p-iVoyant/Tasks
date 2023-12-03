import React, { useState } from 'react'
import './Counter.css'

const Counter = (props) => {

    const [count, setCount ] = useState(parseInt(props.value))
    // const [count, setCount ] = useState((props.value))

    const handleCounter = () => {
        setCount(prev => prev + 1)
    }

  return (
    <div className='counter'>
        <div> Count in JS : {count} </div>
        <button onClick={() => {handleCounter()}}>Increment</button>
    </div>
    
  )
}

export default Counter


