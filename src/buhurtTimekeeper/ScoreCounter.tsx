import { useState } from 'react'
import styled from 'styled-components'

type ScoreCounterProps = {
  title: string
}

const ScoreCounter = ({ title }: ScoreCounterProps) => {
  const [score, setScore] = useState(0)
  return (
    <OuterContainer>
      {title}
      <ScoreContainer>
        {score > 0 && (
          <CrementButtonContainer
            onClick={() => setScore((prevScore) => prevScore - 1)}
          >
            -
          </CrementButtonContainer>
        )}
        <Score> {score}</Score>
        <CrementButtonContainer
          onClick={() => setScore((prevScore) => prevScore + 1)}
        >
          +
        </CrementButtonContainer>
      </ScoreContainer>
    </OuterContainer>
  )
}

const Score = styled.div`
  min-width: 60px; ;
`

const CrementButtonContainer = styled.span`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const OuterContainer = styled.div`
  margin: 30px 0;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default ScoreCounter
