import React, { useState } from 'react'
import styled from 'styled-components'
import { lavender } from '../../styles/Colors'

export const NavLink = (props) => {
  return (
    <NavLinkButton
      onClick={props.linkDest}
    >
      {props.linkText}
    </NavLinkButton>
  )
}

const NavLinkButton = styled.button`
  padding: 20px;
  background-color: Transparent;
  border: none;
  outline: none;
  overflow: hidden;
  color: ${lavender};
  transition: color 1s;
  font-family: Yeseva One, cursive;
  font-size: medium;
  &:hover {
    color: white
  }
`
