import styled from 'styled-components'
import { GameTile } from './GameTile'
import RenderTile from './RenderTile'

type RenderMapProps = {
  arenaTileset: GameTile[][]
}

const TileRow = styled.div`
  display: flex;
`

const RenderArena = ({ arenaTileset }: RenderMapProps) => {
  return (
    <div>
      {arenaTileset.map((tileRow) => (
        <TileRow>
          {tileRow.map((tile) => (
            <RenderTile gameTile={tile}></RenderTile>
          ))}
        </TileRow>
      ))}
    </div>
  )
}

export default RenderArena
