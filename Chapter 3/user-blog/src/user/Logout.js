import React from 'react';

function Logout({user, setUser}) {
    return (
        <form onSubmit={e => {e.preventDefault(); setUser("")}}>
            Loggin is as: <b>{user}</b>
            <input type="submit" value="Logout" />
        </form>
    )
}

export default Logout;