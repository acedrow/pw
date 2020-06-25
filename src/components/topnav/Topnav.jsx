import React from 'react'
import styled from 'styled-components'
import { NavLink } from './NavLink'
import { lavender } from '../../styles/Colors'

export const Topnav = (navLinks) => {
  return (
    <>
    {/* TODO: put these in a list and map */}
      <TopNavContainer>
        <NavLink
          linkText="Contact"
          linkDest={() => console.log('contact button')}
          color = {lavender}
          mouseColor = 'white'
          style={NavElementStyle}
        ></NavLink>
        <NavLink
          linkText="Resume"
          linkDest={() => console.log('contact button')}
          color = {lavender}
          mouseColor = 'white'
          style={NavElementStyle}
        ></NavLink>
          <NavLink
          linkText="Music"
          linkDest={() => console.log('contact button')}
          color = {lavender}
          mouseColor = 'white'
          style={NavElementStyle}
        ></NavLink>
      </TopNavContainer>
    </>
  )
}

export const NavElementStyle = {
  padding: '20px',
  backgroundColor: 'Transparent',
  border: 'none',
  outline: 'none',
  overflow: 'hidden',
  color: lavender,
  transition: 'color 1s',
  fontFamily: 'Yeseva One, cursive',
  fontSize: 'medium',
}

const TopNavContainer = styled.div`
  display: flex;
  margin: 0 20px 0 20px;
  flex-direction: row;
  justify-content: flex-end;
`
