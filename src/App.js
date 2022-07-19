import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import BackgroundAnimate from "./BackgroundAnimate";
import InputShortener from "./InputShortener";
import LinkResult from "./LinkResult";

function App() {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="container">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />
            <InputShortener setInputValue={setInputValue} />
            <BackgroundAnimate />
            <LinkResult inputValue={inputValue} />
        </div>
    );
}

export default App;
