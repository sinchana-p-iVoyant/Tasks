import React, { useState } from 'react'
import './Counter.css'

interface Props{
    value: number
}

// interface State{
//     count: number
// }

const Counter = (props: Props) => {

    const [count, setCount ] = useState<number>(props.value)

    const handleCounter = ():void => {
        setCount(prev => prev + 1)
    }

  return (
    <div>
        <div> Count in TS : {count} </div>
        <button className='tsButton' onClick={() => {handleCounter()}}>Increment</button>
    </div>
    
  )
}

export default Counter