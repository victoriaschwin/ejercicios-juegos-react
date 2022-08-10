import React, {useState} from 'react';
import Panel from './Panel';
import Celda from './Celda';
import './TicReact.css'




function TicReact() {

  const [mapa, setMapa] = useState([]);
  const [turno, setTurno] = useState(true);
  const [gameover,setGameover] = useState(false);
  const [ganador, setGanador] = useState()

  return (
    <>

    <Panel mensaje='turno+resultado'></Panel>
    <div className='container'>
    <Celda />
    <Celda />
    <Celda />
    <Celda />
    <Celda />
    <Celda />
    <Celda />
    <Celda />
    <Celda />
    </div>
    
    </>
  )
}

export default TicReact