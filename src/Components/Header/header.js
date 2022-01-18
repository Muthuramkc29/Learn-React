import React from 'react';
import './header.scss';
import logo from '../../images/logo.svg';
import arrow from '../../images/icon-arrow-light.svg';

function header(props) {
    return (
        <div class="mainHeader">
            <div class="container--tab">
                <div class="navbar navbar-expand-md navbar-dark pt-4 mx-1">
                    <div class="container-fluid align-items-center">
                        <a class="navbar-brand">
                            <span>
                                <img src={logo} alt="logo" />
                            </span>
                        </a>
                        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                            data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-start align-items-center" id="main-nav">
                            <ul class="navbar-nav pt-1">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDarkDropdownMenuLink"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Product
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Overview</a></li>
                                        <li><a class="dropdown-item" href="#">Pricing</a></li>
                                        <li><a class="dropdown-item" href="#">Marketplace</a></li>
                                        <li><a class="dropdown-item" href="#">Features</a></li>
                                        <li><a class="dropdown-item" href="#">Integrations</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDarkDropdownMenuLink"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Company
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">About</a></li>
                                        <li><a class="dropdown-item" href="#">Team</a></li>
                                        <li><a class="dropdown-item" href="#">Blog</a></li>
                                        <li><a class="dropdown-item" href="#">Careers</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDarkDropdownMenuLink"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Connect
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Contact</a></li>
                                        <li><a class="dropdown-item" href="#">Newsletter</a></li>
                                        <li><a class="dropdown-item" href="#">LinkedIn</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div class="d-none d-md-block justify-content-end">
                            <a class="px-2 mainHeader__login" href="">Login</a>
                            <a class="px-4 py-2 rounded-pill mainHeader__signup" href="">Sign Up</a>
                        </div>
                    </div>
                </div>

                <div class="container--fluid container--mod">
                    <div class="d-flex flex-column justify-content-center align-items-center container__split">
                        <h1 class="text-center pt-5 mainHeader__title">A modern publishing platform</h1>
                        <p class="text-center pt-2 mainHeader__subtitle">Grow your audience and build your online brand</p>
                        <div class="d-flex justify-content-center pt-5 pb-5 gap-3">
                            <div class="btn rounded-pill py-2 px-3 btn--text">Start for Free</div>
                            <div class="btn rounded-pill border-white py-2 px-3 btn--white">Learn More</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default header;