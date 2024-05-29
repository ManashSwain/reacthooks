import React, { useContext } from 'react'
import { Contextprovider } from '../context/Appcontext'


const Contact = () => {
    const {fname,number} = useContext(Contextprovider)
    
  return (
    <>
    <h3>This is contact page</h3>
    <h3>My name is : {fname}</h3>
    <h3>My contact number is : {number}</h3>
    </>
  )
}

export default Contact
