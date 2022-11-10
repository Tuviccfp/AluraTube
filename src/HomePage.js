import React from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import config from "./config.json"
import { CSSReset } from "./components/CSSReset";
import styled from 'styled-components';

export default function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState('')
  //const valorDoFiltro = "Frost"
  return (
    <StyledHome>
      <CSSReset />
      <Header banner={config.banner}></Header>
      {/*Prop Drilling*/}
      <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}></Menu>
      <Timeline searchValue={valorDoFiltro} playlist={config.playlist}>{setValorDoFiltro}</Timeline>
    </StyledHome>
  );
}

const StyledHome = styled.body`
  width: 1512px;
  height: 1103px;
  background-color: "#FFFFFF";
`