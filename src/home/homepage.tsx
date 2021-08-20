import React from "react"
import styled from "styled-components"
import SlotMachineText from "./SlotMachineText"

const Homepage = () => {
  return (
    <HomepageContainer>
      <IntroContainer id="introContainer">
        Hi, I'm Linden - a full-stack React/Node developer and&nbsp;
        <SlotMachineText />
      </IntroContainer>
    </HomepageContainer>
  )
}

const IntroContainer = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  display: flex;
`

const HomepageContainer = styled.div`
  min-height: 100%;
  background-color: black;
  color: white;
`

export default Homepage
