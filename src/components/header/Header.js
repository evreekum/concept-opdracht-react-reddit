import React from "react";

function Header({title, subtitle, children}) {


    return (
        <>
            <header>
                {children}
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </header>
        </>
    )
}

export default Header;