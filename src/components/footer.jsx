import React from "react";
import "./assets/styles/Footer.sass";
import gplayLogo from "./assets/img/play.png";
import appleLogo from "./assets/img/apple.png";
import pinLogo from "./assets/img/pinterest.png";
import fbLogo from "./assets/img/fb.png";
import igLogo from "./assets/img/ig.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <div className="footer ">
          <div className="footer-content">
            <div className="footer-logo">
              <h1 className="justify-content-center">MOVIE REVIEW</h1>
              <p>
                Lorem Ipsum At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia animi, id est laborum et dolorum fuga.
              </p>
              <p>
                Lorem Ipsum At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia animi, id est laborum et dolorum fuga.
              </p>
            </div>
            <div className="footer-link">
              <h4>About Us</h4>
              <h4>Blog</h4>
              <h4>Career</h4>
              <h4>Service</h4>
              <h4>Media Center</h4>
            </div>
            <div className="footer-download">
              <h3>Download</h3>
              <div className="footer-download-image">
                <img
                  src={gplayLogo}
                  alt="Google Play"
                  className="footer-gplay"
                ></img>
                <img
                  src={appleLogo}
                  alt="App Store"
                  className="footer-app"
                ></img>
              </div>
              <div className="margin-extra"></div>
              <h3>Social Media</h3>
              <img
                src={fbLogo}
                alt="Facebook"
                className="footer-facebook"
              ></img>
              <img
                src={pinLogo}
                alt="Pinterest"
                className="footer-pinterest"
              ></img>
              <img
                src={igLogo}
                alt="Instagram"
                className="footer-instagram"
              ></img>
            </div>
          </div>
        </div>
        <hr className="border"/>
        <div className="footer-copyright justify-content-center">
          <i>
            <b>Made with &#x2665; by Front-End Group G</b>
          </i>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
