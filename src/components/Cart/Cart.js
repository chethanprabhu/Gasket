import React, { useState } from "react"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from "@mui/material";

const Cart = () => {

    const [empty, setEmppty] = useState(true);

    return (
        <>
        {empty ?
         <IconButton>
            <AddShoppingCartIcon />
        </IconButton>
        :
        <IconButton>
            <ShoppingCartIcon />
        </IconButton>
        }
        </>
    )
}

export default Cart;