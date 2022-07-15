import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { RiCloseFill } from "react-icons/ri";
function Header() {
  const [toggle, setToggle] = React.useState(false);

  const changeBurger = () => {
    setToggle(!toggle);
  };

  // <Icon src="/Assets/images/home-icon.svg" alt="home" />
  // <Icon src="/Assets/images/search-icon.svg" alt="search" />
  // <Icon src="/Assets/images/series-icon.svg" alt="series" />
  // <Icon src="/Assets/images/movie-icon.svg" alt="new movies" />
  // <Icon src="/Assets/images/original-icon.svg" alt="entertainment news" />
  // <Icon src="/Assets/images/watchlist-icon.svg" alt="watchlist" />

  return (
    <Container>
      <Wrap>
        <Link to="/">
          <Logo src="/Assets/images/logo.svg" alt="site logo" />
        </Link>
        <Navigation>
          <Image src="/Assets/images/african-child.jpg" alt="profile logo" />
        </Navigation>

        <Bugger>
          {toggle ? (
            <GoThreeBars color="#fff" size="35px" onClick={changeBurger} />
          ) : (
            <RiCloseFill
              color="#fff"
              size="40px"
              font-weight="900"
              onClick={changeBurger}
            />
          )}
        </Bugger>
      </Wrap>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-color: #202332;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 50px;
  border-radius: 100%;
  cursor: pointer;
`;

const Navigation = styled.div`
  display: flex;
  //   width: 90%;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    // display: none;
  }
`;
const Navs = styled.div`
  display: flex;
  margin-right: 50px;
`;
const Nav = styled.div`
  font-weight: 600;
  color: #fff;
  display: flex;
  align-items: center;
  margin-left: 30px;
  cursor: pointer;
  position: relative;

  span {
    position: relative;
    transition: all 0.35s;

    ::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -7px;
      height: 2px;
      background-color: #fff;
      opacity: 0;
      transition: all 0.35s;
    }

    :hover {
      ::after {
        opacity: 1;
      }
    }
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 3px;
`;

const Bugger = styled.div`
  transition: all 0.35s;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    // display: block;
    display: none;
  }
`;
