import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  // useState hook to manage the current state of the form (either Log In or Sign Up)
  const [currentState, setCurrentState] = useState('LogIn');

  // Handler for form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Correctly prevent the default form submission behavior

    // Replace with your actual login or sign-up logic
    // For demo purposes, assume login is successful
    const loginSuccessful = true;

    if (loginSuccessful) {
      // Navigation logic removed as per your request
      console.log('Login successful. Navigation code removed.');
    }
  };

  return (
    <div className='login-container'>
      {/* Form element with an onSubmit event handler */}
      <form onSubmit={onSubmitHandler} className='sign-up'>
        <hr className='sign-style' />
        <div className='sign2'>
          <h2>{currentState}</h2> {/* Display the current state in a header */}
        </div>
        {/* Conditionally render the Name input based on currentState */}
        {currentState === 'LogIn' ? '' : <input type='text' className='name' placeholder='Name?' required />}
        <input type='email' className='email' placeholder='Email?' required />
        <input type='password' className='password' placeholder='Password' required />

        {/* Submit button with text based on the current state */}
        <button className='submit-button'>{currentState === 'LogIn' ? 'Sign In' : 'Sign Up'}</button>

        <div className='Forgot'>
          <p className='reset-password'>Forgot your Password?</p>
        </div>
        {/* Toggle between creating an account and logging in */}
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
