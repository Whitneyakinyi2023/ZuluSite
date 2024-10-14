import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  // useState hook to manage the current state of the form (Sign Up)
  const [currentState, setCurrentState] = useState('LogIn');
  const onSubmithandler = async (event) => {
    event.PreventDefault();
  }
  return (
    <div className='login-container'>
      <form onSubmit={onSubmithandler} className='sign-up'>
        <hr className='sign-style' />
        <div className='sign2'>
          <h2>{currentState}</h2> {/* Changed to h2 for better semantics */}
        </div>
        {currentState === 'LogIn' ? '' : <input type='text' className='name' placeholder='Name?' required />}
        <input type='email' className='email' placeholder='Email?' required />
        <input type='password' className='password' placeholder='Password' required />
        <button className='submit-button'>{currentState === 'LogIn' ? 'Sign In' : 'Sign Up'} </button>

        <div className='Forgot'>
          <p className='reset-password'>Forgot your Password?</p>
        </div>
        {
          currentState === 'LogIn'
            ? <p onClick={() => setCurrentState('Sign Up')} className='account-creation'>Create an account</p>
            : <p onClick={() => setCurrentState('LogIn')} className='log'>Log In </p>
        }
      </form>

    </div>
  );
};


export default Login;
