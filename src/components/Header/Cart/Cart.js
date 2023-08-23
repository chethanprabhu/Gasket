import React, { useState } from "react"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from "@mui/material";
import "./Cart.css";

const Cart = () => {

    const [empty, setEmppty] = useState(true);

    return (
        <>
        {empty ?
         <IconButton>
            <AddShoppingCartIcon className="logo"/>
        </IconButton>
        :
        <IconButton>
            <ShoppingCartIcon className="logo"/>
        </IconButton>
        }
        </>
    )
}

export default Cart;