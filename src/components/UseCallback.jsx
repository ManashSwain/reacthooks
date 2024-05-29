import React, { useCallback, useState } from 'react'
import Header from './Header'

const UseCallback = () => {
    const [count,setCount] = useState(0);
    const newfn = useCallback(()=>{

    },[count])
  return (
    <>
    <h1>Use Callback Hook</h1>
    <h2>Example 1 : <span>Caching a function</span></h2>
    <Header newfn={newfn}/>
    <h3>{count}</h3>
    <button onClick={()=>{setCount(prev=>prev + 1)}}>Click me</button>
    </>
  )
}

export default UseCallback
