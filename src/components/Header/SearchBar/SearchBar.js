import React from "react"
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./SearchBar.css"

const SearchBar = () => {
    return (
        <>
            <IconButton className="dropdown">
                <ArrowDropDownIcon  />
            </IconButton>
            <InputBase className="searchText" placeholder="Search Gasket" />
            <IconButton className="search">
                <SearchIcon />
            </IconButton>
        </>
    )
}

export default SearchBar;