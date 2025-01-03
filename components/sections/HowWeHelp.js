import Link from "next/link";
import React, { useEffect, useState } from "react";

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
              className="content-column col-lg-6 col-md-12 order-2 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">How We Can Help </span>
                  <h2>Grow your skills learn with us from anywhere</h2>
                  <div className="text">
                    Lorem ipsum dolor sit amet consectur adipiscing elit sed
                    eiusmod tempor incididunt labore dolore magna aliquaenim ad
                    minim. Sed risus augue, commodo ornare felis non, eleifend
                    molestie metus pharetra eleifend.
                  </div>
                </div>
                <ul className="list-style-one two-column">
                  <li>
                    <i className="icon fa fa-check bg-dark" /> Career coaching
                  </li>
                  <li>
                    <i className="icon fa fa-check bg-dark" /> Personal
                    development
                  </li>
                  <li>
                    <i className="icon fa fa-check bg-dark" /> Leadership
                    mentoring
                  </li>
                </ul>
                <div className="btn-box">
                  <Link
                    href="/page-contact"
                    className="theme-btn btn-style-one"
                  >
                    <span className="btn-title">
                      Tell Us How We Can Help You
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12">
              <div className="anim-icons">
                <span className="icon icon-dotted-map-2" />
                <span className="icon icon-paper-plan" />
                <span className="icon icon-dotted-line" />
              </div>
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1 overlay-anim wow fadeInUp">
                  <img src="images/resource/about-3.jpg" title="team1" />
                </figure>
                <figure className="image-2 overlay-anim wow fadeInRight">
                  <img src="images/resource/about-2.jpg" title="team2" />
                </figure>

                {/* <div className="experience bounce-y">
                  <span className="count">16</span> Years of Experience
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutOne;
