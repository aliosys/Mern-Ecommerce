import React from "react";
import anmolLogo from "../assets/dealer-logos/anmol-logo.png";
import mahaLogo from "../assets/dealer-logos/maha-circle-logo.png";

const DealerLogoSlider = () => {
  return (
    <section>
      <div class="dealer-logo-container h-100">
        <div class="row align-items-center h-100">
          <div class="container rounded">
            <h4 class="text-left">Dealership in:</h4>
            <div class="slider">
              <div class="logos">
                <img className="fab" src={anmolLogo} alt="anmol logo" />
                <img
                  className="fab"
                  src={mahaLogo}
                  alt="maharashtra feeds logo"
                />
                <p className="fab">
                  <b>Shalimar Hatchery, Gorakhpur</b>
                </p>
              </div>
              <div class="logos">
                <img className="fab" src={anmolLogo} alt="anmol logo" />
                <img
                  className="fab"
                  src={mahaLogo}
                  alt="maharashtra feeds logo"
                />

                <p className="fab">
                  <b>Shalimar Hatchery, Gorakhpur</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealerLogoSlider;
