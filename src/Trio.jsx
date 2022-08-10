import React, {useState} from 'react';
import Bola from './Bola';
import Button from 'react-bootstrap/Button';


function Trio(props) {

  const [valor, setValor] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [valor3, setValor3] = useState(0);


  function calcula(){
    setValor(Math.floor(Math.random()*50 ))
    setValor2(Math.floor(Math.random()*50 ))
    setValor3(Math.floor(Math.random()*50 ))
  }


  return (
    <div>
      <Bola numero={valor}/>
      <Bola numero={valor2}/>
      <Bola numero={valor3}/>
      <br/>
      <Button variant="secondary" onClick={calcula}>Calcula</Button>

    </div>
  )
}

export default Trio