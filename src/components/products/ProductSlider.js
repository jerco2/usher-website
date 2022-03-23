import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import erimax from "../../assets/usher/erimax.png";
import mobileapp from "../../assets/usher/mobileapp.png";
import webportal from "../../assets/usher/webportal.png";

function ProductSlider() {
  return (
    <div>
      <Splide
        options={{
          perPage: 2,
          gap: "50px",
          arrows: false,
          fixedWidth: "200px",
          fixedHeight: "300px",
          drag: "free",
          pagination: false,
          padding: 20,
        }}
      >
        <SplideSlide>
          <div className="h-100 w-100 d-flex flex-column shadow-lg">
            <div className="h-50 p-4 d-flex justify-content-center">
              <img className="img-fluid w-75" src={erimax} alt="" />
            </div>

            <h1 className="h-50 ">Erimax</h1>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="h-100 w-100 d-flex flex-column shadow-lg">
            <div className="h-50 w-75 mx-auto p-4 d-flex justify-content-center">
              <img className="mh-100 img-fluid w-75" src={mobileapp} alt="" />
            </div>

            <h1 className="h-50 ">Mobileapp</h1>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="h-100 w-100 d-flex flex-column shadow-lg">
            <div className="h-50 p-4 d-flex justify-content-center">
              <img className="mh-100 img-fluid w-75" src={webportal} alt="" />
            </div>

            <h1 className="h-50 ">Webportal</h1>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default ProductSlider;
