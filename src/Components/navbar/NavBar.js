
import React, { Component } from 'react';
import "./NavBar.css";
import Me3 from './../../media/me3.png'

class NavBar extends Component {
    render() {
        return (
            <div>
                <div class="sidenav">
                <div class="logo">
                    <img src={Me3} alt="ami2" />
                </div>
                <ul class="mainNav">
                    <li class="single-nav">
                    <a href="/#">
                        <i class="fa fa-chevron-right "></i>
                        <span>Home</span>
                    </a>
                    </li>
                    <li class="single-nav">
                    <a href="/#">
                        <i class="fa fa-chevron-right "></i>
                        <span>About</span>
                    </a>
                    </li>
                    <li class="single-nav">
                    <a href="/#">
                        <i class="fa fa-chevron-right "></i>
                        <span>Services</span>
                    </a>
                    </li>
                    <li class="single-nav">
                    <a href="/#">
                        <i class="fa fa-chevron-right "></i>
                        <span>Portfolio</span>
                    </a>
                    </li>
                    <li class="single-nav">
                    <a href="/#">
                        <i class="fa fa-chevron-right "></i>
                        <span>Blog</span>
                    </a>
                    </li>
                    <li class="single-nav">
                    <a href="/#">
                        <i class="fa fa-chevron-right "></i>
                        <span>Contact</span>
                    </a>
                    </li>
                    <li class="single-nav">
                    <a href="/#">
                        <i class="fa fa-chevron-right "></i>
                        <span>Terms</span>
                    </a>
                    </li>
                    <li class="single-nav">
                    <a href="/#">
                        <i class="fa fa-chevron-right "></i>
                        <span>Privacy Policy</span>
                    </a>
                    </li>
                    <li class="single-nav">
                    <a href="/#">
                        <i class="fa fa-chevron-right "></i>
                        <span>Socials</span>
                    </a>
                    </li>

                </ul>

                </div>
            </div>
        );
    }
}

export default NavBar;