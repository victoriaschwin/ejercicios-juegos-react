import React, { useState } from 'react';
import CocaCola from './assets/imatges_r23_memory/cocacola.jpg';
import Lipton from './assets/imatges_r23_memory/lipton.jpg';
import Nada from './assets/imatges_r23_memory/_nada.jpg';
import Kitkat from './assets/imatges_r23_memory/kitkat.jpg';
import Milka from './assets/imatges_r23_memory/milka.jpg';
import Pepsi from './assets/imatges_r23_memory/pepsi.jpg';

import './Memory.css'

function Memory() {

  const fondo = [CocaCola, Lipton, Nada, Kitkat, Milka, Pepsi]

  const [tablero, setTablero] = useState([
    { Pepsi, isVisible: false, index: 0 },
    { Nada, isVisible: false, index: 1 },
    { Pepsi, isVisible: false, index: 2 },
    { Nada, isVisible: false, index: 3 },
    { Nada, isVisible: false, index: 4 },
    { Nada, isVisible: false, index: 5 },
    { CocaCola, isVisible: false, index: 6 },
    { Kitkat, isVisible: false, index: 7 },
    { Milka, isVisible: false, index: 8 },
    { Nada, isVisible: false, index: 9 },
    { Nada, isVisible: false, index: 10 },
    { Milka, isVisible: false, index: 11 },
    { Nada, isVisible: false, index: 12 },
    { Kitkat, isVisible: false, index: 13 },
    { Nada, isVisible: false, index: 14 },
    { Lipton, isVisible: false, index: 15 },
    { Nada, isVisible: false, index: 16 },
    { CocaCola, isVisible: false, index: 17 },
    { Nada, isVisible: false, index: 18 },
    { Lipton, isVisible: false, index: 19 },
  ]);

  const [anterior1, setAnterior1] = useState();
  const [anterior2, setAnterior2] = useState();

  function revelar(index) {

    let nuevoTablero = [...tablero];

    nuevoTablero[index].isVisible = true;

    console.log(nuevoTablero)

    if (anterior1 && anterior2 === null) {
      setAnterior1(nuevoTablero.index);
    } else if (anterior2 === null) {
      setAnterior2(nuevoTablero.index);
    }
  }


  return (
    <>
      <div className="tablero">
        <div onClick={() => revelar(0)}>
          <img src={fondo[5]} />
        </div>
        <div onClick={() => revelar(1)}>
          <img src={fondo[2]} />
        </div>
        <div onClick={() => revelar(2)}>
          <img src={fondo[5]} />
        </div>
        <div onClick={() => revelar(3)}>
          <img src={fondo[2]} />
        </div>
        <div onClick={() => revelar(4)}>
          <img src={fondo[2]} />
        </div>

        <div onClick={() => revelar(5)}>
          <img src={fondo[2]} />
        </div>
        <div onClick={() => revelar(6)}>
          <img src={fondo[0]} />
        </div>
        <div onClick={() => revelar(7)}>
          <img src={fondo[3]} />
        </div>
        <div onClick={() => revelar(8)}>
          <img src={fondo[4]} />
        </div>
        <div onClick={() => revelar(9)}>
          <img src={fondo[2]} />
        </div>

        <div onClick={() => revelar(10)}>
          <img src={fondo[2]} />
        </div>
        <div onClick={() => revelar(11)}>
          <img src={fondo[4]} />
        </div>
        <div onClick={() => revelar(12)}>
          <img src={fondo[2]} />
        </div>
        <div onClick={() => revelar(13)}>
          <img src={fondo[3]} />
        </div>
        <div onClick={() => revelar(14)}>
          <img src={fondo[2]} />
        </div>

        <div onClick={() => revelar(15)}>
          <img src={fondo[1]} />
        </div>
        <div onClick={() => revelar(16)}>
          <img src={fondo[2]} />
        </div>
        <div onClick={() => revelar(17)}>
          <img src={fondo[0]} />
        </div>
        <div onClick={() => revelar(18)}>
          <img src={fondo[2]} />
        </div>
        <div onClick={() => revelar(19)}>
          <img src={fondo[1]} />
        </div>
      </div>





    </>
  )
}

export default Memory