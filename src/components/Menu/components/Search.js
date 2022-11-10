import { MagnifyingGlass} from "phosphor-react";
import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
    input {
        width: 425px;
        height: 43px;
        position: absolute;
        top: 7px;
        left: 544px;
        background-color: "#F9F9F9";
        border: 1px solid gray;
        border-radius: 2px;
        box-sizing: border-box;
        margin-left: -1px;
        padding: 5px;
    }
`
export default function Search({ valorDoFiltro, setValorDoFiltro }) {
   //const [valorDaBusca, setValorDaBusca] = React.useState('')
   const valorDaBusca = valorDoFiltro;
   const setValorDaBusca = setValorDoFiltro;
    return (
        <StyledSearch>
            <input type="Text" onChange={(e) => setValorDaBusca(e.target.value)} placeholder="Pesquise algo" value={valorDaBusca}/>
                <button className="btn-search">
                    <MagnifyingGlass/>
                </button>
        </StyledSearch>    
    )
}
//onChange={(event) => setValorDaBusca(event.target.value)}