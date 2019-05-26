import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className='main'>
        <div>
            <input type='text' name='username'placeholder='Username'></input>
            <input type='text' name='password'placeholder='Password'></input>
            <input type='submit' value='Submit'></input>
        </div>
        <div>
            <button className='passwordButtons'>Forgot Username</button>
            <button className='passwordButtons'>Forgot Password</button>
            <button className='passwordButtons'>Sign Up</button>
        </div>    
    </div>
  );
}

export default Login;
