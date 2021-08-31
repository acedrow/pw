import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  BOARD_WHITE,
  BOARD_BLACK,
  STARTING_POSITIONS,
  PIECE_WHITE,
  PIECE_BLACK,
} from './constants'
import GameTile from './gameTile'
import { isPieceWhite } from './utils'

type TileState = {
  tileColor?: string
  containsWhitePiece?: boolean
  contents?: string
}

const RowHolder = styled.div`
  display: flex;
  flex-direction: row;
`

const ColHolder = styled.div`
  display: flex;
  flex-direction: column;
`

const initializeBoard = (): TileState[][] => {
  const startingBoard: TileState[][] = []
  for (let x = 0; x < 8; x++) {
    startingBoard[x] = []
    for (let y = 0; y < 8; y++) {
      startingBoard[x][y] = {
        tileColor:
          x % 2 === 0
            ? y % 2 === 0
              ? BOARD_WHITE
              : BOARD_BLACK
            : y % 2 === 0
            ? BOARD_BLACK
            : BOARD_WHITE,
        containsWhitePiece: isPieceWhite(STARTING_POSITIONS.get(`${x}${y}`)),
        contents: STARTING_POSITIONS.get(`${x}${y}`) || undefined,
      }
    }
  }
  return startingBoard
}

const ChessMain = () => {
  const [board, setBoard] = useState<TileState[][]>(initializeBoard())
  const [startingTile, setStartingTile] = useState<
    { x: number; y: number; contents: string | undefined } | undefined
  >()
  const [endingTile, setEndingTile] = useState<
    { x: number; y: number; contents: string | undefined } | undefined
  >()

  useEffect(() => {
    console.log('startingTile', startingTile)
    console.log('endingTile', endingTile)
    if (startingTile && endingTile) {
      let newBoard = { ...board }
      const startTile = newBoard[startingTile.x][startingTile.y]
      const endTile = newBoard[endingTile.x][endingTile.y]

      newBoard[startingTile.x][startingTile.y] = {
        tileColor: startTile.tileColor,
        containsWhitePiece: false,
        contents: undefined,
      }
      newBoard[startingTile.x][startingTile.y] = {
        tileColor: startTile.tileColor,
        containsWhitePiece: startTile.containsWhitePiece,
        contents: startTile.contents,
      }
      setStartingTile(undefined)
      setEndingTile(undefined)
      setBoard(newBoard)
    }
  }, [startingTile, endingTile])

  const tileClickCallback = (
    x: number,
    y: number,
    contents: string | undefined
  ) => {
    console.log('x', x, 'y', y)
    if (contents) {
      setStartingTile({ x: x, y: y, contents: contents })
    } else if (startingTile) {
      setEndingTile({ x: x, y: y, contents: undefined })
    }
  }

  return (
    <>
      <p>starting tile: {JSON.stringify(startingTile)}</p>
      <p>ending tile: {JSON.stringify(endingTile)}</p>
      <RowHolder>
        {board?.map((row, xIndex) => (
          <ColHolder>
            {row.map((col, yIndex) => {
              return (
                <GameTile
                  key={`${xIndex}${yIndex}`}
                  contents={col.contents}
                  bgColor={col.tileColor}
                  clickCallback={tileClickCallback}
                  x={xIndex}
                  y={yIndex}
                />
              )
            })}
          </ColHolder>
        ))}
      </RowHolder>
    </>
  )
}

export default ChessMain
