import React from "react"
import SearchBar from "./SearchBar/SearchBar";
import Address from "./Address/Address";
import Cart from "./Cart/Cart";
import More from "./More/More";
import Login from "./Login/Login";
import Logo from "./Logo/Logo";
import "./Header.css"

const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="headerLogo"><Logo /></div>
            <div className="headerAddress"><Address /></div>
            <div className="headerSearch"><SearchBar /></div>
            <div className="headerMore"><More /></div>
            <div className="headerLogin"><Login /></div>
            <div className="headerCart"><Cart /></div>
        </div>
    )
}

export default Header;