import React from "react";
import "./NavBar.css";
import {NavLink} from "react-router-dom";


function NavBar() {

    return (
        <>
            <div className="nav-inner_container">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" exact>hottest posts</NavLink>
                        </li>
                        <li>
                            <a href="https://www.reddit.com/">reddit</a>
                        </li>
                        <li>
                            memes
                        </li>
                    </ul>

                </nav>


            </div>
        </>
    );
}

export default NavBar;