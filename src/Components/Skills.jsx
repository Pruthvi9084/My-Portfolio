import React from "react";
import "../Component-Css/Skills.css"
import JavaScript from "../Images/JavaScript.png"
import CPP from "../Images/CPP.png"
import Python from "../Images/Python.png"
import Java from "../Images/Java.png"
import Docker from "../Images/Docker.png"
import kubernetes from "../Images/kubernetes.png"
import Jenkins from "../Images/Jenkins.png"
import Pytorch from "../Images/Pytorch.png"
import rt from "../Images/React.png"
import Tensorflow from "../Images/Tensorflow.png"


function Skills()
{
    return(
        <div>
            <div id = "skills">
                <div id = "languages">
                    <h2>Programming Languages</h2>
                    <div id = "Lang-Images">
                        <div id = "JavaScript"><img src = {JavaScript}></img><h3>JavaScript</h3></div>
                        <div id = "C++"><img src = {CPP}></img><h3>C++</h3></div>
                        <div id = "Python"><img src = {Python}></img><h3>Python</h3></div>
                        <div id = "Java"><img src = {Java}></img><h3>Java</h3></div>
                    </div>
                </div>
                <div id = "DevTools">
                    <h2>Dev-Ops Tools</h2>
                    <div id = "Dev-Images">
                        <div id = "Docker"><img src = {Docker}></img><h3>Docker</h3></div>
                        <div id = "Kubernetes"><img src = {kubernetes}></img><h3>Kubernetes</h3></div>
                        <div id = "Jenkins"><img src = {Jenkins}></img><h3>Jenkins</h3></div>
                    </div>
                </div>
                <div id = "Frameworks">
                    <h2>Frameworks</h2>
                    <div id = "Frame-Images">
                        <div id = "Pytorch"><img src = {Pytorch}></img><h3>Pytorch</h3></div>
                        <div id = "React"><img src = {rt}></img><h3>React</h3></div>
                        <div id = "TensorFlow"><img src = {Tensorflow}></img><h3>TensorFlow</h3></div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Skills;