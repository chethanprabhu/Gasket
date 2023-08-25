import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react"
import "./More.css"

const More = () => {
    const [anchor, setAnchor] = useState(null);

    const menuInteractedHandler = (e) => {
        setAnchor(e.target);
    }

    return (
        <>
            <Button id="more" onMouseEnter={menuInteractedHandler} className="more" variant="text">More</Button>
            <Menu className="menu" open={Boolean(anchor)} onClose={() => setAnchor(null)} anchorEl={anchor}>
                <MenuItem>My Orders</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>Contact Us</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Settings</MenuItem>
            </Menu>
        </>
    )
}

export default More;