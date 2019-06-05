import React from "react";
import "./style.css";

const Blogs = () => {
  return (
    <div className="background-blog">
      <div className="row blog">
        <div className="col s4">
          <img
            className="blog-image"
            src="./images/blog-image.jpg"
            alt="Blog"
          />
        </div>
        <div className="col s8 blog-side">
          <div className="text-blog">
            <p className="featured">By Lindsay Mostrom</p>
            <h1>the best chicken tinga tacos</h1>
            <p>
              Literally though, these chicken tinga tacos are the best. Do you
              have 20 minutes? Cool. You can make these because this is not
              fancy. This is just really, really delicious chicken tinga tacos.
            </p>
            <br />
            <br />
            <a href="/blogs" class="waves-effect waves-light btn view-01">
              <i class="material-icons right">send</i>Read Article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
