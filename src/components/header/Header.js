import React from "react";
import logo from "../../assets/reddit_logo.png";


function Header({title, children}) {


    return (
        <>
            <header>
                {children}
                <h1>{title}</h1>
            </header>
        </>
    )
}

export default Header;