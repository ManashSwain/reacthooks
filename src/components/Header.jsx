import React from 'react'

const Header = () => {
    console.log("Header renderd")
  return (
    <>
     <h2>I am a header</h2>
    </>
  )
}

export default React.memo(Header)
