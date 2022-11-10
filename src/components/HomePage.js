import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import Timeline from "./Timeline";
import config from "../config.json";
import { CSSReset } from "./CSSReset";
import styled, { ThemeProvider } from "styled-components";
import ColorModeProvider, { ColorModeContext } from "./ColorMode";

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  },
};

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={"light"}>
      {props.children}
    </ColorModeProvider>
  )
}

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");
  const contexto = React.useContext(ColorModeContext)
  //const valorDoFiltro = "Frost"
  return (
      <ThemeProvider theme={theme[contexto.mode]}>
        <CSSReset />
        <Header banner={config.banner}></Header>
        {/*Prop Drilling*/}
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Timeline searchValue={valorDoFiltro} playlist={config.playlist}>
          {setValorDoFiltro}
        </Timeline>
      </ThemeProvider>
  );
}
export default function _App(props) {
  return (
    <ProviderWrapper>
      <HomePage {...props}/>
    </ProviderWrapper>
  )
}

const StyledHome = styled.body`
  width: 1512px;
  height: 1103px;
  background-color: "#FFFFFF";
`;
