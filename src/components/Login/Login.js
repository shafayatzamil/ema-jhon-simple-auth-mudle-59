import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'> 
            <h2 className='form-title'>please Login!</h2>
            <form >
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id=""  required/>
                </div> 
                <div className='form-control'>
                    <label htmlFor="passoword">Passoword</label>
                    <input type="passoword" name="passoword" id="" required />
                </div>
                <input type="submit" className='btn-submit' value="Login" />
            </form>
            <p>New to ema jhon <Link to="/signup"> Create a new Account</Link></p>
        </div>
    );
};

export default Login;