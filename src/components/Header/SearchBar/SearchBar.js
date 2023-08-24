import React from "react"
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./SearchBar.css"

const SearchBar = () => {
    return (
        <>
            <FormControl className="category">
                <Select className="select" sx={{boxShadow: "none",".MuiOutlinedInput-notchedOutline": { border: 0 },"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{border: 0,},"&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{border: 0,},}}
                // value={age}
                // onChange={handleChange}
                // displayEmpty
                >
                <MenuItem value=""> All </MenuItem>
                <MenuItem value={10}> Clothing </MenuItem>
                <MenuItem value={20}> Furniture </MenuItem>
                <MenuItem value={30}> Fashion </MenuItem>
                </Select>
            </FormControl>      
            <InputBase className="searchText" placeholder="Search Gasket" />
            <IconButton className="search">
                <SearchIcon className="search_icon"/>
            </IconButton>
        </>
    )
}

export default SearchBar;