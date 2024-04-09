import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()


  return (
  <>
  <h1>login</h1>

  <form action="" className="form-login">

    <label htmlFor="">Username:</label>
    <input type="text" name="username" id="username"  value={username} onChange={setUsername}/>

    <label htmlFor="">Password:</label>
    <input type="text" name="password" id="password" value={password} onChange={setPassword} />

    <button>Submit</button>
    
  </form>
  
  </>
  );
}

export default Login;
