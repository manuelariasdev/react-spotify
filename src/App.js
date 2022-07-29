
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login/Login'
import Player from './components/Player/Player';
import { getTokenFromURL } from './spotifyLogin';
import { SET_USER, selectUser } from './features/UserSlice';
import SpotifyWebApi from 'spotify-web-api-js';
import { selectToken, SET_TOKEN } from './features/TokenSlice';
import { SET_LIST } from './features/listSlice';


const spotify = new SpotifyWebApi();


function App() {
  const token = useSelector(selectToken)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const hash = getTokenFromURL();
    const _token = hash.access_token;

    if(_token){
      dispatch(SET_TOKEN(_token))
      spotify.setAccessToken(_token);
      spotify.getMe().then( user => dispatch(SET_USER(user)));
      spotify.getPlaylist('0eY2pTN7Tp1TCNHsfFeHTk?si=1438139a8abc4c1d').then(playlist => dispatch(SET_LIST(playlist)));
    }

    
    /* spotify.searchTracks('artist:Love').then(
      function (data) {
        console.log('Search tracks by "Love" in the artist name', data);
      },
      function (err) {
        console.error(err);
      }
    ); */
  }, [dispatch])

  
  return (
    <div className="App">
     {
       user ? <Player/> : <Login/>
     }
    </div>
    
  );
}

export default App;
