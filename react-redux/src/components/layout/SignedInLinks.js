//src/components/layout/SignedInLinks.js
import React from "react";
import { NavLink } from "react-router-dom"

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/createproject">New Project</NavLink></li>
            <li><NavLink to="">Log Out</NavLink></li>
            <NavLink className="btn btn-floating pink lighten-1" to="/">NN</NavLink>
        </ul>
    )
}

export default SignedInLinks;