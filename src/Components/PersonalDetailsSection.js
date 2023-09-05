import React from "react";
import "../App.css";
import { TypeAnimation } from "react-type-animation";

const PersonalDetails = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="Text d-flex row justify-content-end ">
          <div className="align-self-end  col-lg-12 text-left mt-5">
            <span className="mx-5 display-6 d-flex">
              {" "}
              I Am A{" "}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Full Stack Developer",
                  2000, // wait 2s before replacing "Full Stack Developer" with "Web Developer"
                  "Web Developer",
                  2000,
                  "Software Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", paddingLeft: "5px" }}
                repeat={Infinity}
              />
              |
            </span>
            <hr />
            <div className="d-md-flex ">
              <div
                className="card col-md-3 m-2 mx-5 mx-auto bg-info-subtle"
                style={{ width: "18rem" }}
              >
                <div className="card-header">Personal Details</div>
                <ul className="list-group list-group-flush ">
                  <li className="list-group-item bg-info-subtle">
                    Email: okuhlecharlieman72@gmail.com
                    <br />
                    Languages: English, Isixhosa, Zulu
                    <br />
                    Nationality: South African
                  </li>
                </ul>
              </div>
              <div className="col-ms-7 mx-5">
                {" "}
                <p>
                  I'm a Port Elizabeth (Gqeberha)-born, Cape Town-based
                  freelance web designer with a passion for all things digital.
                  I love creating captivating online experiences and am always
                  eager to explore the latest advances in technology.
                </p>
                <img
                  class="rounded img-fluid mt-3 "
                  width={220}
                  src=" https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"
                  alt="Alan L. Hart"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalDetails;
/*   <div >
        <div className="container ">
          <div className="Text d-flex row justify-content-end ">
            <div className="align-self-end col-lg-12 text-left mt-5" >
                <h1 className="display-6">Here I'm Charlieman Okuhle</h1>
                <hr />
                                  <img
                                    src="https://i.imgur.com/QIrZWGIs.jpg"
                                    alt="Alan L. Hart"
                                  />
            </div>
          </div>
        </div>
       
      </div> 
      
      
      https://media.tenor.com/MsXItVtBsDQAAAAC/scaler-create-impact.gif
      
      
      <div>
<h1>
    I Am Web Developer||
</h1>
<p>
I'm a Port Elizabeth (Gqeberha)-born, Cape Town-based freelance web designer with a passion for all things digital.
 I love creating captivating online experiences and am always eager to explore the latest advances in technology.

</p>
        </div>
      
      
      */
