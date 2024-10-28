import Link from "next/link";
import React from "react";

const ContactInner = () => {
  return (
    <>
      <section className="contact-details">
        <div className="container ">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">How Can We Help You?</span>
                <h2>Feel free to write</h2>
              </div>

              <form
                id="contact_form"
                name="contact_form"
                className=""
                action="#"
                method="post"
              >
                <div className="row">
                  <div className="col-sm-12">
                    <div className="mb-3">
                      <input
                        name="form_name"
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="mb-3">
                      <input
                        name="form_email"
                        className="form-control required email"
                        type="email"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="mb-3">
                      <select
                        name="form_subject"
                        className="form-control required"
                        type="select"
                      >
                        What area of your life do you need help with?
                        <option disabled selected>
                          What area of your life do you need help with?
                        </option>
                        <option>Career</option>
                        <option>Personal development</option>
                        <option>Leadership</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="mb-3">
                      <input
                        name="form_text"
                        className="form-control"
                        type="text"
                        placeholder="How would you like to grow or change?"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="form_message"
                    className="form-control required"
                    rows="7"
                    placeholder="What are your personal goals?"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    name="form_botcheck"
                    className="form-control"
                    type="hidden"
                    value=""
                  />
                  <button
                    type="submit"
                    className="theme-btn btn-style-one me-3"
                    data-loading-text="Please wait..."
                  >
                    <span className="btn-title">
                      Request Your Personalized Mentorship
                    </span>
                  </button>
                  <button
                    type="reset"
                    className="theme-btn btn-style-one bg-theme-color5"
                  >
                    <span className="btn-title">Reset</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right mt-md-50">
                <div className="sec-title">
                  <span className="sub-title">
                    Book Initial Consultation with our mentors
                  </span>
                  <h2>Get in touch with us</h2>
                  <div className="text">
                    <p>
                      <strong>Mentorship process</strong>
                    </p>
                    <ul>
                      <li>Initial consultation</li>
                      <li>Personalized plan</li>
                      <li>Regular one-on-one meetings</li>
                    </ul>
                  </div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    <div className="icon bg-theme-color2">
                      <span className="lnr-icon-phone-plus"></span>
                    </div>
                    <div className="text">
                      <h6>Have any question?</h6>
                      <a href="tel:980089850">
                        <span>Free</span> +92 (020)-9850
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-envelope1"></span>
                    </div>
                    <div className="text">
                      <h6>Write email</h6>
                      <a href="mailto:needhelp@company.com">
                        needhelp@company.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-location"></span>
                    </div>
                    <div className="text">
                      <h6>Visit anytime</h6>
                      <span>66 broklyn golden street. New York</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="container-fluid p-0">
          <div className="row">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              data-tm-width="100%"
              height="500"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ContactInner;
