import React, { useState } from 'react'

const UseState = () => {

    // Example 1 

    const [color,setColor] = useState("Red");
    const changecolor = ()=>{
        setColor("Blue")
    }

    // Example 2 

    const [brand,setBrand] = useState("Ferrari");
    const [carcolor, setcarcolor] = useState("Red");
    const [model,setModel] = useState("Roma");
    const [year,setYear] = useState("2023");

    const updatecar =()=>{
        setBrand("Lamborgini");
        setcarcolor("white");
        setModel("latest");
        setYear("2024");
    }

    // Updated Example 2 

   const [details,setDeatails] = useState({
      fullName : "Manash Swain" ,
      place : "Chennai",
      favColor : "Green"
   })

   const updateDetails = ()=>{
    setDeatails((preval)=>{
        return  {...preval, favColor : "orange"}
    })
   }

//    Example 3 

const [count,setCount] = useState(0);

const decrement = ()=>{
    setCount(prev => prev -1);
} 

const increment = ()=>{
    setCount(prev => prev  + 1);
}





  return (
    <>
    <h1>Use State Hook</h1>
    <h2>Example 1  : <span>Updating the UI with usestate hook</span> </h2>
    <h3>My favourite color is {color}</h3>
    <button onClick={changecolor}>Update color</button>
    <h2>Example 2 : <span>Using multiple usestates</span></h2>
    <h3>My {brand}</h3>
    <h3>It is a {carcolor} {model} from {year}</h3>
    <button onClick={updatecar}>Update car</button>
    <h2>Updated Example 2 : using useState with Objects</h2>
    <h3>Hello! My name is {details.fullName} .I am from {details.place} and my favourite color is {details.favColor} </h3>
    <button onClick={updateDetails}>Update Deatils</button>
    <h2>Example 3 : <span>Counter example (Updating values based on previous values)</span></h2>
    <button onClick={decrement}>Decrement</button>
    <span>{count}</span>
    <button onClick={increment}>Increment</button>
    </>
  )
}

export default UseState
