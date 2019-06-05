import React from "react";
import "./style.css";
import { Button } from "react-materialize";

const FooterAll = () => {
  return (
    <footer class="page-footer">
      <div class="container footer-container">
        <div class="row footer-row">
          <div class="col l12">
            <img
              className="footer-logo"
              src="/images/mish-mash-icon.png"
              alt="Mish Mash Icon"
              width="35"
            />
            <br />
            <br />
            <a href="/">
              <Button className="black-text footer-buttons z-depth-0">
                Home
              </Button>
            </a>
            <a href="/">
              <Button className="black-text footer-buttons z-depth-0">
                About
              </Button>
            </a>
            <a href="/categories">
              <Button className="black-text footer-buttons z-depth-0">
                Fridge
              </Button>
            </a>
            <a href="/blogs">
              <Button className="black-text footer-buttons z-depth-0">
                Blogs
              </Button>
            </a>
            <a href="/allchefs">
              <Button className="black-text footer-buttons z-depth-0">
                All Chefs
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container copyright col l4">
          Dayna Cabrera, Nai-Muh Dennis, Alexandra Zaldana
        </div>
        <div class="container designers col l4">Copyright © 2019 Mish Mash</div>
        <div class="container footer-social col l4">
          <i class="fab fa-facebook" />
          <i class="fab fa-instagram" />
          <i class="fab fa-twitter" />
        </div>
      </div>
    </footer>
  );
};

export default FooterAll;
