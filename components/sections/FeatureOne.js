import React from "react";

const FeatureOne = () => {
  return (
    <>
      <section
        className="features-section"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
      >
        <div className="auto-container">
          <h2 className="text-center text-light">Mentorship</h2>
          <p className="text-center text-light mb-5">
            Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
            tempor incididunt labore dolore magna aliquaenim ad minim. Sed risus
            augue, commodo ornare felis non, eleifend molestie metus pharetra
            eleifend.
          </p>
          <div className="row ">
            {/* Feature Block */}
            <div className="feature-block col-lg-4 col-md-6 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <i className="icon flaticon-online-learning" />
                <h5 className="title">
                  Initial
                  <br /> Consultation
                </h5>
              </div>
            </div>
            {/* Feature Block */}
            <div
              className="feature-block col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="inner-box ">
                <i className="icon flaticon-elearning" />
                <h5 className="title">
                  Personalized
                  <br /> Plan
                </h5>
              </div>
            </div>
            {/* Feature Block */}
            <div
              className="feature-block col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="inner-box ">
                <i className="icon flaticon-web-2" />
                <h5 className="title">
                  Regular One-On-One
                  <br />
                  Meetings
                </h5>
              </div>
            </div>
            {/* Feature Block */}
            {/* <div
              className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay="1200ms"
            >
              <div className="inner-box ">
                <i className="icon flaticon-users" />
                <h5 className="title">
                  Experienced <br />
                  Members
                </h5>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureOne;
