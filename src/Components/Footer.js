import React from "react";
import "../App.css";

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <div className="MyFooter p-3">
      <div class="d-flex justify-content-center a">
        <p>
          {" "}
          © {year}{" "}
          <a
            href="https://intwana.rf.gd/Charlie/"
            style={{ textDecoration: "none", color: "#FFFF" }}
          >
            {" "}
            Okuhle Charlieman.{" "}
          </a>{" "}
          All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
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
       
      </div> */
