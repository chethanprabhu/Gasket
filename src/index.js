import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client";
import axios from "axios"
import Login from "./pages/login/login";
import Header from "./components/Header/Header"
import "./index.css"

const App = () => {
    return (
        <>
            <Header />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />)