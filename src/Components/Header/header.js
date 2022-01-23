import React, { useState } from "react";
import "./header.scss";
import logo from "../../images/logo.svg";

function Header(props) {
  const [titleText, setTitleText] = useState("");
  const [onSubmit, setOnSubmit] = useState(false);
  const [count, setCount] = useState(0);
  const [toastDiv, setToastDiv] = useState(() => {
    return (
      <div className="d-none">
        <h1 className="text-center">Toast Display</h1>
      </div>
    );
  });

  return (
    <div class="mainHeader">
      <div class="container--tab">
        <div class="navbar navbar-expand-md navbar-dark pt-4 mx-1">
          <div class="container-fluid align-items-center">
            <a class="navbar-brand" href="/">
              <span>
                <img src={logo} alt="logo" />
              </span>
            </a>
            <button
              class="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse justify-content-start align-items-center"
              id="main-nav"
            >
              <ul class="navbar-nav pt-1">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-white"
                    href="/"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Product
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="/">
                        Overview
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Marketplace
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Features
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Integrations
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-white"
                    href="/"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Company
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="/">
                        About
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Team
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Careers
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle text-white"
                    href="/"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Connect
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="/">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div class="d-none d-md-block justify-content-end">
              <a class="px-2 mainHeader__login" href="/">
                Login
              </a>
              <a class="px-4 py-2 rounded-pill mainHeader__signup" href="/">
                Sign Up
              </a>
            </div>
          </div>
        </div>

        <div>{toastDiv}</div>
        <div class="container--fluid container--mod">
          <div class="d-flex flex-column justify-content-center align-items-center container__split">
            <h1 class="text-center mt-5 mainHeader__title">
              {onSubmit ? titleText : "A modern publishing platform "}
              <span>{onSubmit ? count : ""}</span>
            </h1>
            <div class="d-flex gap-2">
              <input
                type="text"
                className="my-4 p-2"
                placeholder="Add Title & TitleNo"
                onChange={(e) => {
                  setOnSubmit(false);
                  setTitleText(e.target.value + " ");
                }}
              />
              <div class="d-flex justify-content-center align-items-center gap-2">
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
                  setToastDiv(() => {
                    return (
                      <div className="d-block">
                        <div className="d-flex justify-content-center">
                          <div
                            class="alert alert-warning alert-dismissible fade show"
                            role="alert"
                          >
                            <strong>Warning!</strong> Enter a valid Title
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="alert"
                              aria-label="Close"
                            ></button>
                          </div>
                        </div>
                      </div>
                    );
                  });
                  setCount("");
                } else {
                  setOnSubmit(true);
                }
              }}
            >
              Submit
            </button>
            <p class="text-center pt-2 mainHeader__subtitle">
              Grow your audience and build your online brand
            </p>
            <div class="d-flex justify-content-center pt-5 pb-5 gap-3">
              <div class="btn rounded-pill py-2 px-3 btn--text">
                Start for Free
              </div>
              <div class="btn rounded-pill border-white py-2 px-3 btn--white">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
