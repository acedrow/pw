import styled from 'styled-components'
import CountdownClock from './CountdownClock'
import ScoreCounter from './ScoreCounter'

const BuhurtTimekeeper = () => {   
  return (
    <div style={{ textAlign: 'center' }}>
      {/* <h2>Buhurt Chapter-Match Timekeeper</h2> */}
      <OuterContainer>
        <ScoreCounter title="Wyverns" />
        <ClocksContainer>
          <CountdownClock startTimeSeconds={900} title={'Round Timer'} />
          <CountdownClock startTimeSeconds={60} title={'Duel Timer'} />
          <CountdownClock
            startTimeSeconds={60}
            title={'Break Timer'}
            editable
          />
        </ClocksContainer>
        <ScoreCounter title="Devil Dogs" />
      </OuterContainer>
    </div>
  )
}

const ClocksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 100px;
`

const OuterContainer = styled.div`
  margin-top: 50px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export default BuhurtTimekeeper
