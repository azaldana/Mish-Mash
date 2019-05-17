import React from "react";
import "./style.css";

const Chefs = props => {
    return (
        <div className="container chef-container">
            <div className="row recipe">
                <div className="col s4">
                    <img className="chef-image" src="./images/8.jpg" />
                </div>
                <div className="col s8 right-side">
                    <div className="text">
                        <p className="featured">Featured</p>
                        <h1>Effortless Black Bean Chili</h1>
                        <br></br>
                        <a href="/onechef" class="waves-effect waves-light btn view-01"><i class="material-icons right">send</i>View Recipe</a>

                    </div>

                </div>
            </div>

            <div className="row recipe">
                <div className="col s4">
                    <img className="chef-image" src="./images/13.jpg" />
                </div>
                <div className="col s8 right-side">
                    <div className="text">
                        <p className="featured">Featured</p>
                        <h1>Secret’s in the Sauce' BBQ Ribs</h1>
                        <br></br>
                        <a href="/onechef" class="waves-effect waves-light btn view-01"><i class="material-icons right">send</i>View Recipe</a>
                    </div>

                </div>
            </div>

            <div className="row recipe">
                <div className="col s4">
                    <img className="chef-image" src="./images/21.jpg" />
                </div>
                <div className="col s8 right-side">
                    <div className="text">
                        <p className="featured">Featured</p>
                        <h1>Shrimp Scampi</h1>
                        <br></br>
                        <a href="/onechef" class="waves-effect waves-light btn view-01"><i class="material-icons right">send</i>View Recipe</a>
                    </div>

                </div>
            </div>

            <a href="/allchefs" class="waves-effect waves-light btn view">View all Chefs</a>
        </div>



    );
}

export default Chefs;

{/* <div className="container">
<div className="item">
    <img src="./images/1.jpg"/>
</div>
<div className="item">
    <img src="./images/2.jpg"/>
</div>
<div className="item">
    <img src="./images/3.jpg"/>
</div>
<div className="item">
    <img src="./images/4.jpg"/>
</div>
<div className="item">
    <img src="./images/5.jpg"/>
</div>
</div> */}



   // <div className="col l4 background">

            //     <div className="card">
            //         <div className="card-image">
            //             <img src={props.image} alt="" />
            //         </div>
            //         <div className="card-content">
            //             <span className="card-title">{props.title}</span>

            //         </div>
            //     </div>
            // </div>