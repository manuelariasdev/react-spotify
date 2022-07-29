import HomeIcon from '@mui/icons-material/Home';
import Search from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SideBarChoice from './SideBarChoice';
import { SideBarContainer, PlayList } from './styles'
const SideBar = () => {
  return (
    <SideBarContainer>
        <img src='https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg' alt='logo'></img>
        <SideBarChoice title="Home" Icon={ HomeIcon }/>
        <SideBarChoice title="Search" Icon={ Search }/>
        <SideBarChoice title="Your Library" Icon={ LibraryMusicIcon }/>
        <PlayList>PlayList</PlayList>
        <hr/>
        <SideBarChoice title="2022 - Chillout Music" />
        <SideBarChoice title="Loffi Music" />
   </SideBarContainer>
  )
}

export default SideBar