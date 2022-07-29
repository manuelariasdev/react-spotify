import styled from "styled-components";


export const LoginContainer = styled.div`
display: grid;
place-items: center;
height: 100vh;
background-color: #000;
color: white;
& img {
  width: 100%;
}
`

/* const LoginContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background-color: #000;
color: white;

& img {
  width: 100%;
}
` */
export const LoginButton = styled.a`
padding: 20px;
background-color: #1db954;
text-decoration: none;
border-radius:90px;
color: white;
text-transform: uppercase;
font-weight: bolder;
`
