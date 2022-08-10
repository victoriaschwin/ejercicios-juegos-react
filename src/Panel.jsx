import React from 'react';
import styled from 'styled-components';



const Titulo = styled.div`
width: 600px,
`;

function Panel(props){
  return (
    <>
      <Titulo>{props.mensaje}</Titulo>
    </>
  )
}

export default Panel