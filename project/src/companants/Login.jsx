import "./Logein.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setuser] = useState([]);
  const [error, setError] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const isLoginDisabled = !username || !password;

  useEffect(() => {
    async function featch() {
      try {
        const dataBase = await axios.get(
          "https://65572bb0bd4bcef8b6122d2f.mockapi.io/ameen"
        );
        setuser(dataBase.data);

        console.log("Data fetched successfully:", dataBase.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    featch();
  }, []);

  const handleLogin = async () => {
    try {
      user.forEach((response) => {
  
        if (response.Email === username&&response.Password === password) {
          console.log("Login successful");

          // Redirect to another page if needed
          navigate("/mypage");
        } else {
          // Simulate a failed login
          console.log("Login failed");
          console.log(response.Email);

          setError("Invalid username or password");
        }
      });
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login");
    }
  };
  return (
    <div id="loginAndRegisterForm">
      <form id="loginForm">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label>Email:</label>
        <input
          type="text"
          id="email"
          required
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button type="button" onClick={handleLogin} disabled={isLoginDisabled}>
          Login
        </button>
        <button id="registerButton" type="button">
          Register
        </button>
      </form>

      {/* Your registerForm component here */}

      <button id="logoutButton" style={{ display: "none" }}>
        Logout
      </button>
    </div>
  );
}

export default Login;
