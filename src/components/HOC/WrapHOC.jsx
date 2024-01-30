import React, { useState } from 'react'

const WrapperHOC = (Wrap) => {

  function WrapperHOC() {
    const [counter, setCounter] = useState(0);
    
    const handleCounter = ()=>{
      setCounter(counter+1);
    }
    
    return (
      <Wrap counter = {counter} handleCounter = {handleCounter}/>    
    )
  }
    return WrapperHOC
}

export default WrapperHOC