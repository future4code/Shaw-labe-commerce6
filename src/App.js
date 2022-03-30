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

export default class App extends React.Component {

  


  render() {
    return (
      <AppBody>
     <Cabeçalho>
             <h2>Logo</h2>
             <h1>FUTURAMA PASSAGENS ESPACIAIS</h1>         
      </Cabeçalho>
      <InputsContainer>
      <Filtro>Filtro :</Filtro>
        <InputValorMinimo
        placeholder="Valor Minimo"
        type="number"
        />
            
        <InputValorMaximo
        placeholder="Valor Maximo"
        type="number"
        />
         
        <InputBusca
        placeholder="Busca por Nome"
        type="text"  
        />
        </InputsContainer>
     
      </AppBody>
    );
  }
}
