import React from "react"
import SearchBar from "../SearchBar/SearchBar";
import Address from "../Address/Address";
import Cart from "../Cart/Cart";
import More from "../More/More";
import Login from "../Login/Login";
import Logo from "../Logo/Logo";

const Header = () => {
    return (
        <div>
            <Logo />
            <Address />
            <SearchBar />
            <More />
            <Login />
            <Cart />
        </div>
    )
}

export default Header;