import { useEffect, useState } from 'react'
import styled from 'styled-components'

const PRECISION_MS = 100

type CountdownClockProps = {
  startTimeSeconds: number
}

const CountdownClock = ({ startTimeSeconds }: CountdownClockProps) => {
  const [running, setRunning] = useState(false)
  const [currentMiliseconds, setCurrentMiliseconds] = useState(
    startTimeSeconds * 1000
  )
  const [watch, setWatch] = useState<any>(null)

  const start = () => {
    if (!running) {
      setRunning(true)
      setWatch(
        setInterval(() => {
          setCurrentMiliseconds((prevMs) => prevMs - PRECISION_MS)
        }, PRECISION_MS)
      )
    }
  }

  const stop = () => {
    if (running) {
      setRunning(false)
      clearInterval(watch)
    }
  }

  const GetDisplayTime = (timeMs: number) => {
    const minutes = Math.floor(timeMs / 60000)
    const seconds = Math.floor((timeMs - minutes * 60000) / 1000)
    const ms = timeMs - (minutes * 60000 + seconds * 1000)
    return `${padNumber(minutes, 2)}:${padNumber(seconds, 2)}:${padNumber(
      ms,
      3
    )}`
  }

  function padNumber(num: number, paddedLength: number): string {
    const padchar = '0'
    var pad_char = typeof padchar !== 'undefined' ? padchar : '0'
    var pad = new Array(1 + paddedLength).join(pad_char)
    return (pad + num).slice(-pad.length)
  }

  return (
    <ClockContainer>
      {GetDisplayTime(currentMiliseconds)}
      <button onClick={() => (running ? stop() : start())}>
        {running ? 'STOP' : 'START'}
      </button>
    </ClockContainer>
  )
}

const ClockContainer = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: column;
`

export default CountdownClock
