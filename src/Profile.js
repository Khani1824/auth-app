import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

function Profile() {
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

      <div className="shadow-lg border p-5 rounded-4 bg-white text-center">
        <h2 className="mb-3">User Profile</h2>
        <hr />
        <p className="text-muted mb-0">Logged in as:</p>
        <strong>{email}</strong>
      </div>
    </div>
  );
}
export default Profile;
