import React from "react";
import Photo from "./Photo";
import cv from "../assets/Okuhle_CharliemanCV.pdf";

const Intro = () => {
  return (
    <div id="home">
      <div className="container  pad">
        <div className="Text   d-flex row justify-content-end ">
          <div className="align-self-start col-lg-6 text-left ">
            <Photo />
          </div>
          <div className="intro align-self-end col-lg-6 text-left mt-5">
            <h1 className="display-6">Hi I'm Charlieman Okuhle</h1>
            <hr />
            <p className="lead">
              "I specialize in crafting beautiful and functional websites that
              deliver exceptional user experiences. My expertise in web design
              was honed through my studies in Information Technology at Nelson
              Mandela University."
            </p>
            <a
              href="#contact"
              className="btn btn-outline-light pmd-ripple-effect my-5 btn-success"
            >
              Hire me
            </a>{" "}
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light pmd-ripple-effect my-5"
              download=""
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

/*     <div className="banner-wrap">
          <div className="pmd-intro-bg-img" style={{backgroundImage: 'url(https://pro.propeller.in/assets/images/bottom-text-right.jpg)'}}>
            <div className="container">
              <div className="pmd-intro-container text-light d-flex row justify-content-end">
                <div className="align-self-end col-lg-6 text-left">
                  <h1 className="pmd-display3">Here I'm Charlieman Okuhle</h1>
                  <hr />
                  <p className="lead">"I specialize in crafting beautiful and functional websites that deliver exceptional user experiences. 
                 My expertise in web design was honed through my studies in Information Technology at Nelson Mandela University."
            </p>
                  <a href="javascript:void(0);" className="btn btn-outline-light pmd-ripple-effect">Hire me</a>
                </div>
              </div>
            </div>
          </div>
        </div> */
