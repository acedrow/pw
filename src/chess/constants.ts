export const BOARD_WHITE = '#a1a1a1'
export const BOARD_BLACK = '#a10005'

export enum PIECES {
  WHITE_KING = '♔',
  WHITE_QUEEN = '♕',
  WHITE_ROOK = '♖',
  WHITE_BISHOP = '♗',
  WHITE_KNIGHT = '♘',
  WHITE_PAWN = '♙',

  BLACK_KING = '♚',
  BLACK_QUEEN = '♛',
  BLACK_ROOK = '♜',
  BLACK_BISHOP = '♝',
  BLACK_KNIGHT = '♞',
  BLACK_PAWN = '♟︎',
}

type coordinatePoint = {
  x: number
  y: number
}

const startPos = new Map<coordinatePoint, PIECES>()
startPos.set({ x: 0, y: 0 }, PIECES.WHITE_ROOK)
startPos.set({ x: 1, y: 0 }, PIECES.WHITE_KNIGHT)
startPos.set({ x: 2, y: 0 }, PIECES.WHITE_BISHOP)
startPos.set({ x: 3, y: 0 }, PIECES.WHITE_QUEEN)
startPos.set({ x: 4, y: 0 }, PIECES.WHITE_KING)
startPos.set({ x: 5, y: 0 }, PIECES.WHITE_BISHOP)
startPos.set({ x: 6, y: 0 }, PIECES.WHITE_KNIGHT)
startPos.set({ x: 7, y: 0 }, PIECES.WHITE_ROOK)

for (let x = 0; x < 8; x++) {
  startPos.set({ x: x, y: 0 }, PIECES.WHITE_PAWN)
}

startPos.set({ x: 0, y: 6 }, PIECES.BLACK_ROOK)
startPos.set({ x: 1, y: 6 }, PIECES.BLACK_KNIGHT)
startPos.set({ x: 2, y: 6 }, PIECES.BLACK_BISHOP)
startPos.set({ x: 3, y: 6 }, PIECES.BLACK_QUEEN)
startPos.set({ x: 4, y: 6 }, PIECES.BLACK_QUEEN)
startPos.set({ x: 5, y: 6 }, PIECES.BLACK_BISHOP)
startPos.set({ x: 6, y: 6 }, PIECES.BLACK_KNIGHT)
startPos.set({ x: 7, y: 6 }, PIECES.BLACK_ROOK)

for (let x = 0; x < 8; x++) {
  startPos.set({ x: x, y: 7 }, PIECES.BLACK_PAWN)
}

export const STARTING_POSITIONS = startPos
