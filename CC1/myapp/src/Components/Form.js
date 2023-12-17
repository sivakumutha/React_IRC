import React from 'react';

const Form = () =>
{
    return(
    
    <form class="container shadow" onclick="register()">
                <input type="text"name="" id="" placeholder="Username" class="auth-input" required></input>
                <input type="password" name="" id="" placeholder="Password" class="auth-input" required></input>
                <input type="email" name="" id="" placeholder="Email" class="auth-input" required></input>
                <input type="number" name="" id="" placeholder="Phone" class="auth-input" required></input>
                <input type="submit" value="Register" id="" placeholder="SUBMIT" class="auth-btn"></input>
            
        </form>
        )
}
export default Form;