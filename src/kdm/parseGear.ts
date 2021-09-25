const parseGear = (gear: any) => {
  let gearValues = Object.values(gear)

  gearValues = gearValues.filter((val: any) => val?.expansion === undefined)

  const parsedGear = gearValues.map((val: any, idx) => {
    return { ...val }
  })
  return parsedGear
}

export default parseGear
