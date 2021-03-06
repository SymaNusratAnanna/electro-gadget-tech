import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";
 

import 'react-toastify/dist/ReactToastify.css';
import Loading from "../Shared/Loading/Loading";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const[sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  // loading data
if(loading|| sending){
  return <Loading></Loading>
}

    if(user){
      // navigate (from, {replace: true});
  }

  // error message

  if(error){
    errorElement=<div><p className="text-danger">Error: {error?.message}</p></div>
  }
  const handleSubmit = async event => {
    event.preventDefault();
    // get email value
    const email = emailRef.current.value;
    const password= passwordRef.current.value;

    

    await signInWithEmailAndPassword(email,password);
    const {data} = await axios.post('https://stormy-bastion-00241.herokuapp.com/login', {email});
    localStorage.setItem('accessToken', data.accessToken);
    navigate (from, {replace: true});
  };
  const navigateRegister = (event) => {
    navigate("/register");
  };

  // reset password
  const resetPassword = async() =>{
    const email=emailRef.current.value;
    if (email){
    await sendPasswordResetEmail(email);
     toast('sent email');
  }
  else {
    toast('please enter your email address')
  }
}



  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-2">Please Login</h2>
      {/* form create */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
       
        {/* set button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {errorElement}
      {/* toggle part */}
      <p>
        New to Electro Gadget Tech?<Link to="/register"
          className="text-danger text-decoration-none"
          onClick={navigateRegister}>
          Please Register</Link>
      </p>
      <p>
        Forget Password?<button
          className="text-danger text-decoration-none"
          onClick={resetPassword}>
          Reset Password</button>
      </p>
      
      <SocialLogin></SocialLogin>
      
    </div>
    
  );
};

export default Login;
