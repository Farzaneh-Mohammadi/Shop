// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

import {mobile} from "./SliderResponsive"
import {tablet} from "./SliderResponsive"


const Container = styled.div`
  height: 60vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin: 2rem ;

  ${mobile({ display: "none" })}
  ${tablet({ 
     height: "40vh",
  margin: "1rem" ,
   })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};



`;

const ImgContainer = styled.div`
  height: 90%;
  flex: 1;
  margin: 3rem 5rem;

  ${tablet({ 
      height: "50%",
      margin: " 0 5rem 16rem 5rem ",
   })}

`;

const Image = styled.img`
  height: 65%;
  filter: drop-shadow(5px 5px 4px #6e706f);

  ${tablet({ 
  margin: "0 0 5rem 0",
   })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin: -15% 10rem 0 5rem;

  ${tablet({ 
   padding: "50px",
  margin: "0 20rem 22rem 0"
   })}
   
`;

const Title = styled.h1`
  font-size: 50px;

  ${tablet({ 
  fontSize:" 30px",
   })}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;

  ${tablet({ 
  fontSize:" 10px",
  margin: "10px 0px",
  letterSpacing:  "0",
   })}
`;



const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <AiFillCaretLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              {/* <Button>SHOW NOW</Button> */}
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <AiFillCaretRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
