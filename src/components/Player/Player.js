import React from 'react'
import { SpotifyBody, MainBody} from './styles'
import Body from '../Body/Body'
import SideBar from '../SideBar/SideBar'
import Fotter  from '../Footer/Fotter'

const Player = () => {
  return (
    <>
    
    <SpotifyBody>
      <SideBar/>
      <MainBody>
        <Body/>
      </MainBody>
    </SpotifyBody>
    <Fotter/>
    </>
  )
}

export default Player