import { PlayCircleOutline, Repeat, Shuffle, SkipNext, SkipPrevious, PlaylistPlay, VolumeDown } from '@mui/icons-material'
import { Grid, Slider } from '@mui/material'
import React from 'react'
import { FotterContainer, FotterLeft, FotterCenter, FotterRight  } from './styles'
const Fotter = () => {
  return (
    <FotterContainer>
      <FotterLeft>
        <img src="https://static.posters.cz/image/750/buque-costero/coldplay-parachutes-albun-cover-i56853.jpg" alt="cover"/>
        <div>
           <h4>Can i have a day with you</h4>
           <p>Michelle</p>
        </div>
      </FotterLeft>
      <FotterCenter>
        <Shuffle className='shuffle'/>
        <SkipPrevious className='icons'/>
        <PlayCircleOutline className='icons'/>
        <SkipNext className='icons'/>
        <Repeat className='repeat'/>
      </FotterCenter>
      <FotterRight>
        <Grid container spacing={2}>
           <Grid item><PlaylistPlay/></Grid>
           <Grid item><VolumeDown/></Grid>
           <Grid item xs><Slider/></Grid>
        </Grid>
      </FotterRight>
    </FotterContainer>
  )
}

export default Fotter