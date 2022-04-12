import React from "react";
import styled from "styled-components";


const DivItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin: 10px 0;
  }
`;

class Itens extends React.Component {
    render() {
      return (
        <DivItens>
          <p>{this.props.quantidade}x</p>
          <p>{this.props.nome}</p>
          <button onClick={this.props.onClick}>Remover</button>
        </DivItens>
      );
    }
  }

  export default Itens