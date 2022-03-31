import React from "react";
import Matheus from "./components/Matheus"
import styled from "styled-components"



const AppBody = styled.div`
height: 100vh;
width: 100vw;

`

const Cabeçalho = styled.div`
width: 100%;
height: 18%;
border: 1px solid black;
display: flex;
justify-content: space-around;
align-items: center;

`
const InputsContainer = styled.div`
width: 100%;
height: 10%;
border: 1px solid black;
display: flex;
justify-content: space-around;

`
const InputValorMinimo = styled.input`
width: 150px;
height: 20px;
align-self: center;

`
const InputValorMaximo = styled.input`
width: 150px;
height: 20px;
align-self: center;
`

const InputBusca = styled.input`
width: 150px;
height: 20px;
align-self: center;
`
const Filtro = styled.p`
display: flex;
align-items: center;
font-size: 24px;
font-weight: bolder;
`
const Rodape = styled.footer`
width: 100vw;
height: 15%;
border: solid 1px black;
display: flex;
justify-content: space-around;
align-items: center;

`

const Seletor = styled.select`
width: 90px;
height: 20px;
align-self: center;
`
export default class App extends React.Component {

  state = {
    minimo: "",
    maximo: "",
    buscar: ""

  }
 
  
  InputValorMinimo = (ev) => {
    this.setState({ minimo: ev.target.value })
  }

  InputValorMaximo = (ev) => {
    this.setState({ maximo: ev.target.value })
  }

  InputBuscar = (ev) => {
    this.setState({ buscar: ev.target.value })
  }

  render() {
    return (
      <AppBody>
        <Cabeçalho>
          <h2>Logo</h2>
          <h1>FUTURAMA PASSAGENS ESPACIAIS</h1>
        </Cabeçalho>
        <InputsContainer>
          <Filtro> Filtro :</Filtro>
          <InputValorMinimo
            placeholder="Valor Minimo"
            type="number"
            value={this.state.minimo}
            onChange={this.InputValorMinimo}
          />

          <InputValorMaximo
            placeholder="Valor Maximo"
            type="number"
            value={this.state.maximo}
            onChange={this.InputValorMaximo}
          />

          <InputBusca
            placeholder="Produto"
            type="text"
            value={this.state.buscar}
            onChange={this.InputBuscar}
          />

          <Seletor>
            <option value="crescente">Crescente</option>
            <option value="decrecente">Decrecente</option>
          </Seletor>
        </InputsContainer>

        <Rodape>
          <h5> Futurama - Passagens Espaciais - 00.123.456/0001-00
            Rua Pais Leme, 215 - São Paulo, SP - 05424-150</h5>
          <a href="http://localhost:3000/"> <button class="botao">Volte ao Topo</button></a>
        </Rodape>



      </AppBody>
      );
    }
  }

 

