import React, { useState } from 'react'

export default function Render(props) {

  const [counter, setCounter] = useState(0);
    
  const handleCounter = ()=>{
    setCounter(counter+1);
  }

  return (
    <>
        {props.render(counter, handleCounter)}
    </>
  )
}
