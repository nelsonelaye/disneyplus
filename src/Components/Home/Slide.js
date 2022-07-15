import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Caro {...settings}>
        <SlideCon>
          <a>
            <img src="/Assets/images/slider-badging.jpg" />
          </a>
        </SlideCon>
        <SlideCon>
          <a>
            <img src="/Assets/images/slider-scale.jpg" />
          </a>
        </SlideCon>
        <SlideCon>
          <a>
            <img src="/Assets/images/slider-scales.jpg" />
          </a>
        </SlideCon>
        <SlideCon>
          <a>
            <img src="/Assets/images/slider-badag.jpg" />
          </a>
        </SlideCon>
      </Caro>
    </div>
  );
};

export default Slide;

const Caro = styled(Slider)`
  & > button {
    height: 100%;
    width: 8vw;
    z-index: 1;
    opacity: 0;

    :hover {
      opacity: 1;
    }
  }

  ul li button::before {
    &::before {
      font-size: 10px;
      color: #f2f2f2;
    }
  }

  li.slick-active button {
    &::before {
      color: white;
    }
  }

  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  overflow: hidden;
`;

const SlideCon = styled.div`
  cursor: pointer;
  height: 50vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
