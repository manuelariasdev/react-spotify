import {LoginContainer, LoginButton} from './styles'
import { loginURL } from '../../spotifyLogin'





const Login = () => {
  
  return (
    <LoginContainer>
        <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo"></img>
        <LoginButton href={loginURL} >Login with spotify</LoginButton>
    </LoginContainer>
  )
}

export default Login


