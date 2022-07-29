import React from 'react'
import {BodyContainer, Info, InfoText, Songs, Icons} from './styles'
import Header from '../Body/Header'
import { useSelector } from 'react-redux'
import { selectList } from '../../features/listSlice'
import { selectUser } from '../../features/UserSlice'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';
import SongsRow from './SongsRow'



const Body = () => {
  const playlist = useSelector(selectList);
  const user = useSelector(selectUser);
  return (
    <BodyContainer>
      <Header user={user}/>
      <Info>
        {<img src={playlist?.images[0].url} alt="logo" />}
        <InfoText>
        <h1>PLAYLIST</h1>
        <p>{playlist?.name}</p>
      </InfoText>
      </Info>
      <Icons>
              <PlayCircleFilled className='playList'/>
              <Favorite className='favorite' fontSize='large'/>
              <MoreHoriz className='more' fontSize='large'/>
      </Icons>
      <Songs>
           {
            playlist && playlist.tracks.items.slice(0,6).map((item, index)=>
            <SongsRow track={item} key={index}>
               
            </SongsRow>
            )
           }
      </Songs>
  
    </BodyContainer>
  )
}

export default Body