import React , { useState } from 'react'


const Calculator = () => {

    const [val1, setVal1] = useState(0)
    const [val2, setVal2] = useState(0)

    const [result, setResult] = useState(0)

    

    // let sign = document.getElementsByTagName("button")[1].innerText

    const handleAddition = (e) => {
    //    e.preventDefault()
        // console.log(val1, val2)
        const sum = val1 + val2
        // console.log(sum)
        setResult(sum)
         console.log(sum)
    }

    const handleSubtraction = (e) => {
        e.preventDefault()
        // console.log(val1, val2)
        setResult(val1 - val2)
    }

    const handleMultiplication = (e) => {
       // e.preventDefault()
         console.log(val1, val2)
        setResult(val1 * val2)
    }

    const handleDivision = (e) => {
       // e.preventDefault()
        console.log(val1, val2)
        if(val2 !== 0){
            setResult(val1 / val2)
        }
        else{
            console.log("Denomiator Cannot Be Zero!!!")
        }
    }


  return (
    <div>
      
        <div>
            <input 
                type="number" 
                name="num1" 
                id="num1" 
                placeholder='Value 1' 
                value={val1}
                onChange={(e) => setVal1(parseFloat(e.target.value))}
            />

            <input 
                type="number" 
                name="num2" 
                id="num2" 
                placeholder='Value 2' 
                value={val2}
                onChange={e => setVal2(parseFloat(e.target.value))}
            />

        </div>
        <div>
            <input 
                type="number" 
                placeholder='Result' 
                value={result} 
                readOnly   
            />
        </div>
        <div>
            hi
        </div>
        <div>
            <button onClick= { handleAddition }>+</button>
            <button onClick={ (e) => { handleSubtraction(e) } }>-</button>
            <button onClick={ (e) => { handleMultiplication(e) } }>*</button>
            <button onClick={ (e) => { handleDivision(e) } }>/</button>
        </div>
      
    </div>
  )
}

export default Calculator
