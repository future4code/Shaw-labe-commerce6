import React from "react";
import Matheus from "./components/Matheus";
// import styled from "styled-components"
import Rodape from "./components/Footer";
import Main from "./components/Main.js";
import Carrinho from "./components/Carrinho.js";
import Itens from "./components/ProdutosCarrinho.js";

export default class App extends React.Component {
  state = {
    carrinho: [],
  };

  addCarrinho = (produto) => {
    const produtoNoCarrinho = this.state.carrinho.filter((pacote) => {
      if (pacote.id === produto.id) {
        return pacote;
      } else {
        return false;
      }
    });
    if (produtoNoCarrinho.length === 0) {
      produto.quantidade = 1;
      const novoCarrinho = [produto, ...this.state.carrinho];
      this.setState({
        carrinho: novoCarrinho,
      });
    } else {
      const novoCarrinho = this.state.carrinho.map((pacote) => {
        if (produto.id === pacote.id) {
          return { ...pacote, quantidade: pacote.quantidade + 1 };
        } else {
          return pacote;
        }
      });
      this.setState({
        carrinho: novoCarrinho,
      });
    }
    this.addTotalValue(produto.preco);
  };
  removeCarrinho = (pacoteParaRemover) => {
    if (pacoteParaRemover.quantidade === 1) {
      const novoCarrinho = this.state.carrinho.filter((pacote) => {
        if (pacote.id !== pacoteParaRemover.id) {
          return pacote;
        } else {
          return false;
        }
      });
      this.setState({
        carrinho: novoCarrinho,
      });
    } else {
      const novoCarrinho = this.state.carrinho.map((pacote) => {
        if (pacoteParaRemover.id === pacote.id && pacote.quantidade >= 1) {
          return { ...pacote, quantidade: pacote.quantidade - 1 };
        } else {
          return pacote;
        }
      });
      this.setState({
        carrinho: novoCarrinho,
      });
    }
    this.removeTotalValue(pacoteParaRemover.preco);
  };
  render() {
    return (
      <>
        <Matheus />
        <Main />
        <Itens />
        <Carrinho
        carrinho={this.state.carrinho}
        valorTotal={this.state.valorTotal}
        removerItemDoCarrinho={this.removerItemDoCarrinho}
        />
        <Rodape />
      </>
    );
  }
}
