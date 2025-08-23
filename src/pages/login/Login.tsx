import React from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useLoginContext } from "../../context/LoginContext";

function Login() {
    const { handleLogin } = useLoginContext();

  return (
    <div>
      <Container>
        <div className="bg-slate-300 p-12 rounded">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />

          <Button onClick={handleLogin}>Login</Button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
