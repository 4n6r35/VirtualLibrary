import { useState } from "react";
import { setData } from "./../../controllers/firebase/funtions/setData.js";
import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  const signUp = async () => {
    const date = new Date();
    const id = date.getTime();

    const data = {
      username: username,
      password: password,
      email: email,
      id: id,
    };

    await setData(data, id.toString(), "Users");
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="link-signup">
            <p>¿Ya tienes una cuenta?</p>
            <a href="/login"> Inicia sesión aquí</a>
          </div>
          <div className="content-button">
            <button onClick={signUp}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
