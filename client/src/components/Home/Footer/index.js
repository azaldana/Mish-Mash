import React from "react";
import "./style.css";
import { Footer, Button } from 'react-materialize';
import { Link } from "react-router-dom";

const FooterAll = props => {
  return (

    <footer class="page-footer">
      <div class="container footer-container">
        <div class="row footer-row">
          <div class="col l12">
            <img className="footer-logo" src="./images/mish-mash-icon.png" alt="Mish Mash Icon" width="35" /><br></br><br></br>
            <Link to="/"><Button className="black-text footer-buttons z-depth-0">Home</Button></Link>
            <Link to="/"><Button className="black-text footer-buttons z-depth-0">About</Button></Link>
            <Link to="/categories"><Button className="black-text footer-buttons z-depth-0">Fridge</Button></Link>
            <Link to="/blogs"><Button className="black-text footer-buttons z-depth-0">Blogs</Button></Link>
            <Link to="/allchefs"><Button className="black-text footer-buttons z-depth-0">All Chefs</Button></Link>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container copyright col l4">
          Dayna Cabrera, Nai-Muh Dennis, Alexandra Zaldana
          </div>
        <div class="container designers col l4">
          Copyright © 2019 Mish Mash
          </div>
        <div class="container footer-social col l4">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </div>
    </footer>

  );
};

export default FooterAll;