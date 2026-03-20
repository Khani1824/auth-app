import './App.css';
import { Container, Button, Navbar, Card, Form } from 'react-bootstrap';


function App() {
  return (
   <div className="d-flex justify-content-center align-items-center vh-100">
      <Container className='text-center border border-dark' style={{ width: '350px' }}>
        <Form className="text-start">Username:</Form>
        <Card>Enter your Username</Card>
        <Form className="text-start">Password:</Form>
        <Card>Enter your Password</Card>
        <Button> Log In</Button>
      </Container>
   </div>
  );
}

export default App;
