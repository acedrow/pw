import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BOARD_WHITE, BOARD_BLACK, STARTING_POSITIONS } from './constants'
console.log('startpos', STARTING_POSITIONS)
console.log('get test', STARTING_POSITIONS.get({ x: 0, y: 0 }))

type TileState = {
  color: string
  contents?: string
}

const TileContainer = styled.div<{ color: string }>`
  color: white;
  width: 4rem;
  height: 4rem;
  background-color: ${(p) => p.color};
`

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
      console.log('x:', x, 'y', y)
      startingBoard[x][y] = {
        color:
          x % 2 === 0
            ? y % 2 === 0
              ? BOARD_WHITE
              : BOARD_BLACK
            : y % 2 === 0
            ? BOARD_BLACK
            : BOARD_WHITE,
        contents: STARTING_POSITIONS.get({ x: x, y: y } || null),
      }
    }
  }
  return startingBoard
}

const ChessMain = () => {
  const [board] = useState<TileState[][]>(initializeBoard())

  useEffect(() => {
    console.log('board', board)
  }, [board])

  const test = [1, 2, 3]

  return (
    <>
      CHESS PAGE
      <RowHolder>
        {board?.map((row, x) => (
          <ColHolder>
            {row.map((col, y) => (
              <TileContainer color={col.color}>{col.contents}</TileContainer>
            ))}
          </ColHolder>
        ))}
      </RowHolder>
    </>
  )
}

export default ChessMain
