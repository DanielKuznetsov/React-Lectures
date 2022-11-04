import React from 'react';

function Logout({user}) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            Loggin is as: <b>{user}</b>
            <input type="submit" value="Logout" />
        </form>
    )
}

export default Logout;