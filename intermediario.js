import React, { useState } from 'react';

function AlternarTexto() {
  const [visivel, setVisivel] = useState(true);

  function alternar() {
    setVisivel(!visivel);
  }

  return (
    <div>
      <button onClick={alternar}>Mostrar/Ocultar</button>
      {visivel && <p>Este texto pode ser escondido.</p>}
    </div>
  );
}
