import React from 'react'
import  {useState, useEffect} from "react"
import styled from "styled-components"
import Data from "../Data.json"
import {useParams, Link} from "react-router-dom"


const Detail =() => {
    
    const {id} = useParams()
    const render = Data[id - 1]

    // const params = useParams()
    // const id = params.id
    // const render = Data.find((el) => el.id === id)

    // const [getData, setGetData] = useState({})

    // const fetchData = () => {
    //     setGetData(render)
    //     console.log(id)
    // }

    // useEffect(()=> {
    //     fetchData()
    // }, [])

  return (
    <div>
        {
        <Background>
            <BImage>
                <img src= {render.backgroundImg} alt={render.title} />
            </BImage>
                <Content>
                    <TitleImg  src={render.titleImg} />
                    <Controls>
                        <Play>
                            <Icon src="/Assets/images/play-icon-black.png"  />
                            <Text>Play</Text>
                        </Play>
                        <Trailer>
                            <Icon src="/Assets/images/play-icon-white.png"  />
                            <Text>Play</Text>
                        </Trailer>
                        <GroupIcon>
                            <Icon src="/Assets/images/watchlist-icon.svg"  />
                        </GroupIcon>
                        <GroupIcon>
                            <Icon src="/Assets/images/group-icon.png"  />
                        </GroupIcon>
                    </Controls>
                    <SubTitle>{render.subTitle} </SubTitle>
                    <Description> {render.description} </Description>
                    
                </Content>
                <Link to="/">
                    <Back>
                        <img src="/Assets/images/backward.png"  />
                    </Back>
                </Link>
                
        </Background>
        }
    </div>
  )
}

export default Detail;

const Background = styled.div`

    background-size:cover;
    height: 85vh;
    width: 100%;
    color:white;
    position:relative;
   
`

const BImage = styled.div`
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index: -1;
    opacity:0.7;

    img{
        width:100%;
        object-fit:cover;
        height:100%;
    }
`

const Content = styled.div`
    width: 600px; 
    display:flex;
    flex-direction: column;
    margin: 0px 50px;
   
`

const TitleImg = styled.img`
    width:40%;
    margin-top: 30px;
`

const Controls = styled.div`
    display:flex;
    align-items: center;
    margin-top: 30px;
`

const Play = styled.div`
    width: 120px;
    height:40px;
    background-color:#fff;
    color:black;
    display:flex;
    align-items: center;
    border-radius:5px;
    border: 2px solid #fff;
    justify-content: center;
    cursor:pointer;
    margin-right:10px;
`

const Icon = styled.img`


`

const Text = styled.div`
    font-weight:500;
`

const Trailer = styled.div`
    width: 120px;
    height:40px;
    border: 2px solid #fff;
    border-radius:5px;
    color:white;
    display:flex;
    align-items: center;
    margin: 0px 10px;
    justify-content: center;
    cursor:pointer;

`

const GroupIcon = styled.div`
    cursor:pointer;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    display:flex;
    justify-content: center;
    margin: 0px 10px;
    align-items: center;
    border:2px solid #fff;
`

const SubTitle = styled.p`
    margin-top: 30px;
`

const Description = styled.p`
    margin-top: 30px;
    font-weight:500px;
`

const Back = styled.div`
    width: 50px;
    height:50px;
    display:flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    margin-top: 30px;
    position: absolute;
    bottom: 40px;
    right: 50px;
    cursor:pointer;


    img{
      width: 100%;
      height: 100%;
  
    }
`

