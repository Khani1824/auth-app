import './App.css';
import { Container, Button, Navbar, Card, Form } from 'react-bootstrap';


function App() {
  return (
   <div className="d-flex justify-content-center align-items-center vh-100">
      <Container className='text-center border border-dark' style={{ width: '350px' }}>
         <h1>Sign In</h1>
        <Form className=" p-1 text-start">Email address:</Form>
        <Card className = "p-1 text-start">
          <Form.Control type="email" placeholder="Enter email"/>
        </Card>
        <Form className="p-1 text-start">Password:</Form>
        <Card className="p-1 text-start">
          <Form.Control type="password" placeholder="Password"/>
        </Card>
        <Button className="p-2 text-start">Log In</Button>
      </Container>
   </div>
  );
}

export default App;
