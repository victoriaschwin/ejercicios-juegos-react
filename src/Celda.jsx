import React, {useState} from 'react';
import Gris from './assets/ticreact/gris.jpg';
import X from './assets/ticreact/x.png';
import O from './assets/ticreact/o.png';
import styled from 'styled-components';

const Imagen = styled.img`
width: 50px,
height: 50px,`;


function Celda() {
  
  const [valor, setValor] = useState(0);

  const imagenes = [Gris,X,O]

  function jugada(){

    console.log('hola')
  }


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
    <div style={estilo} onClick={jugada} value={valor}>
    </div>
    </>
  )
}

export default Celda