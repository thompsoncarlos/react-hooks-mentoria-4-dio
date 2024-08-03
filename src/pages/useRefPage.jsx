import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function UseRefPage() {
  const [message, setMessage] = useState("");
  const inputRef = useRef();

  return (
    <>
      <h1>useRef</h1>
      <p>
        <label htmlFor="name">Mensagem: </label>
        <input
          ref={inputRef}
          type="text"
          id="name"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={() => {
            inputRef.current.focus()
            setMessage("");
          }}
        >
          Enviar
        </button>
      </p>
      <Link to="/">Voltar para Home</Link>
    </>
  );
}
