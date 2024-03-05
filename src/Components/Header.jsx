import React from "react";
import "../Component-Css/Header.css"
import Name from "../Images/Name.png"

function Header(){
    return(
        <div>
            <div className="Header">
                <div id = "img"><img src = {Name}></img></div>
                {/* <div id = "Headers">
                    <p>Home</p>
                    <p>Services</p>
                    <p>Skills</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </div> */}
            </div>
        </div>
    )

}

export default Header;