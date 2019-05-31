import React from "react";
import "./style.css";
import { Footer } from 'react-materialize';

const FooterAll = props => {
    return (

        <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l12 s12">
              <img src="/images/mish-mash-logo.png" width="100"/>
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