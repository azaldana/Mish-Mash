import React from "react";
import "./style.css";
import { Footer, Button } from 'react-materialize';

const FooterAll = props => {
    return (

        <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l12 s12">
              <Button className="black-text footer-buttons z-depth-0">Home</Button><Button className="black-text footer-buttons z-depth-0">About</Button><Button className="black-text footer-buttons z-depth-0">Fridge</Button><Button className="black-text footer-buttons z-depth-0">Blogs</Button>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container copyright">
          Copyright © 2019 Mish Mash
          </div>
        </div>
      </footer>

    );
};

export default FooterAll;