import { useState } from "react";
import "./Login.css";
import TextInput from "../../components/TextInput/TextInput";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <TextInput
            onChange={(e) => setUsername(e.target.value)}
            title={"Username"}
            value={username}
            type="text"
          />
          <TextInput
            onChange={(e) => setPassword(e.target.value)}
            title={"Password"}
            value={password}
            type="password"
          />
          <div className="link-signup">
            <p>Aún no tienes cuenta,</p>
            <a href="/sign-up"> Registrate aquí</a>
          </div>
          <div className="content-button">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
