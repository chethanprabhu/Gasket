import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client";
import axios from "axios"
import Button from '@mui/material/Button';

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
            <h1>REACT!!</h1>
            {data.map((item) => {
                return <p>{item.title}</p>
            })}
            <Button variant="contained">Hello world</Button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />)