import styled from 'styled-components'
import FoodRoller from './FoodRoller'

const FLHomepage = () => {
  const rollFood = () => {}

  return (
    <PageContainer>
      <h1>Forbidden Lands for the Forbidden Lads</h1>
      <FoodRoller />
    </PageContainer>
  )
}

const PageContainer = styled.div`
  //text color
  min-height: 100%;
  margin-left: 15px;
`

export default FLHomepage
