export enum coreSettlementLocations {
  BarberSurgeon = 'barber surgeon',
  Blacksmith = 'blacksmith',
  BoneSmith = 'bone smith',
  Catarium = 'catarium',
  ExhaustedLanternHoard = 'exhausted lantern hoard',
  LanternHoard = 'lantern hoard',
  LeatherWorker = 'leather worker',
  MaskMaker = 'mask maker',
  OrganGrinder = 'organ grinder',
  Plumery = 'plumery',
  Skinnery = 'skinnery',
  StoneCircle = 'stone circle',
  WeaponCrafter = 'weapon crafter',
}

const parseGear = (gear: any, expansions: string = 'none') => {
  //convert gearList to array
  let gearValues = Object.values(gear)

  gearValues = gearValues.filter((val: any) => val?.expansion === undefined)

  const parsedGear = gearValues.map((val: any, idx) => {
    return { ...val }
  })
  return parsedGear
}

export default parseGear
