import React, {useState} from 'react';
import Gris from './assets/ticreact/gris.jpg';
import X from './assets/ticreact/x.png';
import O from './assets/ticreact/o.png';
import styled from 'styled-components';

const Imagen = styled.img`
width: 50px,
height: 50px,`;


function Celda(props) {
  
  let display = ''

  if (props.valor !== ''){
    display = (<img src= {props.valor} />)
  }

console.log(props.valor);

  const estilo = {
  width: "50px",
  height:"50px",
  backgroundColor: `gray`,
  borderColor: "white",
  borderWidth: "1px",
  borderStyle: "solid",
}
  return (
    <>
    <div style={estilo} onClick={()=>props.jugada(props.index)} value={props.valor}>
{display}
    </div>
    </>
  )
}

export default Celda