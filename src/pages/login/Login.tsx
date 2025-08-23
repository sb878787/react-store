// React Import
import React, { useState } from "react";

// Components Import
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

// Contexts Import
import { useLoginContext } from "../../context/LoginContext";

function Login() {
  const { handleLogin } = useLoginContext();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <Container>
        <div className="bg-slate-300 p-12 rounded">
          <input
            type="text"
            name="username"
            placeholder="username"
            value={user.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={user.password}
            onChange={handleInputChange}
          />

          <Button onClick={() => handleLogin(user.username, user.password)}>
            Login
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
