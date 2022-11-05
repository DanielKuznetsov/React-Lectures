import React, {useState} from "react";

function Login({setUser}) {
    const [username, setUsername] = useState("");

    function handleUsername(evt) {
        setUsername(evt.target.value);
    }

    return (
        // There are 2 function in one. Very important to notice!
        <form onSubmit={e => {e.preventDefault(); setUser(username)}}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" value={username} onChange={handleUsername} name="login-username" id="login-username"/>
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password"/>
            <input type="submit" value="Login" disabled={username.length === 0}/>
        </form>
    )
}

export default Login;