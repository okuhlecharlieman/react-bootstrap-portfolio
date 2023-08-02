import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Projects() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
  return (
    <div >
    <div className="container ">
      <div className="Text d-flex row justify-content-end ">
        <div className="align-self-end col-lg-12 text-left mt-5" >
            <h1 className="display-6">Projects</h1>
            <hr></hr>
            <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <img  width="512" height="512" src="https://img.icons8.com/nolan/512/project-management.png" alt="project-management"/>
   
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  width="512" height="512" src="https://img.icons8.com/nolan/512/project-management.png" alt="project-management"/>

        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img    width="512" height="512"  src="https://img.icons8.com/nolan/512/project-management.png" alt="project-management"/>

        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
            </div>
            </div>
            </div>
  )
}

export default Projects