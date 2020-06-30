import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { lavender } from '../../styles/Colors'
import { mouseOverColor, baseColor } from './Topnav'
import { Link, BrowserRouter } from 'react-router-dom'

export const NavElement = (props) => {
  const [style, setStyle] = useState(props.style)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    let tempStyle = {}
    Object.assign(tempStyle, style)

    tempStyle.color = hovered ? mouseOverColor : baseColor
    setStyle(tempStyle)
  }, [hovered])

  return (
    <>
      {props.elementType === 'button' && (
        <button
          onClick={props.buttonMethod}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={style}
        >
          {props.navItemText}
        </button>
      )}
      {props.elementType === 'link' && (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={style}
        >
            <NavLink to={props.linkDest}> {props.navItemText}</NavLink>
        </div>
      )}
    </>
  )
}

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;