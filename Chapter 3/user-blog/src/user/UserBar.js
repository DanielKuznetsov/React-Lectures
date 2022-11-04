import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

function UserBar({user}) {
    if(user) {
        return <Logout user={user}/>
    } else {
        return (
            <>
                <Login />
                <Register />
            </>
        )
    }
}

export default UserBar;