import { useEffect, useState } from 'react'
import styled from 'styled-components'

const homepagePhrases = [
  'dungeon master',
  'barbel gremlin',
  'märzentrinker',
  'miniature painter',
  'guitarist',
  'songwriter',
  'bassist',
  'enormous nerd',
  'ex-fencer',
  'ascendent memelord',
  'orb-gazer',
  'caster of auguries',
  'astral projector',
  'professional amateur',
  'rock climber',
  'raleigh rider',
  'strategy gamer',
  'taco connoisseur',
  'canoe sterner',
  'green pepper afficionado',
  'red bull racing superfan',
  'dice crafter',
  'ambient producer',
  'Checo Perez stan',
  'basement-rockstar',
  'dedicated headbanger',
  'karaoke enthusiast',
  'DIY music supporter',
  'mostpit devotee',
]

//currently can't change this or font size without breaking styling 🙃🙃
const reelItemHeightPixels = 45

function getNewReelTop(max: number) {
  return -(
    reelItemHeightPixels * Math.floor(Math.random() * max) +
    reelItemHeightPixels / 2
  )
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
    <OuterContainer
      id="outer-container"
      aria-label="a rotating list of descriptions"
    >
      <MaskContainer id="mask-container">
        <ReelContainer id="reel-contain er" top={reelTop}>
          {textItems.map((text, index) => {
            const id = `reel-item-${index}`
            return (
              <ReelItem id={id}>
                <span
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                  }}
                >
                  {text}
                </span>
              </ReelItem>
            )
          })}
        </ReelContainer>
      </MaskContainer>
    </OuterContainer>
  )
}

export default SlotMachineTextEffect

const OuterContainer = styled.div``

const MaskContainer = styled.div`
  margin-top: -1rem;
  position: absolute;
  width: 100%;
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
