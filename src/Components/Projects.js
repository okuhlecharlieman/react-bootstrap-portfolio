import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="projects">
      <div className="container my-5 ">
        <div className="Text d-flex row justify-content-end ">
          <div className="align-self-end col-lg-12 text-left mt-5">
            <h1 className="display-6">Projects</h1>
            <hr></hr>
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <a href="https://aglet-33abe.web.app/" target="_blank">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://i.ibb.co/4st14pX/Screenshot-1.png"
                    alt="aglet-image"
                  />
                </a>
                <Carousel.Caption>
                  <h5>Aglet Challenge</h5>
                  {/* <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <a href="https://intwana.rf.gd/Charlie/" target="_blank">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://i.ibb.co/Jsc5Bxk/Screenshot-2023-09-14-115125.png"
                    alt="portfolio"
                  />
                </a>
                <Carousel.Caption>
                  <h5>My Portfolio</h5>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <a
                  href="https://dynamic-unicorn-de5d72.netlify.app/"
                  target="_blank"
                >
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://i.ibb.co/xSDgSm3/Screenshot-2023-08-16-103731.png"
                    alt="School Website"
                  />
                </a>
                <Carousel.Caption>
                  <h5>School Website</h5>
                  {/* <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
