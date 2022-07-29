
export const getApi = async() => {
  let peticion = await fetch("https://api.spotify.com/v1/audio-analysis/38f62bdc334e447782af0ecb36633b13", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${userAccessToken}`
    }
  })
  let resp = await peticion.json()
  return resp;
}
