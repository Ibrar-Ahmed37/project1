import React,{useState} from 'react'
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./css/Login.css";
import validator from 'validator';
function Login() {
    
   
    const nav = useNavigate();
    const [emailError, setEmailError] = useState('')
        function handleClick(e) {
         
                  console.log("here");
                  nav('/cars');

        }


    return (
        
       <div className="Login">
            <Form onSubmit={handleClick}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" id="email" required /> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" id="pass"  required/>
            </Form.Group>

        
            <Button variant="primary" className="w-100" type="submit" onSubmit={handleClick} >
                Login
            </Button>
            </Form>
    
    </div>
    )
}

export default Login
