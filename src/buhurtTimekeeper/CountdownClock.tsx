import { useEffect, useState } from 'react'
import styled from 'styled-components'
import sound from '../../assets/sounds/dingdingding.mp3'
import { useToggle } from 'react-use'

const PRECISION_MS = 100
const ding = new Audio(sound)

type CountdownClockProps = {
  title?: string
  editable?: boolean
  startTimeSeconds: number
}

const CountdownClock = ({
  startTimeSeconds,
  title,
  editable = false,
}: CountdownClockProps) => {
  const [currentStartTime, setCurrentStartTime] = useState(
    startTimeSeconds * 1000
  )
  const [running, setRunning] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(false)
  const [muted, toggleMuted] = useToggle(false)
  const [currentMiliseconds, setCurrentMiliseconds] = useState(
    startTimeSeconds * 1000
  )
  const [watch, setWatch] = useState<any>(null)

  const start = () => {
    if (!running && !timeElapsed) {
      setRunning(true)
      setWatch(
        setInterval(() => {
          setCurrentMiliseconds((prevMs) => {
            if (prevMs <= 0) {
            }
            return prevMs - PRECISION_MS
          })
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

  const reset = () => {
    stop()
    clearInterval(watch)
    setCurrentMiliseconds(currentStartTime)
    setTimeElapsed(false)
  }

  useEffect(() => {
    if (currentMiliseconds <= 0) {
      if (!muted) {
        ding.play()
      }
      stop()
      setTimeElapsed(true)
    }
  }, [currentMiliseconds])

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

  const handleTimerEdit = () => {
    stop()
    let newTime = prompt('Enter number of minutes, or minutes : seconds')
    if (newTime === null) {
      setCurrentMiliseconds(currentStartTime)
      return
    }
    if (newTime?.includes(':')) {
      const times = newTime.split(':')
      const minutesInMs = parseInt(times[0]) * 60000
      const secondsInMs = parseInt(times[1]) * 1000
      setCurrentStartTime(minutesInMs + secondsInMs)
      setCurrentMiliseconds(minutesInMs + secondsInMs)
    } else {
      setCurrentStartTime(parseInt(newTime) * 60000)
      setCurrentMiliseconds(parseInt(newTime) * 60000)
    }
  }

  const EditPencilButton = () => {
    return <PointerSpan onClick={handleTimerEdit}>✏️</PointerSpan>
  }

  const MuteButton = () => {
    return (
      <PointerSpan onClick={() => toggleMuted()}>
        {muted ? `🔇` : `🔊`}
      </PointerSpan>
    )
  }

  return (
    <ClockContainer>
      <TitleContainer>
        {title}
        <MuteButton />
        {editable && <EditPencilButton />}
      </TitleContainer>
      <NumberDisplaycontainer $timerDone={timeElapsed}>
        {GetDisplayTime(currentMiliseconds)}
      </NumberDisplaycontainer>
      <button onClick={() => (running ? stop() : start())}>
        {running ? 'STOP' : 'START'}
      </button>
      <button onClick={() => reset()}>{'RESET'}</button>
    </ClockContainer>
  )
}

const TitleContainer = styled.span.attrs({ className: 'noselect' })`
  font-size: 26px;
`

const PointerSpan = styled.span`
  cursor: pointer;
`

const NumberDisplaycontainer = styled.div.attrs({ className: 'noselect' })<{
  $timerDone: boolean
}>`
  font-size: 3rem;
  ${({ $timerDone }) => $timerDone && 'background-color: red;'}
`

const ClockContainer = styled.div`
  margin-bottom: 25px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
`

export default CountdownClock
