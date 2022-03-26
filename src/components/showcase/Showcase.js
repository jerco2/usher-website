import React from "react";
import undraw_teaching_re_g7e3 from "../../assets/undraw-images/undraw_teaching_re_g7e3.svg";
import "./Showcase.css";

function Showcase() {
  return (
    <section
      className={`bg-usher-green text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start`}
    >
      <div className={`container`}>
        <div className={`d-sm-flex align-items-center justify-content-between`}>
          <div>
            <h1>USHER TECHNOLOGIES, INC.</h1>
            <p className={`lead`}>USHERING A SAFER AND MORE RESILIENT WORLD</p>
            <button className={`btn btn-blue text-light btn-lg`}>
              Connect with us
            </button>
          </div>
          <img
            className={`img-fluid w-50 d-none d-sm-block`}
            src={undraw_teaching_re_g7e3}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Showcase;
