import React from 'react'
import slackLogo from './Slack_icon_2019.svg'
import "./LoginPage.css";
import { useState } from 'react';

// API Documentation: https://gist.github.com/maurusrv/990fd96beb30272cbfd411ace222f355

const LoginPage = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);


    const submitLogin = async(e) =>{
        e.preventDefault();
        console.log(username, password);
        
        const response = await fetch('http:206.189.91.54/api/v1/auth/sign_in',{
          headers:{
            'Content-Type': 'application/json'
          }
        },
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }))
    }
    
  return (
    <div className="border">
      <div>
        <img src={slackLogo} />
      </div>
      <form onSubmit={submitLogin}>
        <div>
          <label for="username">Username: </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            id="username"
            type="text"></input>
        </div>
        <div>
          <label for="password"> Password: </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value = {password}
            id="password"
            type="password"></input>
        </div>
        <div className="loginButton">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage