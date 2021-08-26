import React from 'react'
import styled from 'styled-components'
import HomepageLinks from './links'
import SlotMachineText from './SlotMachineText'

const Homepage = () => {
  return (
    <HomepageContainer>
      <IntroContainer flexDirection="" id="introContainer">
        <TextDiv>
          <TitleH1>Hi, I'm Linden</TitleH1>
          <TitleH1>a full-stack React/Node developer and</TitleH1>
        </TextDiv>
        <SlotMachineText />
      </IntroContainer>
      <HomepageLinks />
    </HomepageContainer>
  )
}

const TitleH1 = styled.h1`
  font-size: 2rem;
`
const TextDiv = styled.div`
  max-width: 300px;
`

const IntroContainer = styled.div<{ flexDirection: string }>`
  margin: 0 1.5rem 2rem 1.5rem;
  font-size: 50px;
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  flex-direction: column;
  ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection};`}
`

const HomepageContainer = styled.div`
  min-height: 100%;
  color: white;
`

export default Homepage
