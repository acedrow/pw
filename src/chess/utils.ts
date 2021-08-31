import { PIECES } from './constants'

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
