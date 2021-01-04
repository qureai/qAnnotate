import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import './LoginForm.css';
import AuthService from "../../services/auth.service";

function LoginForm(props) {
    const [state, setState] = useState({
        username: "",
        password: "",
        successMessage: ""
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
                'successMessage': 'Please enter valid credentials'
            }));
        }
    }

    const verifyCredentials = () => {
        const payload = {
            "username": state.username,
            "password": state.password
        }

        AuthService.login(state.username, state.password)
            .then(() => {
                setState(prevState => ({
                    ...prevState,
                    'successMessage': 'Login successful. Redirecting to home page...'
                }));
                redirectToHome();
            },
            (error) => {                        
                console.log("error:", error);
                setState(prevState => ({
                    ...prevState,
                    'successMessage': error.response.data.message
                }));
            });
    }

    const redirectToHome = () => {
        console.log("hello");
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
                <div className="form-group" style={{display: state.successMessage ? 'block' : 'none' }}>
                    <div className="error">
                        {state.successMessage}
                    </div>                    
                </div>
            </form>
        </div>
    );
}

export default withRouter(LoginForm);