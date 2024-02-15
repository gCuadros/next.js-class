"use client"

import React, { useState } from 'react'

export default function Counter() {

    const [newNumber, setNewNumber] = useState(0)
    const [resultNumber, setResultNumber] = useState(0)
    

    const handlerInputNumber = (e) =>{
        const numAux = parseInt(e.target.value)
        setNewNumber(numAux)
    }

    const handlerAddNumber = () =>{
        const numAux = resultNumber + newNumber
        setResultNumber(numAux)
    }

    const handlerSubtractNumber = () => {
        const numAux = resultNumber - newNumber
        setResultNumber(numAux)
    }

  return (
    <div>
        <span>Resultado: {resultNumber}</span>
        <hr />
      <input type="number" value={newNumber} onChange={handlerInputNumber}/>
      <hr />
      <button onClick={handlerAddNumber}>Sumar número +</button>
      <hr />
      <button onClick={handlerSubtractNumber}>Restar número -</button>
    </div>
  )
}
