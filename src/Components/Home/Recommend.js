import React from 'react'
import styled from "styled-components"
import data from "../Data.json"
import {Link} from "react-router-dom"

const  Recommend = () => {
  return (
    <div>
        <Container>
            <h3 style={{
                "color":"#fff",
                "font-weight": 700,
                "z-index": "5px"
        }}>Recommend for you </h3>
            <Wrapper>
                <ImageWrap>
                    {data .map((el) => (
                        <Main key={el.id} to={`/detail/${el.id1}`}>
                            <img src={el.cardImg} alt="cover"  />
                        </Main>
                    ))}
                </ImageWrap>  
            </Wrapper>
        </Container>
    </div>
    
  )
}
export default Recommend;

const Container = styled.div`
    display:flex;
    z-index:5;
    color:#fff;
    width: 100%;
    justify-content: center;
    flex-direction: column;
`

const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    padding:0px 30px;
    
`

const ImageWrap = styled.div`
    margin-top: 20px;
    z-index:1;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media screen and (max-width: 765px){
        grid-template-columns: repeat(1, minmax(0, 1fr));

    }
`

const Main = styled(Link)`
    height: 150px;
    border:3px solid #fff;
    border-radius: 10px;
    cursor:pointer;
    transition: all .35s ease-in;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
    @media screen and (max-width: 425px){
        height: 230px;

    }

    img{
        width:100%;
        height:100%;
        border-radius: 10px;
        object-fit: cover;
    }

    :hover{
        transform: scale(1.1);
    }
`