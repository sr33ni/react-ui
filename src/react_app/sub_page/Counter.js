
import { useState } from "react";

const Counter = () => {
    const [sample, Setsample] = useState("red");

    const onclickhandle = () => {
        alert("sample");
        Setsample("blue");
    };

    return (
        <div>
            <p>{sample}</p>
            <button onClick={onclickhandle}>
                Change Color
            </button>
            <button onClick={onclickhandle}>
                Change Color
            </button>
        </div>
    );
};

export default Counter;