import React from 'react'
import styled from "styled-components"

const  View = () => {
  return (
    <Outer>
        <Container>
            <Wrap>
                <img src="/Assets/images/viewers-disney.png" alt="" />
                <video autoPlay={true} loop={true} playInline={true} muted={true} >
                    <source  src="/Assets/videos/disney.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/Assets/images/viewers-pixar.png" alt="" />
                <video autoPlay={true} loop={true} playInline={true} muted={true}  >
                    <source  src="/Assets/videos/pixar.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/Assets/images/viewers-marvel.png" alt="" />
                <video autoPlay={true} loop={true} playInline={true} muted={true}  >
                    <source  src="/Assets/videos/marvel.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/Assets/images/viewers-starwars.png" alt="" />
                <video autoPlay={true} loop={true} playInline={true} muted={true}  >
                    <source  src="/Assets/videos/star-wars.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="/Assets/images/viewers-national.png" alt="" />
                <video autoPlay={true} loop={true} playInline={true} muted={true}  >
                    <source  src="/Assets/videos/national-geographic.mp4" type="video/mp4" />
                </video>
            </Wrap>
        
        </Container>
    </Outer>
    
  )
}
export default View;

const Outer = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    padding: 0px 30px;
`

const Container = styled.div`
    margin-top: 10px;
    width:100%;
    padding: 30px 0px 26px;
    display:grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media screen and (max-width: 765px){
        grid-template-columns: repeat(1, minmax(0, 1fr));

    }    
`

const Wrap = styled.div`
    height: 150px;
    border: 3px solid rgb(249, 249, 249);
    box-shadow:  rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor:pointer;
    border-radius: 10px;
    z-index:1;
    position: relative;

    @media screen and (max-width: 765px){
        height: 200px;

    }

    img{
        width:100%;
        height:100%;
        object-fit:cover;
        position: absolute;
        top:0;
    }

    video{
        width:100%;
        height:100%;
        object-fit:cover;
        opacity:0;
        transition: all .35s; ease-in;

        :hover{
            opacity:1;
        }
    }
    
`