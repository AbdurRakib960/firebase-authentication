import React from 'react';
import { useState } from 'react';
import { Card, Button, Alert} from 'react-bootstrap';
import { useAuth } from '../Contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';


const DashBoard = () => {
    const [error, setError] = useState("");
    const {currentUser, logout} =useAuth();
    const history = useHistory();

    async function handleLogOut() {
        setError('')

        try{
            await logout()
            history.push('/login')
        } catch(error) {
            setError("Failed to log out", error.message)
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>{currentUser && currentUser.email}</strong>
                    <Link to="/update" className="btn btn-primary mt-3 w-100">Update</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogOut}>Sign out</Button>
            </div>
        </>
    );
};

export default DashBoard;