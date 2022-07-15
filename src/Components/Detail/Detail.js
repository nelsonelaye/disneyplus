import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Data from "../Data.json";
import { useParams, Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const Detail = () => {
  const [load, setLoad] = useState(true);
  const { id } = useParams();
  const render = Data[id - 1];

  // const params = useParams()
  // const id = params.id
  // const render = Data.find((el) => el.id === id)

  // const [getData, setGetData] = useState({})

  // const fetchData = () => {
  //     setGetData(render)
  //     console.log(id)
  // }

  useEffect(() => {
    setLoad(false);
  }, []);

  return (
    <>
      {
        <Background>
          {load ? <loader /> : null}
          <BImage>
            <img src={render.backgroundImg} alt={render.title} />
          </BImage>
          <Content>
            <TitleImg src={render.titleImg} />
            <Controls>
              <Play>
                <Icon src="/Assets/images/play-icon-black.png" />
                <Text>Play</Text>
              </Play>

              <GroupIcon>
                <Icon src="/Assets/images/group-icon.png" />
              </GroupIcon>
            </Controls>
            <SubTitle>{render.subTitle} </SubTitle>
            <Description> {render.description} </Description>
          </Content>
          <Link to="/">
            <Back>
              <img src="/Assets/images/backward.png" />
            </Back>
          </Link>
        </Background>
      }
    </>
  );
};

export default Detail;

const Background = styled.div`
  background-size: cover;
  height: calc(100vh - 80px);
  width: 100%;
  color: white;
  position: relative;
  box-sizing: border-box;

  @media screen and (max-width: 425px) {
    padding: 0 20px;
  }
`;

const BImage = styled.div`
  position: absolute;
  top: 0;

  left: 0;

  z-index: -1;
  opacity: 0.7;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;

const Content = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  //   margin: 0px 50px;
  padding: 0 40px;

  @media screen and (max-width: 768px) {
    width: 400px;
    padding: 0 20px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    padding: 0;
  }
`;

const TitleImg = styled.img`
  width: 40%;
  margin-top: 30px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const Play = styled.div`
  padding: 5px 15px;
  background-color: #fff;
  color: black;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #fff;
  justify-content: center;
  cursor: pointer;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    padding: 3px 10px;
  }
`;

const Icon = styled.img`
  @media screen and (max-width: 768px) {
    width: 30px;
  }

  @media screen and (max-width: 425px) {
    width: 25px;
  }
`;

const Text = styled.div`
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
  @media screen and (max-width: 425px) {
    font-size: 13px;
  }
`;

const Trailer = styled.div`
  padding: 5px 15px;

  border: 2px solid #fff;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  margin: 0px 10px;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 3px 10px;
  }
`;

const GroupIcon = styled.div`
  cursor: pointer;
  border-radius: 100%;
  //   width: 40px;
  //   height: 40px;
  display: flex;
  justify-content: center;
  margin: 0px 10px;
  align-items: center;
  border: 2px solid #fff;
  padding: 8px;

  @media screen and (max-width: 425px) {
    padding: 5px;
  }
`;

const SubTitle = styled.p`
  margin-top: 30px;

  @media screen and (max-width: 425px) {
  }
`;

const Description = styled.p`
  margin-top: 30px;
  font-weight: 500px;

  @media screen and (max-width: 425px) {
    margin-top: 13px;
  }
`;

const Back = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin-top: 30px;
  position: absolute;
  bottom: 40px;
  right: 50px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 425px) {
    bottom: 20px;
    right: 20px;
  }
`;
