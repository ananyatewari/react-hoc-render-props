import React, { useState } from 'react'

export default function LikePost(props) {
  return (
    <div>
      <button onClick={props.handlePostCount}>Like Post {props.likePostCounter}</button>
    </div>
  )
}
