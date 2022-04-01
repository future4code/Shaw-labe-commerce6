import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  div{
    display: flex;
    justify-content: center;
  }
`;
const Pacotes = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 5%;
  margin-right: 5%;
  justify-content: space-evenly;
`;
const Card = styled.div`
  height: 60vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
  border: 1px solid black;
  padding :10px;
  }
  img {
    width:100%;
    height: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

class Main extends React.Component {
  state = {
    pacotes: [
      {
        title: "4 Noites na Lua",
        imagem:
          "https://mistobrasilia.com/wp-content/uploads/2021/03/Lua-terra.jpg",
        price: "R$ 30.000,00",
        id: Date.now(),
      },
      {
        title: "6 Noites em Marte",
        imagem:
          "https://s2.glbimg.com/jpY7P1hBfgBZ3JTaa1na1ga-0dQ=/620x430/e.glbimg.com/og/ed/f/original/2018/05/03/insigt.png",
        price: "R$ 30.000,00",
        id: Date.now(),
      },
      {
        title: "3 Noites observando a Terra",
        imagem:
          "http://www.tecnoetc.com.br/wp-content/uploads/2014/05/space.jpg",
        price: "R$ 15.000,00",
        id: Date.now(),
      },
      {
        title: "Observação Guiada: Cygnus X-1 (Black Hole)",
        imagem:
          "https://www.espacotempo.com.br/wp-content/uploads/2021/03/Black_hole_Cygnus_X-1.jpg",
        price: "R$95.000,00",
        id: Date.now(),
      },
      {
        title: "Observação Guiada: Sagittarius A* (Black Hole)",
        imagem:
          "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/sgr_lg.jpg",
        price: "R$ 30.000,00",
        id: Date.now(),
      },
      {
        title: "Tour de 20 dias pelas Luas Jovianas",
        imagem:
          "https://media.gazetadopovo.com.br/2020/08/07155330/bigstock-Planet-Jupiter-And-His-Satelli-261754525-660x372.jpg",
        price: "R$ 150.000,00",
        id: Date.now(),
      },
    ],

    carrinho: [],
  };

  /* addCarrinho = (produto) => {
    const produtoNoCarrinho = this.state.carrinho.filter((item) => {
      if (item.id === produto.id) {
        return item;
      } else {
        return false;
      }
    });
  }; */

  render() {
    const renderizaNaTela = this.state.pacotes.map((pacote) => {
      return (
        <Card>
          <img src={pacote.imagem} alt="" />
          <div>
            <h3>{pacote.title}</h3>
            <h4>{pacote.price}</h4>
          </div>
          <button onClick={this.addCarrinho}>Adicionar ao Carrinho</button>
        </Card>
      );
    });

    return (
      <MainContainer>
        <div>
          <p>Quantidade de produtos: {this.state.pacotes.length}</p>
        </div>

        <Pacotes>{renderizaNaTela}</Pacotes>
      </MainContainer>
    );
  }
}

export default Main;