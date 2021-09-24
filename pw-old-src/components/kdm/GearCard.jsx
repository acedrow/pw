import React, { useState, useContext } from 'react'
import { Draggable } from './Draggable'
import styled from 'styled-components'
import { AffinityPip } from './AffinityPip'
import { CardContext } from './CardContext';

/*
Gear card class serves as a holder for the gear data (affinities, stats, keywords). When clicked, the gear card will provide this data to the CardLayer (or similar) object in order to track card placement.

cardDisplay - determines the presentation of the card - see constants below
isCardSource - boolean, determines whether the card is a source (removing a card from it will not clear the display), otherwise removing a card from it will zero out the display.

gameData - object holding the card's game data
{
  cardName: string,
  armorLocation: string (arms, legs, body, head, waist, none)
  keywords: string[]
  specialRules: string[]
  affinities: [
    {
      position: string (top, right, left, bottom)
      color: string (red, blue, green)
    }
  ]
  weaponStats: {
    activationCost: number (usually 1)
    speed: number
    accuracy: number
    strength: number

  }
}
*/

export const GEAR_CARD_DISPLAY_NONE = 0
export const GEAR_CARD_DISPLAY_TEXT_ONLY = 1
export const GEAR_CARD_DISPLAY_CARD = 2

export const GearCard = (props) => {
  const { cardInteractionHandler, clearCardContextData} = useContext(CardContext)
  const [cardDisplay, setCardDisplay] = useState(
    props.cardDisplay ? props.cardDisplay : 0
  )
  const [gameData, setGameData] = useState(props.gameData ? props.gameData : {})
  const [borderVal, setBorderVal] = useState('2px solid black')
  const isCardSource = props.isCardSource

  const onTouch = () => {
    console.log('gearCard onTouch')
    cardInteractionHandler(isCardSource, gameData, setGameData)
  }

  return (
    <>
      <div
      onTouchStart={onTouch}
        id="GearCardContainer"
        style={{
          background: 'beige',
          border: borderVal,
          width: '100px',
          height: '100px',
        }}
      ></div>
    </>
  )
}
