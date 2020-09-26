import React, { useState } from 'react';
import './loginSignIn.css'
import { useForm } from "react-hook-form";

import Swal from 'sweetalert2';

const LoginSingIn = () => {
    const [shown, setShown] = React.useState(false);
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('');
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

        const account = {
            email: email,
            password: password
        }
        console.log('email: ' + email + ' password:' + password);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Welcome ${account['email']}`,
            showConfirmButton: false,
            timer: 1600
        })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="container-input">
                    <input type="text" id="email" name="email" className="input-text" placeholder="Your email"
                        onChange={e => setEmail(e.target.value)} ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                    <div className="show" onClick={switchShown}>
                        {shown ? 'Hide' : 'Show'}</div>
                    <input type="password" id="password" name="password" onChange={onChange} value={password}
                        onChange={e => setPassword(e.target.value)} type={shown ? 'text' : 'password'}
                        value={password} className="input-text" placeholder="Your password" ref={register({ required: true })}></input>

                </div >
                <div className="container-button">
                    <button type="submit" className="button">SIGN IN</button>
                </div >
            </form>
        </div>
    )
};

export default LoginSingIn;
