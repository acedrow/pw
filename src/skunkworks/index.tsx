import { mdTheme } from '../styles/theme'
import TestTile from './TestTile'

const Skunkworks = () => {
  return (
    <>
      <h1 style={{ color: 'white' }}>WELCOME TO THA DUNK ZONE BAYBEEE</h1>
      <div>
        <TestTile bgColor={mdTheme.mdPurple} />
        <TestTile bgColor={mdTheme.mdLavender} />
        <TestTile bgColor={mdTheme.mdYellow} />
        <TestTile bgColor={mdTheme.mdOrange} />
        <TestTile bgColor={mdTheme.mdRed} />
        <TestTile bgColor={'#70824a'} />
        <TestTile bgColor={mdTheme.mdYellow} bgColor2={mdTheme.mdLavender} />
      </div>
    </>
  )
}

export default Skunkworks
