import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <h2>Contador: {contador}</h2>
