import React from 'react'
import useLocalStorage from './useLocalStorage'

const CustomHook = () => {

    const [name , setName] =useLocalStorage('username' , '')
    const [id , setId] =useLocalStorage('id' , '')
   
  return (
    <>
    <h1>Custom Hooks</h1>
    <input type="text"
     placeholder='Enter your name'
     value={name}
     onChange={(e)=>{setName(e.target.value)}} />
     <h3>Hello {name}</h3>
     <input type="text"
     placeholder='Enter your id'
     value={id}
     onChange={(e)=>{setId(e.target.value)}} />
     <h3>Your Id is : {id}</h3>
    </>
  )
}

export default CustomHook
