import React from "react";
import Styled from "styled-components";

const Rodape = Styled.footer`
width: 100vw;
height: 15%;
border: solid 1px black;
display: flex;
justify-content: space-around;
align-items: center;
`

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <Rodape>
          <h5>
            {" "}
            Futurama - Passagens Espaciais - 00.123.456/0001-00 Rua Pais Leme,
            215 - São Paulo, SP - 05424-150
          </h5>
          <a href="http://localhost:3000/">
            {" "}
            <button class="botao">Volte ao Topo</button>
          </a>
        </Rodape>
      </>
    );
  }
}
