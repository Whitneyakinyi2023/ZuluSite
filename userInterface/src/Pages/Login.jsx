import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  // useState hook to manage the current state of the form (Sign Up)
  const [currentState, setCurrentState] = useState('Sign Up');

  return (
    <div className='login-container'>
      <form className='sign-up'>
        <hr className='sign-style' />
        <div className='sign2'>
          <h2>{currentState}</h2> {/* Changed to h2 for better semantics */}
        </div>
        <input type='text' className='name' placeholder='Name?' required />
        <input type='email' className='email' placeholder='Valid Email?' required />
        <input type='password' className='password' placeholder='Enter Password' required />
        <button type='submit' className='submit-button'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
