import React from "react";
import undraw_real_time_analytics_re_yliv from "../../assets/undraw-images/undraw_real_time_analytics_re_yliv.svg";

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
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
