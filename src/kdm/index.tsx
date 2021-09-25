import gear from '../../assets/kdm-data/core-gear-only.json'

const KdmMainpage = () => {
  const gearList = gear
  console.log('gearList', gearList)
  //don't run this at runtime, use in dev to generate the correct list of gear
  // console.log('parsedGear', JSON.stringify(parseGear(gearList)))

  return <>KINGDOM DEEEEETH
  
  </>

}

export default KdmMainpage
