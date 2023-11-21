import { useState } from "react";
import { setData } from "./../../controllers/firebase/funtions/setData.js";
import "./SignUp.css";
import TextInput from "../../components/TextInput/TextInput.jsx";
import { useAuth } from "../../context/ctx.jsx";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { _signUp } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await _signUp(email, password, username);
      const user = data.user;

      if (data) {
        const userData = {
          username: username,
          email: user.email,
          id: user.uid,
          typeUser: false,
          books: [],
        };

        await setData(userData, user.uid, "Users");
        setEmail("");
        setPassword("");
        setUsername("");
        navigate("/login");
      }
    } catch (error) {
      if (error.code === "auth/weak-password") {
        setError("El tamaño minimo de contraseña es 6");
      }
      if (error.code === "auth/internal-error") {
        setError("Correo invalido");
      }
      if (error.code === "auth/email-already-in-use") {
        setError(
          "La dirección de correo ya existe, por favor ingrese una nueva"
        );
      }
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <div>{error && <p>{error}</p>}</div>
        <form onSubmit={handleSignUp}>
          <TextInput
            title={"Email"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            title={"Username"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextInput
            title={"Password"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="link-signup">
            <p>¿Ya tienes una cuenta?</p>
            <a href="/login"> Inicia sesión aquí</a>
          </div>
          <div className="content-button">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
