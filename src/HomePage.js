import Menu from "./components/Menu";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import config from "./config.json"
import { CSSReset } from "./components/CSSReset";
import styled from 'styled-components';

export default function HomePage() {
  return (
    <StyledHome>
      <CSSReset />
      <Header></Header>
      <Menu></Menu>
      <Timeline playlist={config.playlist}></Timeline>
    </StyledHome>
  );
}

const StyledHome = styled.body`
  width: 1512px;
  height: 1103px;
  background-color: "#FFFFFF";
`