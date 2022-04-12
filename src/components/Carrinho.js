import React from "react";
import Itens from "./ProdutosCarrinho"
import styled from "styled-components";

const DivCarrinho = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: gray;
    border-radius: 10px;
    button {
        border-radius: 5px;
        background-color: #E0FFFF;
        font-family: Roboto;
        font-size: 15px;
        border: 0px solid;
        :hover {
            background-color: #D3D3D3;
        }
    }
`

class Carrinho extends React.Component {
  render() {
    const itensDoCarrinho =
      this.props.carrinho &&
      this.props.carrinho.map((item) => {
        return (
          <Itens
            key={item.id}
            quantidade={item.quantidade}
            nome={item.name}
            onClick={() => this.props.removerItemDoCarrinho(item)}
          />
        );
      });

    return (
      <DivCarrinho>
        <h2>Carrinho:</h2>
        <div>{itensDoCarrinho}</div>
        <p>Valor total: R$ {this.props.valorTotal}</p>
      </DivCarrinho>
    );
  }}

export default Carrinho;
