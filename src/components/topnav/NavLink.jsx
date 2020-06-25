import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { lavender } from '../../styles/Colors'

export const NavLink = (props) => {

  const [style, setStyle] = useState(props.style);
  const [hovered, setHovered] = useState(false)

  useEffect(() => {

  }, [hovered])

  return (
    <button
      onClick={props.linkDest}
      onMouseEnter={()=> setHovered(true)}
      onMouseLeave={()=> setHovered(false)}
      style={style}
    >
      {props.linkText}
    </button>
  )
}

