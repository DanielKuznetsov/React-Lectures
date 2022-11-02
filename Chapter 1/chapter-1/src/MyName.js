import React, {useState} from "react";

function MyName() {
    const [name, setName] = useState("Robert");

    function handleEventChange(evt) {
        setName(evt.target.value);
        console.log(evt.target)
    }

    return <>
        <div>
            <h1>My name is: {name}</h1>
            
            {/* Event function is passed with a zero parameter and is not called */}
            {/* React creates its own SyntheticEvent wrapper over original event */}
            {/* and passes it to your event handler as first argument */}
            <input type="text" value={name} onChange={handleEventChange} />
        </div>
    </>
}

export default MyName;