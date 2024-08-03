import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

export default function UseMemoPage(){
  
  const [name, setName] = useState("");
  const [password, setPassaword] = useState("");
  
  const validadePassword = useMemo(() => {
    return <ValidadePassword password={password} />
  }, [password])
  
  return (
    <>
      <h1>useMemo</h1>
      <p>
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          id="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value) }
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
      {validadePassword}
      <br />
      <Link to='/'>Voltar para Home</Link>
    </>
  )
}

    const ValidadePassword = ({ password }) => {
      console.log(password)
        if(!password.length) return <span>A senha deve ser preenchida!</span>
        if(password.length < 5) return <span>A senha deve ser maior que 5 caracteres</span>
        return <span>Senha aprovada!</span>
    }
