import React from 'react';
import './login.css';
import LoginSignIn from './Components/LoginSignIn/loginSignIn';
import Label from './Components/Label/label';


const Login = () => {
    return (
        <div className="login-container">
            <LoginSignIn />
            <Label />
        </div >
    )
};
export default Login;
