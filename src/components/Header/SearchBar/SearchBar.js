import React from "react"
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SearchBar = () => {
    return (
        <>
            <IconButton>
                <ArrowDropDownIcon  />
            </IconButton>
            <InputBase placeholder="Search Gasket" />
            <IconButton>
                <SearchIcon />
            </IconButton>
        </>
    )
}

export default SearchBar;