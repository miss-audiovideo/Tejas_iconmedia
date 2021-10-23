import React from "react";
import Brand from "./Brand";
import Allstate from "./images/Allstate.png";
import Darkbean from "./images/Darkbean.png";
import mistyvalley from "./images/mistyvalley.png";
import pantheraazul from "./images/pantheraazul.png";
import remax from "./images/RE_MAX.png";
import snapfit from "./images/snapfit.png";
import studio97 from "./images/studio97.png";
import subway from "./images/Subway.png";
import nozzle from "./images/Nozzle.png";
import hudsonwatches from "./images/Hudson Watches.png";
import "../Brands.css";

const Brands = () => {
  return (
    <>
      <div>
        <br />
        <br />
        <h1 className="brand-line text-center pt-lg-5 pb-lg-4 animate__animated animate__jackInTheBox animate__delay-10s ">
          Leading Brands
        </h1>
        <div className="brands">
          {/* container-fluid d-flex justify-content-center align-items-center flex-wrap mt-lg-4 mb-lg-4 brand-names mx-auto w-100 */}
          {/* py-lg-3 text-center brand-common */}
          <Brand
            // name={"Rinnai"}
            src={Allstate}
            class="py-lg-3 text-brands-img first-brand animate__animated animate__bounce  animate__infinite animate__slower"
          />
          <Brand
            src={Darkbean}
            class="py-lg-3 text-brands-img second-brand animate__animated animate__bounce "
          />

          <Brand
            src={mistyvalley}
            class=" third-brand animate__animated animate__bounce animate__infinite animate__slower"
          />
          <Brand
            src={pantheraazul}
            class="brands-img brand-common fourth-brand animate__animated animate__bounce"
          />
          <Brand
            src={remax}
            class="brands-img brand-common fifth-brand animate__animated animate__bounce animate__infinite animate__slower"
          />
          <Brand
            src={snapfit}
            class="brands-img brand-common sixth-brand animate__animated animate__bounce"
          />
          <Brand
            src={studio97}
            class="brands-img brand-common seventh-brand animate__animated animate__bounce animate__infinite animate__slower"
          />
          <Brand
            src={subway}
            class="brands-img brand-common eightth-brand animate__animated animate__bounce"
          />
          <Brand
            src={nozzle}
            class="brands-img brand-common ninth-brand animate__animated animate__bounce animate__infinite animate__slower"
          />
          <Brand
            src={hudsonwatches}
            class="brands-img brand-common tenth-brand animate__animated animate__bounce"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Brands;
