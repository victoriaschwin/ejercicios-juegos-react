import React from 'react';
import styled from 'styled-components';



const Titulo = styled.div`
width: 600px,
`;

function Panel(props){
  return (
    <>
    <Titulo>Turno del jugador {props.turno}</Titulo>
      <Titulo>¡{props.ganador} ha ganado!</Titulo>
    </>
  )
}

export default Panel