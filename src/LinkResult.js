import axios from "axios";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./img/loader.gif";

const LinkResult = ({ inputValue }) => {
    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios(
                `https://api.shrtco.de/v2/shorten?url=${inputValue}`
            );
            setShortenLink(res.data.result.full_short_link);
        } catch (err) {
            setError("Something Went Wrong! Try Agin");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (inputValue.length) {
            fetchData();
        }
    }, [inputValue]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [copied]);

    if (loading) {
        return (
            <p>
                <img src={Loader} alt="Loading" />
            </p>
        );
    }
    if (error) {
        return <p className="noData">Something Went Wrong! Try Agin</p>;
    }
    const copyToClipboard = () => {
        toast.success("🔗 ShortLink Copied Successfull!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    return (
        <>
            {shortenLink && (
                <div className="result">
                    <p>{shortenLink}</p>
                    <CopyToClipboard
                        text={shortenLink}
                        onCopy={() => setCopied(true)}
                    >
                        <button
                            onClick={copyToClipboard}
                            className={copied ? "copied" : ""}
                        >
                            Copy to Clipboard
                        </button>
                    </CopyToClipboard>
                </div>
            )}
        </>
    );
};

export default LinkResult;
