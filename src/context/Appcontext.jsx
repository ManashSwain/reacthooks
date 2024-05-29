import React, { createContext } from 'react'

export const Contextprovider = createContext();

const Appcontext = (props) => {
  const fname = "Manash swain" ;
  const number = "+1234567890"
  return (
    <>
    <Contextprovider.Provider value={{fname , number}}>
      {props.children}
    </Contextprovider.Provider>
    </>
  )
}

export default Appcontext


