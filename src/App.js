import React from "react";
import Matheus from "./components/Matheus";
// import styled from "styled-components"
import Rodape from "./components/Footer";
import Main from "./components/Main.js";
import Carrinho from "./components/Carrinho.js"
import Itens from "./components/ProdutosCarrinho.js"

export default class App extends React.Component {
  render() {
    return (
      <>
       
        <Matheus />
        <Main />
        <Itens/>
        <Carrinho
        //   carrinho={this.state.carrinho}
        //   valorTotal={this.state.valorTotal}
        //   removerItemDoCarrinho={this.removerItemDoCarrinho}
        />
        <Rodape />
      </>
    );
  }
}
