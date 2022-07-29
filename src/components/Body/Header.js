import { HeaderContainer, HeaderLeft, HeaderRight} from '../Body/styles'
import SearchIcon from '@mui/icons-material/Search';
import {Avatar} from "@mui/material"

const Header = ({user}) => {
  return (
    <HeaderContainer>
        <HeaderLeft>
            <SearchIcon/>
            <input type="text" placeholder="Search for Artists, Songs or other" ></input>
        </HeaderLeft>
        <HeaderRight>
            <Avatar src={user?.images[0].url} alt="perfil"/>
            <h4>{user ? user.display_name : "Eduardo Arias"}</h4>
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header