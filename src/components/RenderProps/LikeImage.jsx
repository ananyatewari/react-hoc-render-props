import React, { useState } from 'react'

export default function LikeImage(props) {

  return (
    <div>
      <button onClick={props.handleLikeImageCount}>Like Image {props.likeImageCounter}</button>
    </div>
  )
}
