import { TileState } from '.'
import { PIECES, PIECE_WHITE } from './constants'

export const isPieceWhite = (piece: string | undefined) => {
  return (
    piece === PIECES.WHITE_KING ||
    piece === PIECES.WHITE_QUEEN ||
    piece === PIECES.WHITE_BISHOP ||
    piece === PIECES.WHITE_KNIGHT ||
    piece === PIECES.WHITE_ROOK ||
    piece === PIECES.WHITE_PAWN
  )
}

export const isMoveLegal = (
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  board: TileState[][]
): boolean => {
  const piece = board[startX][startY].contents
  console.log(`isMoveLegal piece: ${piece}, starting at: ${startX}, ${startY}, ending at: ${endX}, ${endY}`)

  if (piece) {
    if (piece === PIECES.BLACK_PAWN || piece === PIECES.WHITE_PAWN) {
      return checkPawnMove(startX, startY, endX, endY, piece, board)
    }
  }
  return true
}

const checkPawnMove = (
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  piece: string,
  board: TileState[][]
): boolean => {
  //pawns only move along y
  if (startX !== endX) {
    return false
  }
  if (piece === PIECES.WHITE_PAWN) {
    if (startY > endY) {
      return false
    }
  }
  if (piece === PIECES.BLACK_PAWN) {
    if (startY < endY) {
      return false
    }
  }
  return true
}
