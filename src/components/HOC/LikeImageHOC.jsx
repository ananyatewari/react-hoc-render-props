import React, { useState } from 'react'
import WrapHOC from './WrapHOC'

function LikeImageHOC(props) {
  return (
    <div>
      <button onClick={props.handleCounter}>Like Image {props.counter}</button>
    </div>
  )
}

export default WrapHOC(LikeImageHOC)