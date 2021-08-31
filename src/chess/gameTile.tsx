import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PIECE_BLACK, PIECE_WHITE } from './constants'
import { isPieceWhite } from './utils'

type GameTileProps = {
  contents?: string
  bgColor?: string
  clickCallback: (x: number, y: number, contents: string | undefined) => void
  x: number
  y: number
}

const GameTile = ({
  contents,
  bgColor,
  x,
  y,
  clickCallback,
}: GameTileProps) => {
  const color = isPieceWhite(contents) ? PIECE_WHITE : PIECE_BLACK

  onclick = () => {
    console.log('x, y, contents', x, y, contents)
    clickCallback(x, y, contents)
  }

  return (
    <TileContainer color={color} bgColor={bgColor}>
      <span>{contents}</span>
    </TileContainer>
  )
}

export default GameTile

const TileContainer = styled.div<{ color: string; bgColor?: string }>`
  color: ${(p) => p.color};
  width: 4rem;
  height: 4rem;
  font-size: 4rem;
  text-align: center;
  background-color: ${(p) => p?.bgColor || 'white'};
  :hover {
    border: 2px solid white;
    box-sizing: border-box;
    span:first-child {
      position: relative;
      top: -2px;
    }
  }
`
