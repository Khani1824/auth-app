import "./App.css";
import { Container, Button, Navbar, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { USERS } from "./users";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
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
      navigate("/home");
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
        <Form className="p-1 text-start">
          <Form className=" p-1 text-start">Email address:</Form>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form>
        <Form className="p-1 text-start mb-2">
          <Form className="p-1 text-start">Password:</Form>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        <Button className="mt-2 w-100" onClick={() => navigate("/home")}>
          Log In
        </Button>
      </Container>
    </div>
  );
}

export default Login;
