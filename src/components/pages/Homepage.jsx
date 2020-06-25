import React from 'react'
import { Topnav } from '../topnav/Topnav'
import { Blurb } from '../linden-info/blurb'
import styled from 'styled-components'
import { BackgroundImage } from '../BackgroundImage'

export const Homepage = () => {
  return (
    <BackgroundImage imageUrl="https://i.imgur.com/P9gbnLf.jpg">
      <OuterContentContainer id='outerContainer'>
        <ContentContainer id='innerContainer'>
          <Topnav></Topnav>
          <Blurb></Blurb>
        </ContentContainer>
      </OuterContentContainer>
    </BackgroundImage>
  )
}

const OuterContentContainer = styled.div`
  width: 100vw;
  text-align: center

`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: inline-block
`
