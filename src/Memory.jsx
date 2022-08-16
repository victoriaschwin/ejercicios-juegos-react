import React, { useState } from 'react';
import CocaCola from './assets/imatges_r23_memory/cocacola.jpg';
import Lipton from './assets/imatges_r23_memory/lipton.jpg';
import Nada from './assets/imatges_r23_memory/_nada.jpg';
import Kitkat from './assets/imatges_r23_memory/kitkat.jpg';
import Milka from './assets/imatges_r23_memory/milka.jpg';
import Pepsi from './assets/imatges_r23_memory/pepsi.jpg';

import './Memory.css'

function Memory() {


  const [tablero, setTablero] = useState([
    { logo: Pepsi, isVisible: false, index: 0 },
    { logo: Nada, isVisible: false, index: 1 },
    { logo: Pepsi, isVisible: false, index: 2 },
    { logo: Nada, isVisible: false, index: 3 },
    { logo: Nada, isVisible: false, index: 4 },
    { logo: Nada, isVisible: false, index: 5 },
    { logo: CocaCola, isVisible: false, index: 6 },
    { logo: Kitkat, isVisible: false, index: 7 },
    { logo: Milka, isVisible: false, index: 8 },
    { logo: Nada, isVisible: false, index: 9 },
    { logo: Nada, isVisible: false, index: 10 },
    { logo: Milka, isVisible: false, index: 11 },
    { logo: Nada, isVisible: false, index: 12 },
    { logo: Kitkat, isVisible: false, index: 13 },
    { logo: Nada, isVisible: false, index: 14 },
    { logo: Lipton, isVisible: false, index: 15 },
    { logo: Nada, isVisible: false, index: 16 },
    { logo: CocaCola, isVisible: false, index: 17 },
    { logo: Nada, isVisible: false, index: 18 },
    { logo: Lipton, isVisible: false, index: 19 },
  ]);

  const [anterior1, setAnterior1] = useState();
  const [anterior2, setAnterior2] = useState();

  function revelar(index) {

    let nuevoTablero = [...tablero];

    nuevoTablero[index].isVisible = true;

    if (anterior1 === undefined && anterior2 === undefined) {
      setAnterior1(nuevoTablero[index]);
      console.log('primer if')
    } else if (anterior2 === undefined) {
      setAnterior2(nuevoTablero[index]);
      console.log('segundo if')

    } else {


      console.log('tercer if')

      if (anterior1.logo === anterior2.logo) {
        setAnterior1(nuevoTablero[index]);
        setAnterior2(undefined);
        console.log('cuarto if')

      } else {
        nuevoTablero[index].isVisible = false;
        setAnterior1(nuevoTablero[index].index);
        setAnterior2(undefined);
        
        console.log('quinto if')


      }
    }
    setTablero(nuevoTablero)
    console.log(anterior1, anterior2);

  }

  const tabla = tablero.map((elemento, index) => {
    if (elemento.isVisible === true) {
      return (
        <div key={index} onClick={() => revelar(index)}>
          <img src={elemento.logo} />
        </div>
      )
    }else{
      return(
        <div style={{backgroundColor: "gray", borderColor: "black", width: "50px", height:"50px" }} onClick={() => revelar(index)}> 
        </div>
    
      )
    }
  

  }
  )

  return (
    <>
      <div className="tablero">
      {tabla}
      </div>




    </>
  )
}

export default Memory