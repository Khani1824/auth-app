import "./App.css";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { USERS } from "./users";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const redirectMessage = location.state?.message;

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    if (!email) {
      setError("Email is requred.");
      return;
    }

    if (!password) {
      setError("Password is requred.");
      return;
    }

    const foundUser = USERS.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password,
    );

    if (foundUser) {
      console.log("Success! Navigating...");
      navigate("/home", { state: { email: email } });
    } else {
      setError("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container
        className="text-center shadow p-4 rounded-3"
        style={{ width: "350px" }}
      >
        <h1>Sign In</h1>
        <div className="p-1 text-start">
          <label className="p-1">Email address:</label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="p-1 text-start mb-2">
          <label className="p-1">Password:</label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {redirectMessage && (
            <div className="text-danger mt-2" style={{ fontSize: "14px" }}>
              {redirectMessage}
            </div>
          )}
        </div>
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        <Button className="mt-2 w-100" onClick={(e) => handleLogin(e)}>
          Log In
        </Button>
      </Container>
    </div>
  );
}

export default Login;
