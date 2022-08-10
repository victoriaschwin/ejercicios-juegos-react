import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

import Trio from './Trio';
import PPT from './PPT';
import Memory from './Memory';
import TicReact from './TicReact';

const Titulo = styled.h1`
margin: 1rem;
padding: 1rem;
font-size: 2rem;
`;

function App() {





  return (
    <>
      <Titulo>Trio</Titulo>
      <Trio />
      <Titulo>Piedra, Papel o Tijera</Titulo>
      <PPT />
      <hr />
      <Titulo>Memory</Titulo>
      <Memory />
      <Titulo>Tic React Toe</Titulo>
      <TicReact />
    </>
  )
}

export default App
