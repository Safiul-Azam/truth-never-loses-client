import React, {useEffect, useRef} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './LogIn.css'

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      useEffect(()=>{
          if(user){
              navigate('/home')
          }
      },[navigate, user])
    const handleSubmit = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        createUserWithEmailAndPassword(email,password)
        console.log(email, password)
    }
    return (
        <div className='w-50 mx-auto mt-5 border rounded p-5'>
            <h2 className='text-center line mb-5'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <button  className='services-btn btn border-none mb-3' type="submit">
                    Login
                </button>
            <p>New to Truth never loses? <Link className='toggle-link' to='/signup'>Create New Account</Link></p>
            </Form>
        </div>
    );
};

export default Login;