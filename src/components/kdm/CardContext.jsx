// @ts-nocheck
import React, { useState, useEffect } from 'react'
import * as _ from 'lodash'

export const CardContext = React.createContext({})

export const CardContextConsumer = CardContext.Consumer

export const CardContextProvider = (props) => {
  const [gearCardTarget, setGearCardTarget] = useState({})
  const [gearCardSource, setGearCardSource] = useState({})

  const cardInteractionHandler = (isCardSource, gameData, setGameData) => {
    console.log('cardInteractionHandler')
    if (isCardSource) {
      setGearCardSource({
        gameData: gameData,
        setGameData: setGameData,
        selected: true,
      })
    } else {
      if (_.isEmpty(gameData) || !!!gameData)
        setGearCardTarget({
          gameData: gameData,
          setGameData: setGameData,
          selected: true,
        })
      else {
        if (!geardCardTarget.selected && gearCardSource.selected) {
          setGearCardTarget({
            gameData: gameData,
            setGameData: setGameData,
            selected: true,
          })
        } else if (geardCardTarget.selected && !gearCardSource.selected) {
          setGearCardSource({
            gameData: gameData,
            setGameData: setGameData,
            selected: true,
          })
        }
      }
    }
  }

  const clearCardContextData = () => {
    setGearCardSource({ gameData: {}, setGameData: null, selected: false })
    setGearCardTarget({ gameData: {}, setGameData: null, selected: false })
  }

  useEffect(() => {
    if (gearCardTarget.selected === true && gearCardSource.selected === true) {
      const targetTemp = gearCardTarget
      gearCardTarget.setGameData(gearCardSource.gameData)
      gearCardSource.setGameData(targetTemp.gameData)
      clearCardContextData()
    }
  }, [gearCardSource, gearCardTarget, setGearCardSource, setGearCardTarget])

  return (
    <CardContext.Provider
      value={{ cardInteractionHandler, clearCardContextData }}
    >
      {props.children}
    </CardContext.Provider>
  )
}
