import React from "react";

function NavBar() {
    const links = ["home", "about", "projects"];

    return <nav > { /* display an <a> tag for each link here */ } < /nav>;
    return ( <
        nav > {
            links.map((ele, index) => {
                return ( <
                    a href = { `#${ele}` }
                    key = { index } > { ele } <
                    /a>
                );
            })
        } <
        /nav>
    );
}

export default NavBar;