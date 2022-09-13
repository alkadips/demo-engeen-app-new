import React, { useState } from 'react'
import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import InfoIcon from "@mui/icons-material/Info";
export default function CarInfo() {
    const [toggle, setToggle] = useState(false);
  return (
    <div>
         <div className="row mobile-row-car">
          <div className="col-md-6">
            <img className="mt-5 car-img" src="/car.jpg"></img>
            <div className="disclaimer">
              Disclaimer*- Accessories shown on the page are additional fitments
              and not a standard offering on the vehicle. Upon placement of
              order these will be fitted on the vehicle at the dealership.
            </div>
          </div>

          <div className="col-md-6">
            <div className="separator"></div>
            <div className="varient">
              <div className="mt-5 fw-bold select-varient">
                <div className="container-class left">
                  <i className="icon">1</i>
                </div>
                SELECT YOUR VARIENT:
              </div>
              <div className="white-peper mt-3">
                <div
                  className="fw-bold frist-lebal-of-car"
                  onClick={() => setToggle(!toggle)}
                >
                  Nexon EV MAX JET XZ+ Lux
                </div>
                {toggle && <CheckIcon className="check-icon" />}
                {toggle && (
                  <div className="car-feature">
                    <div className="ml-3"> Top Features</div>
                    <div className="ml-3">
                      Over and above Nexon EV MAX XZ+ features{" "}
                    </div>
                    <ul>
                      <li>Electric Sunroof </li>
                      <li>Leatherette Ventilated Front Seats </li>
                      <li> Auto Dimming IRVM </li>
                      <li> Air Purifier</li>
                    </ul>
                  </div>
                )}
                <div
                  onClick={() => setToggle(!toggle)}
                  className="fw-bold frist-lebal-of-car "
                >
                  Nexon EV MAX XZ+ Lux
                </div>
                {toggle && <CheckIcon className="check-icon" />}
                <div className="fw-bold frist-lebal-of-car">
                  Nexon EV MAX XZ+
                </div>
                <div className="fw-bold frist-lebal-of-car">
                  Nexon EV PRIME JET XZ+ Lux
                </div>
                <div className="fw-bold frist-lebal-of-car">
                  Nexon EV PRIME Dark XZ+ Lux
                </div>
                <div className="fw-bold frist-lebal-of-car">
                  Nexon EV PRIME Dark XZ+
                </div>
                <div className="fw-bold frist-lebal-of-car">
                  Nexon EV PRIME XZ+ Lux
                </div>
                <div className="fw-bold frist-lebal-of-car">
                  Nexon EV PRIME XZ+
                </div>
                <div className="fw-bold frist-lebal-of-car">
                  Nexon EV PRIME XM
                </div>
              </div>

              <div className="mt-4 fw-bold select-charger">
                <div className="container-class left">
                  <i className="icon">2</i>
                </div>
                SELECT CHARGER OPTION:
              </div>
              <div className="charger-wrapper d-flex mt-4">
                <div>
                  <RadioButtonUncheckedIcon className="circle-charger" />
                  <button
                    data-toggle="modal"
                    data-target="#exampleModal"
                    className="charger-box "
                  >
                    3.3 kW AC Charger Box
                  </button>
                  <InfoIcon className="info-iconm" />
                </div>
                <div className="charger-unit ml-3">
                  <div>
                    <RadioButtonUncheckedIcon className="circle-charger-faster" />

                    <div className="fast-charger">
                      7.2 kW AC Fast Charger Unit
                    </div>
                    <InfoIcon className="info-iconm-faster" />
                  </div>
                </div>
              </div>
              <div className="mt-4 fw-bold d-flex select-color">
                <div className="container-class left">
                  <i className="icon">3</i>
                </div>
                SELECT YOUR COLOR:
              </div>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <div className="circle-one"></div>
                  <div className="fw-bold color-title">Intensi-Teal</div>
                </div>
                <div>
                  <div className="circle-two"></div>
                  <div className="fw-bold color-title">Pristine White</div>
                </div>
                <div>
                  <div className="circle-three"></div>
                  <div className="fw-bold color-title">Daytona Grey</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
