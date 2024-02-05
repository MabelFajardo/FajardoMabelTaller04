import React, { useState } from 'react';
import './App.css';

const CalculadoraMedia = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleInputChange = (e, setNum) => {
        const inputValue = e.target.value;
        setNum(inputValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar que los valores son enteros y positivos
        if (!/^\d+$/.test(num1) || !/^\d+$/.test(num2) || !/^\d+$/.test(num3)) {
            alert('Por favor, ingrese números enteros y positivos.');
            return;
        }

        const media = (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;
        setResultado(media.toFixed(2));
    };

    const handleClear = () => {
        setNum1('');
        setNum2('');
        setNum3('');
        setResultado(null);
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <label>Ingrese el primer número:</label>
                <input type="number"value={num1}   onChange={(e) => handleInputChange(e, setNum1)}   />

                <label>Ingrese el segundo número:</label>
                <input type="number" value={num2} onChange={(e) => handleInputChange(e, setNum2)} />

                <label>Ingrese el tercer número:</label>
                <input type="number"  value={num3}  onChange={(e) => handleInputChange(e, setNum3)} />

                <div className="btn-container">
                    <button type="submit" className="btn">
                        Calcular promedio
                    </button>
                    <button type="button" className="btn" onClick={handleClear}>
                        Borrar todo
                    </button>
                </div>
            </form>

            {resultado !== null && (
                <div id="my-modal" className="modal show">
                    <div className="modal-body">
                    <div className="resulato">El promedio de la suma de los números <strong>{num1} + {num2} + {num3}</strong> y dividiendo el resultado de la suma entre la cantidad de números es: <strong>{resultado}</strong></div>
                    </div>
                    <div className="modal-footer">
                        <button  className="btn"   onClick={() => setResultado(null)}   >
                            Aceptar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalculadoraMedia;
