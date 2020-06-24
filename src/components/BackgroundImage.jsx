import React, { useState } from 'react'

export const BackgroundImage = (props) => {
  // const [imageUrl, setImageUrl] = useState('')
  // setImageUrl(props.imageUrl? props.imageUrl : '')
  const backgroundImage = props.imageUrl
  ? `url(${props.imageUrl})`
  : `url(https://i.imgur.com/ooY7u7a.png)`
   
  console.log('background image: ' + backgroundImage)
  
  const bgStyle = {
    width: '100vw',
    height: '100vh',
    backgroundImage: props.imageUrl
    ? `url(${props.imageUrl})`
    : `url(https://i.imgur.com/ooY7u7a.png)`,
    backgroundSize: 'cover',
  }

  return (
  <div style={bgStyle}>{props.children}</div>
  )
}
