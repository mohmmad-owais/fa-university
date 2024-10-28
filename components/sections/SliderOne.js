import React, { useState } from "react";
import Image from "next/image";

const SliderOne = () => {
  return (
    <div className="banner-wrapper">
      <section className="banner-one banner-carousel__one no-dots">
        <div className="banner-one__slide banner-one__slide-one">
          <div className="container">
            <div className="banner-one__bubble-1"></div>
            <div className="banner-one__bubble-2"></div>
            <div className="banner-one__bubble-3"></div>
            <img
              src="/images/slider-1-scratch.png"
              alt=""
              className="banner-one__scratch"
            />
            <img
              src="/images/main-slider/image-1.png"
              alt=""
              className="banner-one__scratch"
            />

            <div className="row no-gutters">
              <div className="col-xl-12 z-index-1">
                <h2 className="banner-one__title banner-one__light-color">
                  Transform Your Future <br />
                  with FA University <br />
                  One-on-One
                  <br /> Mentorship to Unlock <br />
                  Your Full Potential
                </h2>
                {/* <p className="banner-one__tag-line">are you ready to learn?</p> */}
                <a
                  href="/page-contact"
                  class="theme-btn btn-style-one bg-theme-color2"
                >
                  Request a Personal Mentor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SliderOne;
