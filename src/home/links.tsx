import React from 'react'
import styled from 'styled-components'

const HomepageLinks = () => {
  return (
    <LinksContainer>
      <a href="https://lindenholt.com/holt-linden-resume.pdf" target="_blank">
        resume
      </a>
      <a href="https://www.linkedin.com/in/linden-holt/">linkedin</a>
      <a href="https://github.com/acedrow">github</a>
      <a href="https://lindenholt.bandcamp.com/">bandcamp</a>
    </LinksContainer>
  )
}

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7rem 1.5rem;
  font-size: 18px;
`

export default HomepageLinks
