import { useContext } from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const Nav =  styled.div`
border:solid;
height:40px;
display:flex;
gap:30px;
justify-content:center;
align-items: center;
`

export const Navbar = () => {
  const { token,Auth, setAuth } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully

  return (
    <>
      <Nav>
        {/* keep all the NavLinks here */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link onClick={()=>setAuth(false)} to="/logout">Logout</Link>
        <Link to="/books">Books</Link>
        
      </Nav>
    </>
  );
};
