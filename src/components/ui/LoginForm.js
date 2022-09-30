import React, { useState } from "react";
import "./LoginForm.css";


function LoginForm() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [loginFailure, setloginFailure] = useState(false);


    function handleUsernameInput(event) {
        setusername(event.target.value);
    }

    function handleUserPassword(event) {
        setpassword(event.target.value);
    }
    function handleUserLoginActivity() {
        fetch('http://localhost:9000/user/userLogin?username=' + username + '&password=' + password)
            .then(function (response) {
                return response.json();
            })
            .then(function (finalresponse) {
                if (finalresponse == undefined) {
                    setloginFailure(true);
                } else {

                    document.cookie = 'userId=' + finalresponse.userId;
                    window.location.href = "/";


                }
            })
    }

    return (
    
        <React.Fragment>
        <div className="LoginFormAlignment">
            <h1 className="heading"> Log In</h1>

            <label>  Enter your Username</label>  <input className="user" type="text" value={username} name="name" onChange={handleUsernameInput} placeholder="Enter username" /> <br />

            <label> Enter Password </label> <input className="user" type="password" value={password} name="password" onChange={handleUserPassword} /> <br />

            <input className="button" type="submit" value="Login" onClick={handleUserLoginActivity} />

            {loginFailure && <label>Invalid Credentials !</label>}

        </div>
    </React.Fragment>)

}

export default LoginForm;
