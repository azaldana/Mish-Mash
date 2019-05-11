import React from "react";
import "./style.css";

const Video = props => {
    return (

        <div className="container-video">
            <div className="video-content">

                <div className="weekly-video">
                    <h2>Featured Weekly Video</h2>
                    <img src="./images/mish-mash-icon-yellow-new.png" width="50" alt="Icon" id="weeklyIcon" />
                    <br></br>

                    <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/nISBzS9yAnw?start=2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>
        </div>

    );
};

export default Video;