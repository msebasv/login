import React, { useState } from 'react';
import './loginSignIn.css'
import { useForm } from "react-hook-form";

import Swal from 'sweetalert2';

const LoginSingIn = () => {
    const [shown, setShown] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('')
    const switchShown = () => setShown(!shown);
    const onChange = ({ currentTarget }) => setPassword(currentTarget.value);


    const {
        register,
        handleSubmit,
        errors,
        setError,
        reset,
        formState: { isSubmitting }
    } = useForm();
    const onSubmit = (data, e) => {

        e.target.reset();
        Swal.fire({
            icon: 'success',
            title: 'Welcome',
            showConfirmButton: false,
            timer: 1600
        })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="container-input">
                    <input type="text" id="email" name="email" className="input-text" placeholder="Your email"
                        onChange={e => setEmail(e.target.value)} />
                    <div className="show" onClick={switchShown}>
                        {shown ? 'Hide' : 'Show'}</div>
                    <input type="password" id="password" name="password" onChange={onChange} value={password}
                        onChange={e => setPassword(e.target.value)} type={shown ? 'text' : 'password'}
                        value={password} className="input-text" placeholder="Your password"></input>

                </div >
                <div className="container-button">
                    <button type="submit" className="button">SIGN IN</button>
                </div >
            </form>
        </div>
    )
};

export default LoginSingIn;

/*

                    <div className="show" onClick={switchShown}>
                        {shown ? 'Hide' : 'Show'}</div>
                      <input type="password" id="password" name="password" onChange={onChange} value={password}
                        onChange={e => setPassword(e.target.value)} type={shown ? 'text' : 'password'}
                        value={password} className="input-text" placeholder="Your password" handleChange={handleChange}></input>

 onChange={(e) => setPasswords(e.target.value)}
*/