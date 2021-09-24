import styled from 'styled-components'

const GRID_SQUARE_SIZE_REM = 3
const SQUARE_DIAGONAL_LENGTH_REM = GRID_SQUARE_SIZE_REM * Math.SQRT2
const STRIPE_WIDTH_RATIO = 8

const DiagonalTiled = styled.div`
  width: ${GRID_SQUARE_SIZE_REM}rem;
  height: ${GRID_SQUARE_SIZE_REM}rem;
  background: repeating-linear-gradient(
    45deg,
    #606dbc,
    #606dbc ${SQUARE_DIAGONAL_LENGTH_REM / 8}rem,
    #465298 ${SQUARE_DIAGONAL_LENGTH_REM / 8}rem,
    #465298 ${SQUARE_DIAGONAL_LENGTH_REM / 4}rem
  );
`

//should change the colors to refer to terrain types and match those to the colors.
//want these props to solely represent game state, then I can use the same type to hold game board data.
type TestTileProps = {
  bgColor: string
  bgColor2?: string
  contents?: string
}

const TestTile = ({ bgColor: bgColor, bgColor2 }: TestTileProps) => {
  return <TestTileStyle bgColor={bgColor} bgColor2={bgColor2}></TestTileStyle>
}

const TestTileStyle = styled.div<{ bgColor: string; bgColor2?: string }>`
  width: ${GRID_SQUARE_SIZE_REM}rem;
  height: ${GRID_SQUARE_SIZE_REM}rem;
  font-size: ${GRID_SQUARE_SIZE_REM}rem;
  background: ${(p) =>
    p.bgColor2 !== undefined
      ? `repeating-linear-gradient(
    45deg,
    ${p.bgColor},
    ${p.bgColor} ${SQUARE_DIAGONAL_LENGTH_REM / STRIPE_WIDTH_RATIO}rem,
    ${p.bgColor2} ${SQUARE_DIAGONAL_LENGTH_REM / STRIPE_WIDTH_RATIO}rem,
    ${p.bgColor2} ${SQUARE_DIAGONAL_LENGTH_REM / (STRIPE_WIDTH_RATIO / 2)}rem
  );`
      : p.bgColor};
`

export default TestTile
