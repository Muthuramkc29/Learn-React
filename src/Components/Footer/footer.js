import React, { useState } from "react";
import styled from "styled-components";
// import "./footer.scss";

function Footer(props) {
  const [mode, setMode] = useState(false);
  const dark = "wrapper bg-dark text-white";
  const light = "wrapper bg-white text-white";

  const toggledclassName = mode ? light : dark;

  const navbarComponent = () => {
    return (
      <div>
        <div className={toggledclassName}>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-secondary mt-2 me-2"
              onClick={(prevState) => {
                setMode((prevState) => !prevState);
              }}
            >
              Toggle Mode
            </button>
          </div>
          <footer className="mainFooter mt-3 pt-3">
            <div className="container">
              <div className="footer__split py-5">
                <h1 className="pt-2 pb-5 text-center">Blogr</h1>
                <div className="mainFooter__product py-2">
                  <h6 className="py-3">Product</h6>
                  <div className="d-flex flex-column justify-content-start align-items-center">
                    <p className="font-color-footer">Overwiew</p>
                    <p className="font-color-footer">Pricing</p>
                    <p className="font-color-footer">Marketplace</p>
                    <p className="font-color-footer">Features</p>
                    <p className="font-color-footer pb-4">Integrations</p>
                  </div>
                </div>
                <div className="mainFooter__company py-4">
                  <h6 className="pb-3">Company</h6>
                  <div className="d-flex flex-column justify-content-start align-items-center">
                    <p className="font-color-footer">About</p>
                    <p className="font-color-footer">Team</p>
                    <p className="font-color-footer">Blog</p>
                    <p className="font-color-footer pb-1">Careers</p>
                  </div>
                </div>
                <div className="mainFooter__connect py-4">
                  <h6 className="pb-3">Connect</h6>
                  <div className="d-flex flex-column justify-content-start align-items-center">
                    <p className="font-color-footer">Contact</p>
                    <p className="font-color-footer">Newsletter</p>
                    <p className="font-color-footer">LinkedIn</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  };
  return <FooterStyles>{navbarComponent()}</FooterStyles>;
}

export default Footer;

const FooterStyles = styled.div`
  @import "../../sass/styles.scss";

  .wrapper {
    margin-top: 0rem;
    //   background-color: $very-dark-black-blue;
    //   color: $white;
    transition: 1s ease-out;
  }

  .font-color-footer {
    color: $grayish-blue;
    font-size: 0.9rem;
  }

  .mainFooter {
    border-top-right-radius: 6rem;

    .footer__split {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }

    @media (min-width: 768px) {
      .mainFooter {
        margin-top: 8rem;
      }

      .footer__split {
        flex-direction: row;
        justify-content: space-around;
      }
    }
  }

  @media (min-width: 768px) {
    .wrapper {
      margin-top: 18rem;
    }
  }
`;
