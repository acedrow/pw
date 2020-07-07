import React, { useState } from 'react'

export const BackgroundImage = (props) => {
  //TODO: Update default image here so it's not stupid.
  const bgStyle = {
    width: '100vw',
    height: '100vh',
    minHeight: '800px',
    backgroundImage: `url(${props.imageUrl})`,
    backgroundColor: 'grey',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  }

  return (
  <div style={bgStyle}>{props.children}</div>
  )
}
