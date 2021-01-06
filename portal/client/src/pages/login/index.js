import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';

import AuthService from '../../services/auth.service';

import './Login.css';

const Login = (props) => {
    const [state, setState] = useState({
        username: "",
        password: "",
        message: ""
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    const handleLoginClick = (e) => {
        e.preventDefault();
        if(state.username && state.password) {
            verifyCredentials();
        }
        else {
            setState(prevState => ({
                ...prevState,
                'message': 'Please enter valid credentials'
            }));
        }
    }

    const verifyCredentials = () => {
        AuthService.login(state.username, state.password)
            .then(() => {
                setState(prevState => ({
                    ...prevState,
                    'message': 'Login successful. Redirecting to home page...'
                }));
                redirectToHome();
            },
            (error) => {                        
                console.log("error:", error);

                const _message =
                    (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();

                setState(prevState => ({
                    ...prevState,
                    'message': _message
                }));
            });
    }

    const redirectToHome = () => {
        props.history.push('/home');
    }

    return(
        <div className="login-dark">
            <form method="post">
                <h2 className="title">Head CT Study Login</h2>
                <div className="form-group pt-4">
                    <input type="text" 
                        className="form-control" 
                        id="username" 
                        aria-describedby="emailHelp" 
                        placeholder="Username"
                        value={state.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group pt-2">
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Enter password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group pt-4">
                    <button 
                        className="btn btn-outline-light btn-block"
                        type="submit"
                        onClick={handleLoginClick}
                    >
                        Log In
                    </button>
                </div>
                <div className="form-group" style={{display: state.message ? 'block' : 'none' }}>
                    <div className="error">
                        {state.message}
                    </div>                    
                </div>
            </form>
        </div>
    );
}

export default withRouter(Login);