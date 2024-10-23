import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const [currentState, setCurrentState] = useState('LogIn');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Handler for form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const loginSuccessful = true; // Replace with actual logic

    if (loginSuccessful) {
      // Save user data into localStorage upon successful login
      const userData = {
        name: currentState === 'Sign Up' ? name : 'Fabiola Ologi',
        email: email,
        dateJoined: new Date().toISOString().split('T')[0],
      };

      localStorage.setItem('user', JSON.stringify(userData));
      onLoginSuccess(userData); // Pass user data to parent component if needed
      console.log('Login successful.');
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={onSubmitHandler} className='sign-up'>
        <hr className='sign-style' />
        <div className='sign2'>
          <h2>{currentState}</h2>
        </div>
        {/* Conditionally render Name input */}
        {currentState === 'LogIn' ? '' : (
          <input
            type='text'
            className='name'
            placeholder='Name?'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type='email'
          className='email'
          placeholder='Email?'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          className='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className='submit-button'>
          {currentState === 'LogIn' ? 'Sign In' : 'Sign Up'}
        </button>

        <div className='Forgot'>
          <p className='reset-password'>Forgot your Password?</p>
        </div>

        {currentState === 'LogIn' ? (
          <p onClick={() => setCurrentState('Sign Up')} className='account-creation'>
            Create an account
          </p>
        ) : (
          <p onClick={() => setCurrentState('LogIn')} className='log'>
            Log In
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
