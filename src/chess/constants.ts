export const BOARD_WHITE = '#a1a1a1'
export const BOARD_BLACK = '#a10005'
export const PIECE_WHITE = 'white'
export const PIECE_BLACK = 'black'

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

const startPos = new Map<string, PIECES>()
startPos.set('00', PIECES.WHITE_ROOK)
startPos.set('10', PIECES.WHITE_KNIGHT)
startPos.set('20', PIECES.WHITE_BISHOP)
startPos.set('30', PIECES.WHITE_QUEEN)
startPos.set('40', PIECES.WHITE_KING)
startPos.set('50', PIECES.WHITE_BISHOP)
startPos.set('60', PIECES.WHITE_KNIGHT)
startPos.set('70', PIECES.WHITE_ROOK)

for (let x = 0; x < 8; x++) {
  startPos.set(`${x}1`, PIECES.WHITE_PAWN)
}

startPos.set('07', PIECES.BLACK_ROOK)
startPos.set('17', PIECES.BLACK_KNIGHT)
startPos.set('27', PIECES.BLACK_BISHOP)
startPos.set('37', PIECES.BLACK_KING)
startPos.set('47', PIECES.BLACK_QUEEN)
startPos.set('57', PIECES.BLACK_BISHOP)
startPos.set('67', PIECES.BLACK_KNIGHT)
startPos.set('77', PIECES.BLACK_ROOK)

for (let x = 0; x < 8; x++) {
  startPos.set(`${x}6`, PIECES.BLACK_PAWN)
}

export const STARTING_POSITIONS = startPos
