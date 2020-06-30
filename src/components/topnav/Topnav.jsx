import React from 'react'
import styled from 'styled-components'
import { NavElement } from './NavElement'
import { lavender } from '../../styles/Colors'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { Homepage } from '../pages/Homepage'
import { Resume } from '../pages/Resume'

export const mouseOverColor = 'white'
export const baseColor = lavender

export const Topnav = (navLinks) => {
  return (
    <>

        {/* <Link to="/resume" > Topnav Resume Test</Link>
        <Link to="/" > Home  Test</Link> */}


      {/* TODO: put these in a list and map */}
      <TopNavContainer>
      <NavElement
          navItemText="Home"
          elementType="link"
          linkDest='/'
          style={NavElementStyle}
        ></NavElement>
        <NavElement
          navItemText="Contact"
          elementType="button"
          buttonMethod={() => console.log('contact button')}
          style={NavElementStyle}
        ></NavElement>
        <NavElement
          navItemText="Resume"
          elementType="link"
          linkDest='/resume'
          style={NavElementStyle}
        ></NavElement>
        <NavElement
          navItemText="Music"
          elementType="button"
          buttonMethod={() => console.log('contact button')}
          style={NavElementStyle}
        ></NavElement>
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
