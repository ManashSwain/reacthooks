import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[count , setCount] = useState(0) ;
    const[name , setName] = useState("Manash") ;

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count => count + 1)
        } , 2000)
    },[name])

    const changeName = ()=>{
        setName("Hero")
    }
   
  return (
    <>
    <h1>Use Effect Hook</h1>
    <h2>Example 1 : <span>Use effect hook with setTimeout function</span></h2>
    <h3>I have rendered {count} times</h3>
    <h3>{name}</h3>
    <button onClick={changeName}>change Name</button>
    </>
  )
}

export default UseEffect
