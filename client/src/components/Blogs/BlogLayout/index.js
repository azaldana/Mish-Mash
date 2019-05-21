import React from "react";
import "./style.css";


const BlogLayout = props => {
    return (
        <div className="blog-layout">
            <div className="row">
                <div className="col l9">
                    <h1>the best chicken tinga tacos</h1>
                    <p className="layout-date">May 20, 2019</p><br></br>
                    <img className="main-image" src="./images/blog-image.jpg" />
                    <br></br>

                    <p className="layout-text">Literally though, these chicken tinga tacos are the best.<br></br><br></br>

                        A) Look how pretty!!<br></br><br></br>

                        B) Imagine how good they taste because juicy chicken, smoky chipotle, creamy avocado, zippy lime, and a charred tortilla just SING together, right? I promise you, they sing.<br></br><br></br>

                        C) Do you have 20 minutes? Cool. You can make these because this is not fancy. This is just really, really delicious chicken tinga tacos.<br></br><br></br>

                        This is one of those rare recipes that comes together so quickly and somehow still rivals a restaurant-quality meal. It is a recipe that, once you make it, you say: I will probably make these chicken tinga tacos every time I have friends over because it makes me look fancy with minimal effort. You also say: I need to memorize this recipe. You also say: How soon is too soon to make these again.<br></br><br></br>

                        It is a miracle and a delight. A perfect taco unicorn..</p>
                        <p className="author-layout">By LINDSAY MOSTROM</p>
                </div>

                <div className="col l3 author-side">
                    <h1>About the Author</h1>
                    <img className="layout-image" src="./images/for-blog.jpg" />
                    <p><strong>HEY! NICE TO MEET YOU! <br></br><br></br></strong>
                        I'm Lindsay: former 4th grade teacher, now full time blogger. My husband Bjork and I live in Minnesota. Favorite things include my camera, lake days, and dark chocolate. </p>
                </div>

                <div className="col l3 archive-side">
                    <h1>Archive</h1>
                    <p className="archive-text">the best soft<br></br>chocolate chip cookies</p>
                    <img className="layout-image" src="./images/blog-image-03.jpg" /><br></br>
                    <br></br>
                    <p className="archive-text">baked mozzarella chicken rolls</p>
                    <img className="layout-image" src="./images/blog-image-04.jpg" /><br></br>
                    <br></br>
                    <p className="archive-text">miracle no knead bread</p>
                    <img className="layout-image" src="./images/blog-image-05.jpg" />
                </div>

                <div className="col l9 second-layout">
                    <h1>kale chimichurri</h1>
                    <p className="layout-date">April 20, 2019</p><br></br>
                    <img className="main-image" src="./images/blog-image-02.jpg" />
                    <br></br>

                    <p className="layout-text-02">
                        Kale chimichurri!<br></br><br></br>

                        Yep. It’s a strange one, but also not, because the fresh greens + olive oil + red pepper flakes combo is never not a good one.<br></br><br></br>
                        
                        What is kale chimichurri like, exactly?<br></br><br></br>
                        
                        It’s kind of like a pesto, except no cheese, and no basil, and arguably more healthy, with a lot more zip and bite. It has universally appealing flavor profile with the heavy hitters being garlic, red pepper flakes, and vinegar or lime juice.<br></br><br></br>
                        
                        Think of anything you’d want to just kick up a notch – that’s a moment for this kale chimichurri.
                    </p>
                    <p className="author-layout">By LINDSAY MOSTROM</p>
                </div>
            </div>
        </div>
    );
}

export default BlogLayout;