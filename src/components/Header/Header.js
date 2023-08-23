import React from "react"
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../../images/logo.png"
import Address from "../Address/Address";
import Cart from "../Cart/Cart";
import More from "../More/More";
import Login from "../Login/Login";

const Header = () => {
    return (
        <div>
            <img src={Logo}></img>
            <Address />
            <SearchBar />
            <More />
            <Login />
            <Cart />
        </div>
    )
}

export default Header;