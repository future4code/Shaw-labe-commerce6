import React from "react";
import Carrinho from "./ComponentCarrinho/carrinho"
import Itens from "./ComponentCarrinho/ProdutosCarrinho/produtos";


class App extends React.Component {
  state = {
    carrinho: [],
    totalValue: 0,}

  addCarrinho = (produto) => {
    const produtoNoCarrinho = this.state.carrinho.filter((item) => {
      if (item.id === produto.id) {
        return item;
      }else{
        return false
      }
    });

    if (produtoNoCarrinho.length === 0) {
      produto.quantidade = 1;
      const novoCarrinho = [produto, ...this.state.carrinho];
      this.setState({
        carrinho: novoCarrinho,
      });
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (produto.id === item.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        } else {
          return item;
        }
      });

      this.setState({
        carrinho: novoCarrinho,
      });
    }
    this.addTotalValue(produto.preco);
  };

removeCarrinho = (itemParaRemover) => {
    if (itemParaRemover.quantidade === 1) {
      const novoCarrinho = this.state.carrinho.filter((item) => {
        if (item.id !== itemParaRemover.id) {
          return item;
        }else{
          return false
        }
      });
      this.setState({
        carrinho: novoCarrinho,
      });
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (itemParaRemover.id === item.id && item.quantidade >= 1) {
          return { ...item, quantidade: item.quantidade - 1 };
        } else {
          return item;
        }
      });
      this.setState({
        carrinho: novoCarrinho,
      });
    }
    this.removeTotalValue(itemParaRemover.preco)
  };

  addTotalValue = (valor) => {
    this.setState({
      totalValue: this.state.totalValue + valor
    });
  };

  removeTotalValue = (valor) => {
    this.setState({
      totalValue: this.state.totalValue - valor
    });
  };


  render() {
    const produtosFiltrados = this.filtrarProdutos();
    
    return (
      <div>
        <Carrinho
          carrinho={this.state.carrinho}
          totalValue={this.state.totalValue}
          removeCarrinho={this.removeCarrinho}
        />
      </div>
    );
  }
}

export default App;