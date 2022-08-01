export const getTokenFromURL = ()=> {
   return window.location.hash
   //retorna la parte ancla de un URL.
   //#access_token=BQA-pCpb--M-0Fap28GaToSuiGxxKWJ-Hjjbs7BmHYWy9gZwsVTx2IPIKjMK4ni5yuzMzT0bpXJ7E0CxFTZq6OH1zpxU5xpvYZn-F8scWOXDq3nVD2ydJAGlnEOeqHfuKjnXdQRpRziQJJtHuRQjzmYqdp7QaEuYhOZWaxpOdP-9f3U9LQQDoyC_6ksNOfOKk6Q1cJEOA12ygdai&token_type=Bearer&expires_in=3600
   .substring(1)
   //Substring(1) extrae el primer caracter, e imprime el resto de la cadena hasat el final
   //access_token=BQA-pCpb--M-0Fap28GaToSuiGxxKWJ-Hjjbs7BmHYWy9gZwsVTx2IPIKjMK4ni5yuzMzT0bpXJ7E0CxFTZq6OH1zpxU5xpvYZn-F8scWOXDq3nVD2ydJAGlnEOeqHfuKjnXdQRpRziQJJtHuRQjzmYqdp7QaEuYhOZWaxpOdP-9f3U9LQQDoyC_6ksNOfOKk6Q1cJEOA12ygdai&token_type=Bearer&expires_in=3600
   .split('&')
   //divide una cadena de texto en un array de cadenas mediante la separacion "&"
   //["access_token=BQA-pCpb--M-0Fap28GaToSuiGxxKWJ-Hjjbs7BmHYWy9gZwsVTx2IPIKjMK4ni5yuzMzT0bpXJ7E0CxFTZq6OH1zpxU5xpvYZn-F8scWOXDq3nVD2ydJAGlnEOeqHfuKjnXdQRpRziQJJtHuRQjzmYqdp7QaEuYhOZWaxpOdP-9f3U9LQQDoyC_6ksNOfOKk6Q1cJEOA12ygdai", 
   //"token_type=Bearer", 
   //"expires_in=3600"]
   .reduce((initial, item) =>{
    //Ejecuta una funcion reductora sobre cada elemento de un array, y devuelve un solo valor
      let parts = item.split("=")
    //[["access_token",
    //"BQA-pCpb--M-0Fap28GaToSuiGxxKWJ-Hjjbs7BmHYWy9gZwsVTx2IPIKjMK4ni5yuzMzT0bpXJ7E0CxFTZq6OH1zpxU5xpvYZn-F8scWOXDq3nVD2ydJAGlnEOeqHfuKjnXdQRpRziQJJtHuRQjzmYqdp7QaEuYhOZWaxpOdP-9f3U9LQQDoyC_6ksNOfOKk6Q1cJEOA12ygdai"], 
    //["token_type",
    //"Bearer"], 
    //["expires_in", 
    //"3600"]]
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
   }, {})
}



const endPoint = "https://accounts.spotify.com/authorize"
const clientId = "38f62bdc334e447782af0ecb36633b13"
const redirectURI = "https://react-spotify-mu.vercel.app/"
const scopes = ["user-read-currently-playing", 
"user-read-recently-played", "user-read-playback-state", 
"user-top-read", 
"user-modify-playback-state"]
export const loginURL =`${endPoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&show_dialog=true`;

