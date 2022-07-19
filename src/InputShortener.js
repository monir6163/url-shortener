import { useState } from "react";

const InputShortener = ({ setInputValue }) => {
    const [value, setValue] = useState("");

    const handleClick = () => {
        setInputValue(value);
        setValue("");
    };

    return (
        <div className="inputContainer">
            <h1>
                URL <span>SHORTENER</span>
            </h1>
            <div>
                <input
                    type="text"
                    placeholder="Paste a link"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    );
};

export default InputShortener;
