import React from 'react';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../Contexts/AuthContext';
import './App.css';
import Signup from './Signup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DashBoard from './DashBoard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';

const App = () => {
  return (
    
      <Container className="d-flex justify-content-center align-items-center "
        style={{ minHeight: '100vh' }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={DashBoard} />
                <PrivateRoute path="/update" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgotPassword" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
  );
};

export default App;