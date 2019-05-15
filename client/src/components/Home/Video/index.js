import React from "react";
import "./style.css";

const Video = props => {
    return (

        <div className="container-video">
            <div className="video-content">

                <div className="weekly-video">
                    <h2>Home Cooked Meals</h2>
                    <img src="./images/mish-mash-icon-yellow-new.png" width="50" alt="Icon" id="weeklyIcon" />
                    <br></br>
                </div>

                <div className="row video">
                    <div className="col s4">
                        <div className="text-video">
                            <p className="featured">Featured</p>
                            <iframe width="400" height="315" src="https://www.youtube.com/embed/HMNmjlzhyd0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <br></br>
                            <a class="waves-effect waves-light btn channel"><i class="material-icons right">send</i>View Channel</a>

                        </div>

                    </div>

                    {/* <div className="col s4"></div> */}

                    <div className="col s4">
                        <div className="text-video">
                            <p className="featured">Featured</p>
                            <iframe width="400" height="315" src="https://www.youtube.com/embed/yaMrsyglTa0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <br></br>
                            <a class="waves-effect waves-light btn view-01"><i class="material-icons right">send</i>View Channel</a>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default Video;