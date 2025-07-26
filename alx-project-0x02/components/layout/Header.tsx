import React from "react";
import Link from "next/link";
const Header:React.FC =()=>{
    return(
        <div>
            <p>welcome page</p>
            <link href="/home">Home</link>
            <link href="/about">About</link>
        </div>
    )
}

export default Header;