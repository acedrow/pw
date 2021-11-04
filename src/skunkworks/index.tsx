import { mdTheme } from '../styles/theme'
import { GameTile, TileMaterial } from './map/GameTile'
import RenderArena from './map/RenderArena'
import RenderTile from './map/RenderTile'

const Skunkworks = () => {
  const dirtFloor: GameTile = { material: TileMaterial.DIRT, isWall: false }
  const grassFloor: GameTile = { material: TileMaterial.GRASS, isWall: false }
  const stoneWall: GameTile = { material: TileMaterial.STONE, isWall: true }

  const testMap: GameTile[][] = [
    [dirtFloor, grassFloor, dirtFloor],
    [grassFloor, stoneWall, dirtFloor],
    [dirtFloor, dirtFloor, grassFloor],
  ]

  return (
    <>
      <h1 style={{ color: 'white' }}>WELCOME TO THA DUNK ZONE BAYBEEE</h1>
      <RenderArena arenaTileset={testMap} />
    </>
  )
}

export default Skunkworks
