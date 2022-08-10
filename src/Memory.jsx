import React, { useState } from 'react';
import CocaCola from './assets/imatges_r23_memory/cocacola.jpg';
import Lipton from './assets/imatges_r23_memory/lipton.jpg';
import Maggi from './assets/imatges_r23_memory/maggi.jpg';
import Nada from './assets/imatges_r23_memory/_nada.jpg';
import Evian from './assets/imatges_r23_memory/evian.jpg';
import Kitkat from './assets/imatges_r23_memory/kitkat.jpg';
import Milka from './assets/imatges_r23_memory/milka.jpg';
import Mms from './assets/imatges_r23_memory/mms.jpg';
import OlDelPaso from './assets/imatges_r23_memory/oldelpaso.jpg';
import Pepsi from './assets/imatges_r23_memory/pepsi.jpg';
import Pringles from './assets/imatges_r23_memory/pringles.jpg';

import './Memory.css'

function Memory() {

  const [logos, setLogos] = useState([
    {Pepsi, isVisible: false, index: 0},
    {Nada, isVisible: false, index: 1},
    {Pepsi, isVisible: false, index: 2},
    {Nada, isVisible: false, index: 3},
    {Nada, isVisible: false, index: 4},
    {Lipton, isVisible: false, index: 1},
    {Maggi, isVisible: false, index: 2},
    {Evian, isVisible: false, index: 3},
    {Kitkat, isVisible: false, index: 4},
    {Milka, isVisible: false, index: 5},
    {Mms, isVisible: false, index: 6},
    {OlDelPaso, isVisible: false, index: 7},
    {Pepsi, isVisible: false, index: 8},
    {Pringles, isVisible: false, index: 9},
    {CocaCola, isVisible: false, index: 10}]);

    const [anterior1, setAnterior1] = useState();
    const [anterior2, setAnterior2] = useState();

    function revelar(index){

      let nuevoTablero = [...logos];

      nuevoTablero[index].isVisible = true;

      console.log(nuevoTablero)

      if(anterior1 && anterior2 === null){
        setAnterior1(logos.index);
      } else if(anterior2 === null){
        setAnterior2(logos.index);
      }
    }


  return (
    <>
      <div className="tablero">
        <div onClick={()=>revelar(8)}>a</div>
        <div onClick={()=>revelar(0)}>b</div>
        <div onClick={()=>revelar(8)}>c</div>
        <div onClick={()=>revelar(0)}>c</div>
        <div onClick={()=>revelar(0)}>c</div>

        <div onClick={()=>revelar(0)}>c</div>
        <div onClick={()=>revelar(10)}>c</div>
        <div onClick={()=>revelar(4)}>c</div>
        <div onClick={()=>revelar(5)}>c</div>
        <div onClick={()=>revelar(0)}>c</div>

        <div onClick={()=>revelar(0)}>c</div>
        <div onClick={()=>revelar(5)}>c</div>
        <div onClick={()=>revelar(0)}>c</div>
        <div onClick={()=>revelar(4)}>c</div>
        <div onClick={()=>revelar(0)}>c</div>

        <div onClick={()=>revelar(1)}>c</div>
        <div onClick={()=>revelar(0)}>c</div>
        <div onClick={()=>revelar(10)}>c</div>
        <div onClick={()=>revelar(0)}>c</div>
        <div onClick={()=>revelar(1)}>c</div>
      </div>





    </>
  )
}

export default Memory