import React, { useState } from 'react'
import WrapHOC from "./WrapHOC"

function LikePostHOC(props) {

  return (
    <div>
      <button onClick={props.handleCounter}>Like Post {props.counter}</button>
    </div>
  )
}

export default WrapHOC(LikePostHOC)