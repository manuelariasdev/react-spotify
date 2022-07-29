import React from 'react'
import { SongsContainer, SongInfo } from './styles'

const SongsRow = (props) => {
  const {track} = props.track;
  return (
    <SongsContainer>
        <img src={track.album.images[0].url} alt="img"/>
        <SongInfo>
         <h4>{track.name}</h4>
         <p>{track.artists.map((art, index)=>
         art.name).join(", ")}
         {track.album.name}
         </p>
       </SongInfo>
    </SongsContainer>
  )
}

export default SongsRow