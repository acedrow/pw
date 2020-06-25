import React from 'react'
import styled from 'styled-components'
import { NavLink } from './NavLink'

export const Topnav = (navLinks) => {
  return (
    <>
      <TopNavContainer>
        <NavLink
          linkText="Contact"
          linkDest={() => console.log('contact button')}
        ></NavLink>
        <NavLink
          linkText="Resume"
          linkDest={() => console.log('contact button')}
        ></NavLink>
          <NavLink
          linkText="Music"
          linkDest={() => console.log('contact button')}
        ></NavLink>
      </TopNavContainer>
    </>
  )
}

const TopNavContainer = styled.div`
  display: flex;
  margin: 0 20px 0 20px;
  flex-direction: row;
  justify-content: flex-end;
`
