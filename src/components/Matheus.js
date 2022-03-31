import React from "react";
import styled from "styled-components"

const Cabeçalho = styled.h2`
width: 100%;
height: 20%;
border: 1px solid black,
`

export default class Matheus extends React.Component {
    
  

    render() {
      return (
       <div>
           <Cabeçalho>
               <h2>Logo</h2>
               <h1>FUTURAMA PASSAGENS ESPACIAIS</h1>
           </Cabeçalho>
        </div>
      );
    }
  }