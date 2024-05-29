import React, { useReducer } from 'react';

const initialState = 0 ;
const reducer = (state , action)=>{
  switch(action){
    case "Increment" : 
    return state+1 ;
    case "Decrement" :
        return state-1 ;
        default :
        return state
  }
}

const UseReducer = () => {
    const [count , dispach] = useReducer(reducer , initialState)
  return (
   <>
   <h1>Use Reducer Hook</h1>
   <h2>Example 1 : <span>Counter Example</span></h2>
   <span>{count}</span>
   <button onClick={()=>{dispach("Decrement")}}>Decrement</button>
   <button onClick={()=>{dispach("Increment")}}>Increment</button>
   </>
  )
}

export default UseReducer
