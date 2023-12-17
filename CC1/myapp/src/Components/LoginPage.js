import React from 'react';
const LoginPage =() =>
{
    return(
        <>
        
        <form>
        <h1>LOGIN</h1>
        <label>Username</label>
        <input type="text" required></input>
        <label>Password</label>
        <input type="password" required></input>
        <button>Login</button>
        <a>Forget Password ?</a>
        </form>
        
        </>
    )
}
export default LoginPage;