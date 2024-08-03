import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

export default function UseCallBackPage(){
  const [name, setName] = useState("Carlos");
  const [password, setPassaword] = useState("");

  // const onChangeName = (event) => {
  //   setName(event.target.value)
  // }

  const onChangeName = useCallback((event) => {
    console.log(name);
    setName(event.target.value);
  }, []);

  return (
    <>
      <h1>useCallback</h1>
      <p>
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          id="name"
          placeholder="Nome"
          value={name}
          onChange={onChangeName}
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
  )
}