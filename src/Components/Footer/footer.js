import React, { useState } from "react";
import "./footer.scss";

function Footer(props) {
  const [mode, setMode] = useState(false);
  const dark = "wrapper bg-dark text-white";
  const light = "wrapper bg-white text-white";

  const toggledClass = mode ? light : dark;

  return (
    <div>
      <div className={toggledClass}>
        <div class="d-flex justify-content-end">
          <button
            className="btn btn-secondary mt-2 me-2"
            onClick={(prevState) => {
              setMode((prevState) => !prevState);
            }}
          >
            Toggle Mode
          </button>
        </div>
        <footer class="mainFooter mt-3 pt-3">
          <div class="container">
            <div class="footer__split py-5">
              <h1 class="pt-2 pb-5 text-center">Blogr</h1>
              <div class="mainFooter__product py-2">
                <h6 class="py-3">Product</h6>
                <div class="d-flex flex-column justify-content-start align-items-center">
                  <p class="font-color-footer">Overwiew</p>
                  <p class="font-color-footer">Pricing</p>
                  <p class="font-color-footer">Marketplace</p>
                  <p class="font-color-footer">Features</p>
                  <p class="font-color-footer pb-4">Integrations</p>
                </div>
              </div>
              <div class="mainFooter__company py-4">
                <h6 class="pb-3">Company</h6>
                <div class="d-flex flex-column justify-content-start align-items-center">
                  <p class="font-color-footer">About</p>
                  <p class="font-color-footer">Team</p>
                  <p class="font-color-footer">Blog</p>
                  <p class="font-color-footer pb-1">Careers</p>
                </div>
              </div>
              <div class="mainFooter__connect py-4">
                <h6 class="pb-3">Connect</h6>
                <div class="d-flex flex-column justify-content-start align-items-center">
                  <p class="font-color-footer">Contact</p>
                  <p class="font-color-footer">Newsletter</p>
                  <p class="font-color-footer">LinkedIn</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
