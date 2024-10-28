import Link from "next/link";
import React from "react";

const AboutOne = () => {
  return (
    <>
      <section className="about-section">
        <div className="anim-icons">
          <span className="icon icon-dotted-map" />
        </div>
        <div className="auto-container">
          <div className="row">
            <div
              className="content-column col-lg-8 col-md-12 order-2 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">What We Do</span>
                  <h2>Helping individuals through personalized guidance</h2>
                  <div className="text">
                    Lorem ipsum dolor sit amet consectur adipiscing elit sed
                    eiusmod tempor incididunt labore dolore magna aliquaenim ad
                    minim. Sed risus augue, commodo ornare felis non, eleifend
                    molestie metus pharetra eleifend.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutOne;
