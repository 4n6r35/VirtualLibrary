import { useState } from "react";
import "./Login.css";
import TextInput from "../../components/TextInput/TextInput";
import { useAuth } from "../../context/ctx";
import { useNavigate } from "react-router-dom";
import { getData } from "../../controllers/firebase/funtions/getData";
import { modelUser } from "../../controllers/firebase/models/modelUsers";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { _login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const data = await _login(email, password);
      const user = data.user;

      if (data) {
        const u = await getData(user.uid, "Users", modelUser);
        localStorage.setItem("user", JSON.stringify(u));
        navigate("/books", {user});
      }
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-login-credentials") {
        setError("Email o contraseña incorrectos");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <div>{error && <p>{error}</p>}</div>
        <form onSubmit={handleLogin}>
          <TextInput
            onChange={(e) => setEmail(e.target.value)}
            title={"Email"}
            value={email}
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
