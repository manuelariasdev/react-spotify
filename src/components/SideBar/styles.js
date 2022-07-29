import styled from "styled-components";



export const SideBarContainer = styled.div`
flex: 0.2;
background-color: #000;
height: auto;
min-width: 240px;
color: #fff;
//////////////////////////
position: fixed;
  top: 0;
  left: 0;
  bottom:0;
& img {
    height: 70px;
    padding: 10px;
    margin-right: auto;
}

& hr {
    border: 1px solid silver;
    width: 90%;
    margin: 10px auto;
}
`

export const PlayList = styled.div`
margin: 5px 10px;
`

export const Choices = styled.div`
 display: flex;
 align-items: center;
 padding-left: 5px;
 color: gray;
 height: 44px;
 cursor: pointer;
 transition: 300ms color ease-in;

 &:hover{
  color: #fff;
 }

 & h5 {
    margin: 10px 0 0 20px;
 }
`