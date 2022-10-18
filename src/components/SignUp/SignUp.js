import React from 'react';
import './SignUp.css';
 import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div className='form-container'> 
            <h2 className='form-title'>Sign up!</h2>
            <form >
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id=""  required/>
                </div> 
                <div className='form-control'>
                    <label htmlFor="passoword">Passoword</label>
                    <input type="passoword" name="passoword" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="passoword">Confirm Passoword</label>
                    <input type="passoword" name="Confirm" id="" required />
                </div>
                <input type="submit" className='btn-submit' value="Signup" />
            </form>
            <p>Already have an account ?<Link to="/login"> login</Link></p>
        </div>
    );
};

export default SignUp;