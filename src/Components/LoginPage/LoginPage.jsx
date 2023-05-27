import React from 'react'
import slackLogo from './Slack_icon_2019.svg'
import "./LoginPage.css";
import { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const submitLogin = (e) =>{
        e.preventDefault();
        console.log(username, password);
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
            id="username"
            type="text"></input>
        </div>
        <div>
          <label for="password"> Password: </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
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