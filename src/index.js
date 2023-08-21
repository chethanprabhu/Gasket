import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client";
import axios from "axios"
import Login from "./pages/login/login";

const App = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get("https://chethantest.netlify.app/.netlify/functions/app/getAllProducts");
            setData(res.data);
        })()
    }, [])

    return (
        <>
            <Login />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />)