import React from "react";
import "../Component-Css/Middle.css"
import Me from "../Images/Me.png"
import linkedin from "../Images/LinkedIn.png"
import twitter from "../Images/twitter.png"
import instagram from "../Images/Instagram.png"
import github from "../Images/github.png"

function Middle(){
    return(
        <div>
            <div id = "middle">
                <div id = "middle-1">
                    <div id = "Line-1">I'm <b>Pruthvi R D</b></div><p></p>
                    <div id = "Line-2">B-Tech CSE student PES University,Full-Stack Deveploper, Dev-Ops and Cloud Computing
                        enthusiast and Student</div>
                    <div id = "Links">
                        <img id = "linkedin" src = {linkedin} onClick={()=>handleImageClick("https://www.linkedin.com/in/pruthvi-d-76718b266/")}></img>
                        <img id = "github" src = {github} onClick={()=>handleImageClick("https://github.com/Pruthvi9084")}></img>
                        <img id = "instagram" src = {instagram} onClick={()=>handleImageClick("https://www.instagram.com/pruthvi.2k2/")}></img>
                        <img id = "twitter" src = {twitter} onClick={()=>handleImageClick("https://twitter.com/Pruthvi2k2")}></img>
                    </div>
                </div>
                <div id = "middle-2" ><img id = "Me" src = {Me}></img></div>
            </div>
        </div>
    )

    function handleImageClick(url) {
        window.open(url, "_blank"); 
      }
}

export default Middle;