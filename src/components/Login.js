import React, { Component } from "react";
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
            <button>Forgot Username</button>
            <button>Forgot Password</button>
            <button>Sign Up</button>
        </div>    
    </div>
  );
}

export default Login;
