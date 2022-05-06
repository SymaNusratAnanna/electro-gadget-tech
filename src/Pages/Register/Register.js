import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login')
    }

    const handleRegister = event =>{
        event.preventDefault();
        console.log(event.target)
    }
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-2">Please Register</h2>
      {/* form create */}
      <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
          
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        {/* set button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        Already have an account?
        <Link
          to="/login"
          className="text-danger text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
