import React from "react"
import Fab from '@mui/material/Fab';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Address = () => {
    return (
        <Fab variant="extended" size="small">
            <LocationOnIcon />
            Mangalore
        </Fab>
    )
}

export default Address;