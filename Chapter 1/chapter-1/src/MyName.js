import React, {useState} from "react";

function MyName() {
    const [name, setName] = useState("Robert");
    const [enableFirstName, setEnableFirstName] = useState(false);

    function handleEventChange(evt) {
        setName(evt.target.value);
    }

    function handleEnableChange(evt) {
        setEnableFirstName(!enableFirstName);
    }

    return <>
        <div>
            <h1>My name is: {enableFirstName ? name : ""}</h1>
            <input type="checkbox" value={enableFirstName} onChange={handleEnableChange} />
            {/* Event function is passed with a zero parameter and is not called */}
            {/* React creates its own SyntheticEvent wrapper over original event */}
            {/* and passes it to your event handler as first argument */}
            <input type="text" value={name} onChange={handleEventChange} />
        </div>
    </>
}

export default MyName;