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

export type GearData = {
  type: string;
  name: string;
  location: string;
}