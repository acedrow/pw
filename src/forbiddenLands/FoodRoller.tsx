import { SyntheticEvent, useEffect, useState } from 'react'
import { useToggle } from 'react-use'
import styled from 'styled-components'
import { rollDie } from './uitls/diceRoller'

const MAX_ROLL_DAYS = 200
const DAYS_ERROR = `Days value must be an integer between 1 and ${MAX_ROLL_DAYS}`

enum FoodDice {
  d6 = 'd6',
  d8 = 'd8',
  d10 = 'd10',
  d12 = 'd12',
}

const FoodRoller = () => {
  const [startingDice, setStartingDice] = useState<FoodDice>(FoodDice.d12)
  const [numDays, setNumDays] = useState<number>(1)
  const [replenishFood, toggleReplenishFood] = useToggle(true)
  const [logRolls, toggleLogRolls] = useToggle(true)

  const [output, setOutput] = useState('')

  useEffect(() => {
    setOutput('')
  }, [startingDice, numDays, replenishFood, logRolls])

  const HandleDaysChange = (event: any) => {
    const value = parseInt(event.target.value)
    if (Number.isInteger(value) && value > 0 && value <= MAX_ROLL_DAYS) {
      setNumDays(value)
    } else {
      setOutput(DAYS_ERROR)
    }
  }

  const rollFood = (): string => {
    logRolls &&
      console.log(
        `START: Rolling for ${numDays} days, starting at ${startingDice}`
      )
    let foodUsed = 0
    let currentDice = startingDice
    const diceValuesArray = Object.values(FoodDice)
    for (let i = 0; i < numDays; i++) {
      const diceSides = parseInt(currentDice.slice(1))
      const result = rollDie(diceSides)
      logRolls &&
        console.log(
          `day: ${
            i + 1
          }, previous food used: ${foodUsed} rolling: ${currentDice} result: ${result}, `
        )
      if (result < 3) {
        foodUsed++
        if (!replenishFood) {
          if (currentDice === FoodDice.d6) {
            return `You run out of food after ${i + 1} days`
          } else {
            //decrease dice value
            const diceValue = diceValuesArray.indexOf(currentDice)
            currentDice = diceValuesArray[diceValue - 1]
          }
        }
      }
    }

    if (replenishFood) {
      return `${foodUsed} units of food eaten, current food resource die is: ${currentDice}`
    } else {
      return `current food resource die is ${currentDice}`
    }
  }

  return (
    <ControlsContainer>
      <h2>Food Roller</h2>
      <LabelSpan>Starting Dice&nbsp;</LabelSpan>
      <StyledSelect
        value={startingDice}
        onChange={(event) => setStartingDice(event.target.value as FoodDice)}
      >
        <option value={FoodDice.d6}>d6</option>
        <option value={FoodDice.d8}>d8</option>
        <option value={FoodDice.d10}>d10</option>
        <option value={FoodDice.d12}>d12</option>
      </StyledSelect>
      <LabelSpan> Number of days to roll for &nbsp;</LabelSpan>

      <StyledInput
        type="number"
        value={numDays}
        onChange={(event) => HandleDaysChange(event)}
      />
      <LabelSpan />
      <label>
        Replenish starting dice level from food stores when depleted
        <input
          type="checkbox"
          checked={replenishFood}
          onChange={() => toggleReplenishFood()}
        />
      </label>
      <LabelSpan />
      <label>
        Log rolls to browser console
        <input
          type="checkbox"
          checked={logRolls}
          onChange={() => toggleLogRolls()}
        />
      </label>
      <StyledButton onClick={() => setOutput(rollFood())}>
        Roll Food
      </StyledButton>
      <Output textColor={output === DAYS_ERROR ? 'red' : null}>{output}</Output>
    </ControlsContainer>
  )
}

const Output = styled.span<{ textColor?: string | null }>`
  ${(props) => props.textColor && `color: ${props.textColor};`}
`

const StyledInput = styled.input`
  max-width: 75px;
`

const StyledSelect = styled.select`
  max-width: 75px;
`

const LabelSpan = styled.span`
  margin-top: 10px;
`
const StyledButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 75px;
`

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const PageContainer = styled.div`
  margin-left: 15px;
`

export default FoodRoller
