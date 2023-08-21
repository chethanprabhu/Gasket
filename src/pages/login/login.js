import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./login.css";

const Login = () => {
    return (
        <div className="login__wrapper">
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Button variant="contained">Login</Button>
        </div>
    )
}

export default Login;