import React from "react";
import "./style.css";

const HeaderBlogs = props => {
    return (
        <div className="container-blogs">
            <div className="blog-content">
                <div className="blogs">
                    <h2>Food for Thought</h2>
                    <img src="./images/mish-mash-icon-yellow-new.png" width="50" alt="Icon" id="blogIcon" />
                    <br></br>
                    {props.children}
                </div>
            </div >
        </div >
    );
}

export default HeaderBlogs;