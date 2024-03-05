import React from "react";
import "../Component-Css/WiD.css"

function WID()
{
    return(
        <div>
            <div id = "Container">
                <div id = "Web">
                    Web and Mobile Applications.
                    <p>
                        Developing dynamic and responsive front-end designs coupled with efficient back-end systems, 
                        both client and server-side development.
                    </p>
                </div>
                <div id = "devops">
                    Dev-Ops
                    <p>
                        Automating deployment pipelines, ensuring scalability, reliability, and 
                        security of web applications through seamless integration of CI/CD practices and 
                        cloud infrastructure management
                    </p>
                </div>
                <div id = "CC-SD">
                    Cloud Computing and System Design
                    <p>
                        I leverage scalable and cost-effective cloud services to design, deploy, and manage highly 
                        available and resilient applications, optimizing resource utilization and enabling rapid innovation 
                        through flexible infrastructure and on-demand computing resources.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WID;