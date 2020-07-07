import React from 'react'
import { Topnav } from '../topnav/Topnav'
import { Blurb } from '../linden-info/blurb'
import styled from 'styled-components'
import { BackgroundImage } from '../BackgroundImage'

export const Homepage = () => {
  return (

      <OuterContentContainer id='outerContainer'>
        <ContentContainer id='innerContainer'>
          <Blurb></Blurb>
        </ContentContainer>
      </OuterContentContainer>

  )
}

const OuterContentContainer = styled.div`
  width: 100vw;
  text-align: center

`

const ContentContainer = styled.div`
  width: 100%;
  display: inline-block
`
