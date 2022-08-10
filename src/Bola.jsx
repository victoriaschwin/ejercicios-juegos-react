import  React, {useState} from 'react';
import styled from 'styled-components';


    const Bola1 = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 100%;
        display: inline-block;
        margin: 0.5rem;
        background-color: pink;
        line-height: 40px;
        text-align: center;
    `;
 

function Bola({numero}){



    return (
        <>
            <Bola1>{numero}</Bola1>
        </>
    )
}


export default Bola;
