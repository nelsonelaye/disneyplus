import React, { Component } from "react";
import styled from "styled-components"
import Slide from "./Slide"
import View from "./View"
import Recommend from "./Recommend"


const Home = () => {
  return (
    <Container>
        <Slide/>
        <View/>
        <Recommend/>
    </Container>
  )
}

export default Home;

const Container = styled.div`
    height: 100%;
    min-height: 100vh; 
    width: 100%;
    position:relative;

    :before {
        content: "Text";
        position: absolute;
        top:0;
        bottom: 0;
        left:0;
        right:0;
        background-image:url("/Assets/images/home-background.png");
        background-size:cover;
        background-repeat:no-repeat;
        
        
    }
`