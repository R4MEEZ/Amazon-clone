import React, { useState } from "react";
import "../Services/Login.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginToken, setLoginToken] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleForm = () => {
    const saveData = {
      username: username,
      password: password,
    };

    axios
      .post("https://dummyjson.com/auth/login", saveData)
      .then((response) => {
        console.log(response.data);
        setLoginToken(response.data.token);
        setCookie("token", response.data.token, { path: "/", maxAge: 6000 });
        navigate('/')
      });
  };

  const handleCookie = () => {
    const recieveToken = cookie.token;
    if (recieveToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${recieveToken}`,
        },
      };

      axios
        .get("https://dummyjson.com/auth/me", config)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Failed to get user data:", error);
          // Handle error: display an error message to the user or perform other actions as needed
        });
    } else {
      console.log("No token found.");
      // Handle case where token doesn't exist, e.g., redirect user to login page
    }
  };
  console.log(loginToken);

  return (
    <>
      <div className="form-main-container">
        <div className="form-container">
          <p className="title">Login</p>
          <form className="form">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="lusername"
                value={username}
                placeholder=""
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password" // Corrected type from "lpassword" to "password"
                value={password}
                name="password"
                id="password"
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="forgot">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password ?
                </a>
              </div>
            </div>
            <button className="sign" type="button" onClick={handleForm}>
              Sign in
            </button>
            {/* <button className="get" type="button" onClick={handleCookie}>
              Get Cookie
            </button> */}
          </form>
        </div>
      </div>
    </>
  );
}
