import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <nav>
            <NavLink exact activeClassName="active" to="/">
                Home
            </NavLink>
            <NavLink exact activeClassName="active" to="/dashboard">
                Dashboard
            </NavLink>
            <NavLink exact activeClassName="active" to="/login">
                LogIn
            </NavLink>
            <NavLink exact activeClassName="active" to="/register">
                Register
            </NavLink>
            <NavLink exact activeClassName="active" to="/account">
                Account
            </NavLink>
        </nav>
    );
}
export default Header;