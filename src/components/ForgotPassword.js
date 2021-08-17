import React, { useRef } from 'react';
import { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../Contexts/AuthContext';
import {Link, useHistory} from 'react-router-dom';

const ForgotPassword = () => {
    const emailRef = useRef()
    const { forgotPassword } = useAuth();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault();

        

        try {
            setError("")
            setMessage("")
            setLoading(true)
            await forgotPassword(emailRef.current.value)
            setMessage("check your email for further instruction")
        } catch {
            setError("Fail to create an account")
        }
        setLoading(false)

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        
                        
                        <Button disabled={loading} className="w-100" type="submit">Reset Password</Button>
                    </form>
                    <div className="text-center w-100 mt-3">
                        <Link to="/login">Log In</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account ? <Link to="/signup">Sign up</Link>
            </div>
        </>
    );
};

export default ForgotPassword;