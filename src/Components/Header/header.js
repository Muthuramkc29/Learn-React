import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { Toast } from "primereact/toast";

function Header(props) {
  const [titleText, setTitleText] = useState("");
  const [onSubmit, setOnSubmit] = useState(false);
  const [count, setCount] = useState(0);
  // const [toastDiv, setToastDiv] = useState(() => {
  //   return (
  //     <div className="d-none">
  //       <h1 className="text-center">Toast Display</h1>
  //     </div>
  //   );
  // });
  const [loading, setLoading] = useState(true);
  const [pixels, setPixels] = useState(window.innerWidth);
  const updateWindowWidth = () => {
    window.addEventListener("resize", () => {
      setPixels(window.innerWidth);
    });
  };
  const [learnMore, setLearnMore] = useState(false);
  const [learnMoreLoading, setLearnMoreLoading] = useState(false);
  const toast = useRef();

  // useEffect() -> every single useEffect() always fires on the first render --- (X) - !important

  useEffect(() => {
    // window.addEventListener("resize", updateWindowWidth);
    updateWindowWidth();
  }, []);

  // On First Render/Mount only! -componentDidMount Alternative
  useEffect(() => {
    setTimeout((prevState) => {
      setLoading(true);
      console.log(loading);
      console.log("API DATA 1");
      console.log("API DATA 2");
      console.log("API DATA 3");
      console.log("API DATA 4");
      setLoading(false);
      // console.log(loading);
    }, 1000);
  }, []);

  // On first Render + whenever dependency changes! - componentDidUpdate Alternative
  useEffect(() => {
    setTimeout(() => {
      setLearnMoreLoading(true);
    }, 1000);
    setLearnMoreLoading(false);
  }, [learnMore]);

  // console.log(loading);
  return (
    <div>
      {loading || !learnMoreLoading ? (
        <div className="loading--tab d-flex justify-content-center align-items-center bg-dark text-white">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="mainHeader">
          <div className="position-absolute top-0 end-0 mt-2 me-5">
            <p>Px: {pixels}</p>
          </div>
          <div className="container--tab">
            <div className="navbar navbar-expand-md navbar-dark pt-4 mx-1">
              <div className="container-fluid align-items-center">
                <a className="navbar-brand" href="/">
                  <span>
                    <img src={logo} alt="logo" />
                  </span>
                </a>
                <button
                  className="navbar-toggler border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#main-nav"
                  aria-controls="main-nav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse justify-content-start align-items-center"
                  id="main-nav"
                >
                  <ul className="navbar-nav pt-1">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-white"
                        href="/"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Product
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="/">
                            Overview
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Marketplace
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Features
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Integrations
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-white"
                        href="/"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Company
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                          <Link to="/about" className="dropdown-item">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link to="/team" className="dropdown-item">
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link to="/blogs" className="dropdown-item">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Careers
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-white"
                        href="/"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Connect
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDarkDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="/">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Newsletter
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            LinkedIn
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="d-none d-md-block justify-content-end">
                  <Link to="/login" className="px-2 mainHeader__login">
                    Login
                  </Link>
                  <a
                    className="px-4 py-2 rounded-pill mainHeader__signup"
                    href="/"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>

            <Toast ref={toast} position="bottom-right" />
            <div className="container--fluid container--mod">
              <div className="d-flex flex-column justify-content-center align-items-center container__split">
                <h1 className="text-center mt-5 mainHeader__title">
                  {onSubmit ? titleText : "A modern publishing platform "}
                  <span>{onSubmit ? count : ""}</span>
                </h1>
                <div className="d-flex gap-2">
                  <input
                    type="text"
                    className="my-4 p-2"
                    placeholder="Add Title & TitleNo"
                    onChange={(e) => {
                      setOnSubmit(false);
                      setTitleText(e.target.value + " ");
                    }}
                  />
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setOnSubmit(false);
                        setCount(count === 0 ? count : count - 1);
                      }}
                    >
                      -
                    </button>
                    <p
                      className="text-white fw-bold mt-3 mx-2"
                      onChange={(e) => {
                        setCount(e.target.value);
                      }}
                    >
                      {count}
                    </p>
                    <button
                      className="btn btn-primary "
                      onClick={() => {
                        setCount(count + 1 === 11 ? count : count + 1);
                        setOnSubmit(false);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => {
                    if (titleText === "" && count === 0) {
                      // setToastDiv(() => {
                      //   return (
                      //     <div className="d-block">
                      //       <div className="d-flex justify-content-center">
                      //         <div
                      //           className="alert alert-warning alert-dismissible fade show"
                      //           role="alert"
                      //         >
                      //           <strong>Warning!</strong> Enter a valid Title
                      //           <button
                      //             type="button"
                      //             className="btn-close"
                      //             data-bs-dismiss="alert"
                      //             aria-label="Close"
                      //           ></button>
                      //         </div>
                      //       </div>
                      //     </div>
                      //   );
                      // });
                      toast.current.show({
                        severity: "error",
                        summary: "Error",
                        detail: "Enter a valid input",
                      });
                      setCount("");
                    } else {
                      toast.current.show({
                        severity: "success",
                        summary: "Success",
                        detail: "Title Changed",
                      });
                      setOnSubmit(true);
                    }
                  }}
                >
                  Submit
                </button>
                <p className="text-center pt-2 mainHeader__subtitle">
                  Grow your audience and build your online brand
                </p>
                <div className="d-flex justify-content-center pt-5 pb-5 gap-3">
                  <div className="btn rounded-pill py-2 px-3 btn--text">
                    Start for Free
                  </div>
                  <button
                    className="btn rounded-pill border-white py-2 px-3 btn--white"
                    onClick={(prevState) => {
                      setLearnMore((prevState) => !prevState);
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
