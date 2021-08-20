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

function getNewReelTop(max: number) {
  return -(reelItemHeightPixels * Math.floor(Math.random() * max))
}

const SlotMachineTextEffect = ({ textItems }: { textItems?: string[] }) => {
  textItems =
    textItems === undefined || textItems.length === 0
      ? homepagePhrases
      : textItems

  const [reelTop, setReelTop] = useState<number>(
    getNewReelTop(textItems?.length ? textItems?.length - 1 : 1)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const newReelTop = getNewReelTop(
        textItems?.length ? textItems?.length - 1 : 1
      )
      setReelTop(newReelTop)
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <OuterContainer>
      <MaskContainer>
        <ReelContainer top={reelTop}>
          {textItems.map((text) => (
            <ReelItem>
              <span>{text}</span>
            </ReelItem>
          ))}
        </ReelContainer>
      </MaskContainer>
    </OuterContainer>
  )
}

export default SlotMachineTextEffect

const OuterContainer = styled.div``

const MaskContainer = styled.div`
  position: absolute;
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
  transition: top ease-in-out 0.5s;
  //text-align: center;
`
