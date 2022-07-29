import styled from "styled-components";


export const FotterContainer = styled.div`
display: flex;
justify-content: space-between;
background-color: #000;
position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
color: #fff;
`

export const FotterLeft = styled.div`
display: flex;
flex: 0.3;

& img {
    height: 60px;
    width: 60px;
    margin-right: 20px;
    object-fit: contain;
}

`

export const FotterCenter = styled.div`
flex: 0.4;
display: flex;
justify-items: center;
align-items: center;
justify-content: space-between;
max-width: 300px;
`

export const FotterRight = styled.div`
flex: 0.3;
display: flex;
align-items: center;
justify-content: center;
margin-right: 35px;

& .MuiSlider-colorPrimary{
    color: #00ff00;
    padding-top: 7px;
}
`


