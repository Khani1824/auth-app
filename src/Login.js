import "./App.css";
import { Container, Button, Navbar, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container
        className="text-center shadow p-4 rounded-3"
        style={{ width: "350px" }}
      >
        <h1>Sign In</h1>
        <Form className="p-1 text-start">
          <Form className=" p-1 text-start">Email address:</Form>
          <Form.Control type="email" placeholder="Enter email" />
        </Form>
        <Form className="p-1 text-start mb-2">
          <Form className="p-1 text-start">Password:</Form>
          <Form.Control type="password" placeholder="Password" />
        </Form>
        <Button className="mt-2 w-100" onClick={() => navigate("/home")}>
          Log In
        </Button>
      </Container>
    </div>
  );
}

export default Login;
