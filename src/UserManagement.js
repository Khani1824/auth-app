import "./App.css";
import { useLocation, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function UserManagement() {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <div>
      <Navbar className="shadow p-3">
        <Nav.Link
          as={Link}
          to="/home"
          state={{ email: email }}
          className="me-3"
        >
          ← Back
        </Nav.Link>
      </Navbar>
      <h2 className="d-flex justify-content-center align-items-center vh-100">
        {" "}
        Hi Hi Hi
      </h2>
    </div>
  );
}
export default UserManagement;
