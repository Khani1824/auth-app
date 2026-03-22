import "./App.css";
import { Container, Button, Navbar, Nav, Form } from "react-bootstrap";

function Settings() {
  return (
    <div>
      <Navbar className="shadow p-3">
        <Nav.Link href="/home" className="me-3">
          ← Back
        </Nav.Link>
      </Navbar>
      <h2 className="d-flex justify-content-center align-items-center vh-100">
        {" "}
        Hi Hi
      </h2>
    </div>
  );
}
export default Settings;
