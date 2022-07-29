import styled from "styled-components";




export const BodyContainer = styled.div`
flex: 0.8;
height: auto;
overflow-y: overlay;
background: linear-gradient(#340034, #000);
padding: 20px;
&::-webkit-scrollbar{
   display:none;
}
`

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 35px;
`

export const HeaderLeft = styled.div`
display: flex;
background-color: #fff;
color: #181818;
border-radius: 30px;
flex: 0.5;
padding: 10px;
align-items: center;


& input {
    border: none;
    width: 100%;
}
`

export const HeaderRight = styled.div`
display: flex;
align-items: flex-start;

& h4 {
    margin-left: 15px;
    color: #fff;
}
`
export const Info = styled.div`
display: flex;
align-items: flex-end;
padding-bottom: 20px;

& img{
   width: 20vw;
   min-width: 170px;
   margin: 0 20px;
   box-shadow: 0 4px 60px #000;
}
`

export const InfoText = styled.div`
 color: #fff;
 display: flex;
 flex-direction: column;
 margin-left: 20px;
 & h1 {
    font-family:cursive;
 }
 & p {
    font-size: 20px;
    font-family: cursive
 }
`

export const Songs = styled.div`
margin-top:20px;
`

export const Icons = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
margin-left: 20px;
align-self:flex-start;
width: 10vw;
color: #fff;
padding-bottom: 20px;
`

export const SongsContainer = styled.div`
  display:flex;
  height: 210px;
  cursor: pointer;
  color: #fff;
  
  & :hover {

   /* background-color: #000000; */
   opacity:0.8;
  }
  & img{
   width:100px;
   height:100px;
   margin-left: 20px;
   margin-right:20px;
  }
/*   @media (max-height: 1565px) {
   & img{
      overflow:hidden;
      
  }
} */
`

export const SongInfo = styled.div`
 
`