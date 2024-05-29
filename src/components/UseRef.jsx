import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [value,setValue] = useState(0);
    const count = useRef(0);
    const refElement = useRef();
  
//   Example 1 
    useEffect(()=>{
        count.current = count.current + 1 ;
    })

    //   Example 2 

    const [name,setName] = useState("")
    const submitdetails = ()=>{
    setName(" ")
        refElement.current.focus()
    }
    
  return (
    <>
    <h1>Use Ref Hook</h1>
    <h2>Example 1 : <span>counter with rendering a component</span> </h2>
    <button onClick={()=>{setValue(preval => preval -1)}}>-</button>
    <span>{value}</span>
    <button onClick={()=>{setValue(preval => preval +1)}}>+</button>
    <h3>I have rendered {count.current} times</h3>
    <h2>Example 2 : <span>Accessing the DOM element(Focusing a input element)</span></h2>
    <input type="text" placeholder='Enter your name' ref={refElement} value={name} onChange={(e)=>{setName(e.target.value)}} />
    <button onClick={submitdetails}>submit</button>
    </>
  )
}

export default UseRef
