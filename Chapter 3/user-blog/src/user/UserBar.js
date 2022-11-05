import React, {useState} from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

function UserBar() {
    const [user, setUser] = useState("");

    if(user) {
        return <Logout user={user} setUser={setUser}/>
    } else {
        return (
            <>
                <Login setUser={setUser}/>
                <Register setUser={setUser}/>
            </>
        )
    }
}

export default UserBar;