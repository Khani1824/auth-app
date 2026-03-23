import "./App.css";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = location.state?.email;
  useEffect(() => {
    if (!userEmail) {
      navigate("/login", {
        state: { message: "Please enter your email and password" },
      });
    }
  }, [userEmail, navigate]);
  return (
    <div>
      <Navbar className="shadow p-2">
        <h2>My App</h2>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/profile" state={{ email: userEmail }}>
              Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/settings" state={{ email: userEmail }}>
              Settings
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/user-management"
              state={{ email: userEmail }}
            >
              User Management
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="d-flex justify-content-center align-items-center vh-100">
        <Container
          className="text-center shadow p-4 rounded-3"
          style={{ width: "350px" }}
        >
          <Button className="mt-2 w-100" onClick={() => navigate("/login")}>
            Log out
          </Button>
        </Container>
      </div>
    </div>
  );
}

export default Home;
