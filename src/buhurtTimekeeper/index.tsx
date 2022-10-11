import styled from 'styled-components'
import CountdownClock from './CountdownClock'

const BuhurtTimekeeper = () => {
  return (
    <Container>
      <h2>Buhurt Chapter-Match Timekeeper</h2>
      <CountdownClock startTimeSeconds={61} />
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

export default BuhurtTimekeeper
