import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {

    useEffect(()=>{
   console.log("This is a statement in useEffect")
    },[])

    useLayoutEffect(()=>{
  console.log("This is a statement in use Layout effect")
    },[])
  return (
    <>
    <h1>Use Layout Effect</h1>
    <h2>Example 1 : <span>console log statement</span></h2>
    </>
  )
}

export default UseLayoutEffect
