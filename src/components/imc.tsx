import React from "react";

'use client';

export default function IMC () {

  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [imc, setImc] = React.useState('');

    function handleClick() {
        const alturaMetros = Number(altura) / 100;
        const total = (Number(peso) / (alturaMetros * alturaMetros)).toFixed(2);
        setImc(total)
    }

    return (
        <div>
            <label htmlFor="peso">Peso</label>
            <input type="number" id="peso" name="peso" value={peso} onChange={(e) => setPeso(e.target.value)}/>
            <label htmlFor="altura">Altura</label>
            <input type="number" id="altura" name="altura" value={altura} onChange={(e) => setAltura(e.target.value)}/>
            <button onClick={handleClick}>Calcular</button>
            <p>IMC :{imc}</p>
        </div>
    )
}