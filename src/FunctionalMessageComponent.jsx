import { useState } from "react";

export const Message = ({title, text, active}) => {

    const [act, setAct] = useState(active);

    const onClick = () => {
        setAct(!act)
        console.log("act: ", act)
    }

    return (
        // <div className={act ? "message active" : "message"}>
        // <div className={`message ${act ? "active" : "" }`}>
        <div className={`message ${act && "active"}`}>
            <h1 onClick={onClick}>{title}</h1>
            {act && <p>{text}</p>}
        </div>
    )
}