import gear from '../../assets/kdm-data/kdmapi-gear.json'
import parseGear, { coreSettlementLocations } from './parseGear'

const KdmMainpage = () => {
  const gearList = gear
  console.log('gearList', gearList)
  console.log('parsedGear', parseGear(gearList))

  return <>KINGDOM DEEEEETH</>
}

export default KdmMainpage
