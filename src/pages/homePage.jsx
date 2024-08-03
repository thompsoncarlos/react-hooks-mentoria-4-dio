import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

export default function HomePage(){
  const user = useContext(UserContext);

  return(
    <>
      <h1>Bem vindo aos Hooks, {user.userName} !</h1>
      <Link to="/useState">useState</Link><br />
      <Link to="/useEffect">useEffect</Link><br />
      <Link to="/useCallback">useCallback</Link><br />
      <Link to='/useMemo'>useMemo</Link><br />
      <Link to='/useRef'>useRef</Link><br />
    </>
  )
}