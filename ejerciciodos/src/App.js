import React from 'react';
import CalculadoraMedia from './calculadora';

function App() {
  return (
    <div className="container">
      <h1 >Calculadora de Promedio</h1>
      <div className='adentro'><a>Este algoritmo calcula la media (promedio) de tres números, ingresados por pantalla o
        parámetro de entrada, que sean enteros y positivos.</a></div >
      <CalculadoraMedia />
    </div >
  );
}

export default App;
