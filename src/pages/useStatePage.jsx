import { useState } from "react";
import { Link } from "react-router-dom";

export default function UseStatePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>useState</h1>
      <p>
        O valor do contador é o estado que queremos controlar, por isso
        definimos através do hook useState o valor como count e para alterarmos
        este valor utilizaremos dois botões, com a propriedade onClick que ao ser clicado chama a função
        setCount.
      </p>
      <p>
        <strong>Contador: </strong>
        {count}
      </p>
      <p>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </p>
      <Link to='/'>Voltar para Home</Link>
    </>
  );
}
