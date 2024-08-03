import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UseEffectPage() {
  const [name, setName] = useState("Carlos");
  const [password, setPassaword] = useState("");

  useEffect(() => {
    console.log(name, password)
  }, [name,password])

  return (
    <>
      <h1>useEffect</h1>
      <p>
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          id="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="password">Senha: </label>
        <input
          type="text"
          id="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassaword(e.target.value)}
        />
      </p>
      <Link to='/'>Voltar para Home</Link>
    </>
  );
}
