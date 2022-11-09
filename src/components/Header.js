import config from "../config.json";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 1512px;
  height: 342px;
  position: absolute;
  left: 0px;
  top: 56px;
  background-color: "#FFFFFF";
`;
const StyledUser = styled.div`
  width: 521px;
  height: 80px;
  position: absolute;
  left: 16px;
  top: 246px;
  border-radius: 40%;

  .img-perfil {
    width: 80px;
    height: 80px;
    left: 16px;
    top: 302px;
    border-radius: 50%;
  }
  .font {
    width: 310px;
    height: 28px;
    font-family: Helvetica;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    position: absolute;
    left: 91px;
    top: 17px;
  }
  .font2 {
    width: 498px;
    height: 18px;
    font-family: Helvetica;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #666666;
    position: absolute;
    left: 91px;
    top: 47px;
  }
`;
export default function Header() {
  const imgBanner = {
    width: "1903px",
    height: "230px",
  };
  return (    
      <StyledSection>
        <img style={imgBanner} src="./img/banner.jpg" alt="" />
        <StyledUser>
          <img
            className="img-perfil"
            src={`https://github.com/${config.github}.png`}
            alt="#"
          />
          <p className="font">{config.name}</p>
          <p className="font2">{config.job}</p>
        </StyledUser>
      </StyledSection>
  );
}
