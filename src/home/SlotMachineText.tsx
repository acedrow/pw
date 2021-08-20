import { useEffect, useState } from "react"
import styled from "styled-components"

const homepagePhrases = [
  "dungeon master",
  "barbel gremlin",
  "märzentrinker",
  "miniature-painter",
  "guitarist",
  "songwriter",
  "bassist",
  "enormous nerd",
  "ex-fencer",
  "memelord",
  "bedroom engineer",
  "rock-climber",
  "raleigh rider",
  "strategy gamer",
  "taco connoisseur",
  "canoe-sterner",
  "green pepper afficionado",
  "red bull racing superfan",
  "dice crafter",
  "ｖａｐｏｒｗａｖｅ producer",
  "Checo Perez stan",
  "basement-rockstar",
  "dedicated headbanger",
  "karaoke enthusiast",
  "DIY music supporter",
  "mostpit devotee",
]

const reelItemHeightPixels = 21

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

const SlotMachineTextEffect = ({ textItems }: { textItems?: string[] }) => {
  textItems =
    textItems === undefined || textItems.length === 0
      ? homepagePhrases
      : textItems

  const [reelTop, setReelTop] = useState<number>(0)

  useEffect(() => {
    console.log("reelTop:", reelTop)
  }, [reelTop])

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = getRandomInt(
        textItems?.length ? textItems?.length - 1 : 1
      )
      setReelTop(-(newIndex * reelItemHeightPixels))
    }, 2000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <MaskContainer>
      <ReelContainer top={reelTop}>
        {textItems.map((text) => (
          <ReelItem>
            <span>{text}</span>
          </ReelItem>
        ))}
      </ReelContainer>
    </MaskContainer>
  )
}

export default SlotMachineTextEffect

const MaskContainer = styled.div`
  position: absolute;
  background-color: grey;
  width: 250px;
  height: ${reelItemHeightPixels}px;
  overflow: hidden;
`

const ReelItem = styled.div`
  height: ${reelItemHeightPixels}px;
`

const ReelContainer = styled.div<{ top: number }>`
  position: absolute;
  top: ${(props) => props.top}px;
  width: 100%;
  transition: top ease-in-out 0.5s;
  //text-align: center;
`
