//GameTile solely holds game data.

export enum TileMaterial {
  STONE = 'stone',
  DIRT = 'dirt',
  GRASS = 'grass',
}

export type GameTile = {
  material: TileMaterial
  isWall: boolean
}
