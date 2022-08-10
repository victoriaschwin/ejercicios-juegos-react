import React, {useState} from 'react';
import Piedra from "./assets/piedra.jpg";
import Papel from "./assets/papel.png";
import Tijera from "./assets/tijera.png";
import './PPT.css';
import styled from 'styled-components';

const Subtitulo = styled.h1`
margin: 1rem;
padding: 1rem;
font-size: 1.5rem;
`;
const Texto = styled.p`
margin: 1rem;
padding: 1rem;
font-size: 1.2rem;
font-style: bold;


`

function PPT() {

  const piedra = 1;
  const papel = 2;
  const tijera = 3;
  const [jugadaOrdenador, setJugadaOrdenador] = useState(0)
  const [resultado, setResultado] = useState('')
  const [fondo, setFondo] = useState('')

  let imagenes = [null, Piedra, Papel, Tijera];
  

  function jugada(elemento){
    let aleatorio = (Math.floor(Math.random()*3)+1);
    setJugadaOrdenador(aleatorio);
    
    if (elemento === 1 && aleatorio === 1){
        setResultado('Has empatado');
    } else if (elemento === 1 && aleatorio === 2){
      setResultado('Has perdido');
    } else if (elemento === 1 && aleatorio === 3){
      setResultado('Has ganado');
    }else if(elemento === 2 && aleatorio === 2){
        setResultado('Has empatado');
    } else if (elemento === 2 && aleatorio === 3){
      setResultado('Has perdido');
    } else if (elemento === 2 && aleatorio === 1){
      setResultado('Has ganado');
    }else if(elemento === 3 && aleatorio === 3){
        setResultado('Has empatado');
    } else if (elemento === 3 && aleatorio === 1){
      setResultado('Has perdido');
    } else if (elemento === 3 && aleatorio === 2){
      setResultado('Has ganado');
    } else {
      setResultado("algo falla")
    }


  }

  

  return (
    <div>
    <Subtitulo>Elije tu jugada</Subtitulo>
      <div className='jugada'>
        <img src={Piedra} alt="piedra" onClick={()=>jugada(piedra)} />
      </div>
      <div className='jugada'>
        <img src={Papel} alt="papel" onClick={()=>jugada(papel)}  />
      </div>
      <div className='jugada'>
        <img src={Tijera} alt="tijera" onClick={()=>jugada(tijera)} />
      </div>
      <br />
      <Subtitulo>Jugada del ordenador</Subtitulo>
      <div className='jugada'>
       <img src={imagenes[jugadaOrdenador]} alt="" />
      </div>
      <br />
      <div>
      <Subtitulo>Resultado</Subtitulo>
        <Texto>{resultado}</Texto>
      </div>
      

    </div>
  )
}

export default PPT