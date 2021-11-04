import styled from 'styled-components'
import theme, { mrTestTheme } from '../../styles/theme'
import { TileMaterial, GameTile } from './GameTile'

const GRID_SQUARE_SIZE_REM = 3
const SQUARE_DIAGONAL_LENGTH_REM = GRID_SQUARE_SIZE_REM * Math.SQRT2
const STRIPE_WIDTH_RATIO = 8
const DEFAULT_TILE_COLOR = mrTestTheme.stone

type RenderTileProps = {
  gameTile: GameTile
}

const tileMaterialColorMap = new Map<string, string>()

tileMaterialColorMap.set(TileMaterial.DIRT, mrTestTheme.dirt)
tileMaterialColorMap.set(TileMaterial.GRASS, mrTestTheme.grass)
tileMaterialColorMap.set(TileMaterial.STONE, mrTestTheme.stone)


const RenderTile = ({ gameTile }: RenderTileProps) => {

  return <TestTileStyle bgColor={tileMaterialColorMap.get(gameTile.material) || DEFAULT_TILE_COLOR}></TestTileStyle>
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

export default RenderTile
