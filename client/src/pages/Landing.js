import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt="jobify" className="logo" />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amex, consecrator dehiscing elis, sed do
                        gismo temporal incididunt ut Lahore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate veil esse chillums dolor eu fujian sulla
                        pariatur.
                    </p>
                    <button className="btn btn-hero">Login/register</button>
                </div>
                <img src={main} alt="job hunt" className="img main-img"></img>
            </div>
        </Wrapper>
    );
};

export default Landing;
