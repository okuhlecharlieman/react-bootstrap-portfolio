import React from "react";

const Services = () => {
  return (
    <div id="service">
      <div className="container ">
        <div className="Text d-flex row justify-content-end ">
          <div className="align-self-end col-lg-12 text-left mt-5">
            <h1 className="display-6">Services</h1>
            <hr />

            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 mt-2 pt-2">
                <div className="feature-widget text-left rounded">
                  <div className="services-icon text-primary mb-3">
                    <img
                      width="100"
                      height="100"
                      src="https://img.icons8.com/pulsar-color/100/backend-development.png"
                      alt="window-settings"
                    />{" "}
                  </div>
                  <div className="services-texts">
                    <h3 className="title mb-3">Web Development Services:</h3>
                    <p className="text-light-muted mb-4">
                      I create user-friendly websites, customize CMS platforms,
                      develop e-commerce sites, and build web applications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mt-2  pt-2">
                <div className="feature-widget text-left rounded">
                  <div className="services-icon text-primary mb-3">
                    <img
                      width="100"
                      height="100"
                      src="https://img.icons8.com/arcade/100/home-office.png"
                      alt="home-office"
                    />
                  </div>
                  <div className="services-texts">
                    <h3 className="title mb-3">Freelance Programming:</h3>
                    <p className="text-light-muted mb-4">
                      I'm skilled in multiple programming languages, create
                      custom software, and develop automation scripts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mt-2 pt-2">
                <div className="feature-widget text-left rounded">
                  <div className="services-icon text-primary mb-3">
                    <img
                      width="100"
                      height="100"
                      src="https://img.icons8.com/pulsar-color/100/web-design.png"
                      alt="web-design"
                    />
                  </div>
                  <div className="services-texts">
                    <h3 className="title mb-3">Graphic and UI/UX Design:</h3>
                    <p className="text-light-muted mb-4">
                      I design graphics, user interfaces, and enhance user
                      experiences with responsive design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
