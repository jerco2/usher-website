import React from "react";
import undraw_real_time_analytics_re_yliv from "../../assets/undraw-images/undraw_real_time_analytics_re_yliv.svg";
import { FaArrowRight } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <section className={`p-5`}>
      <div className={`container`}>
        <div className={`row align-items-center justify-content-between g-4`}>
          <div className={`col-md d-flex justify-content-center`}>
            <img
              src={undraw_real_time_analytics_re_yliv}
              className={`img-fluid w-75`}
              alt=""
            />
          </div>
          <div className={`col-md p-sm-5`}>
            <h1>WHAT IS USHER?</h1>
            <p>
              USHER is an Earthquake Recording Instrument that is more than
              compliant with the DPWH guidelines.
              <br />
              <br />A 24/7 building structure health monitoring system that
              ensures safety of people and properties before, during and after a
              strong earthquake.
            </p>
            <br />
            <a
              className={`text-dark text-deco-none font-bold p-3 border`}
              target="_blank"
              rel="noreferrer"
              href="https://www.dpwh.gov.ph/DPWH/sites/default/files/RulesonEarthquake_Accelerograph.pdf"
            >
              Check the DPWH guidelines{" "}
              <span className={`d-none d-sm-inline`}>
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
