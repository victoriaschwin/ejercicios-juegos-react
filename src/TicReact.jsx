import React, { useState, useEffect, useRef } from 'react';
import Panel from './Panel';
import Celda from './Celda';
import './TicReact.css'
import { Button } from 'react-bootstrap';
import X from './assets/ticreact/x.png';
import O from './assets/ticreact/o.png';




function TicReact() {

  const [mapa, setMapa] = useState(['', '', '', '', '', '', '', '', '']);
  const [turno, setTurno] = useState(1);
  const [gameover, setGameover] = useState(false);
  const [ganador, setGanador] = useState('');
  const [reset, setReset] = useState(false);

  const mapaRef = useRef(null);



  function jugada(index) {

    let nuevoMapa = [...mapa];
    if (nuevoMapa[index] === '' && ganador === '') {

      let turnoActual = turno === 1 ? X : O;
      nuevoMapa[index] = turnoActual;
      setTurno(turno === 1 ? 2 : 1);
      setMapa(nuevoMapa);
      
    }
  }

  const celdasTablero = mapa.map((valor, index) => <Celda key={index} valor={valor} index={index} jugada={jugada} />)

  const resetPartida = () => {
    setReset(!reset);
    setMapa([]);
    setTurno(1);
    setGanador('');
  }
  return (
    <>

      <Panel ganador={ganador} turno={turno} ></Panel>
      <div className='container'>
        {celdasTablero}
      </div>
      <Button onClick={resetPartida}>Reiniciar</Button>
    </>
  )
}

export default TicReact