import "./App.css";
import { Container, Button, Navbar, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container
        className="text-center shadow p-4 rounded-3"
        style={{ width: "350px" }}
      >
        <h1>Hello</h1>
        <Button className="mt-2 w-100" onClick={() => navigate("/login")}>
          Log out
        </Button>
      </Container>
    </div>
  );
}

export default Home;
