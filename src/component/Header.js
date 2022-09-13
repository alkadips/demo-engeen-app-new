import React from "react";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <div>
      <div className="gray-back">
        <div className="d-flex gray-header-wrapper">
          <div>
            {" "}
            <TimeToLeaveIcon className="text-secondary" />
          </div>
          <div className="fw-bold ml-3">Find dealer</div>

          <div>
            <PhoneIphoneIcon className="ml-4" />
          </div>
          <div className="fw-bold ml-2">Call</div>

          <div className="call-number fw-bold">18002098282</div>
          <div className="fw-bold">For Any Assistance</div>

          <div>
            <SystemUpdateAltIcon className="ml-5" />
          </div>
          <div className="fw-bold ml-2">Gallery</div>
        </div>
      </div>
      <div className="header">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <div>
                <span className="fw-bold" style={{ color: "white" }}>
                  TATA
                </span>
                <span className="ml-2" style={{ color: "white" }}>
                  MOTORS
                </span>
              </div>
              <div className="connecting-aspi">Connecting Aspirations</div>
            </div>
          </div>
          <div className="border-right-class mt-2 ml-2"></div>
          <span className="fw-bold  mt-1 ml-3 model-name">N</span>
          <span className="fw-bold mt-1 ml-3 model-name">E</span>
          <div className="fw-bold mt-1 ml-3 model-name">X</div>
          <div className="fw-bold mt-1 ml-3 model-name">O</div>
          <div className="fw-bold mt-1 ml-3 model-name">N</div>
          <div className="fw-bold mt-1 ml-3 ev-style">EV</div>
          <div className="mt-1">
            <MenuIcon className="mobile-hamberger-icon" />
          </div>

          <div className="d-flex mid-mobile-header">
            <div className="ml-5 mt-2 overview-color-all ">Overview</div>
            <div className="ml-3 mt-2 overview-color-all">Features & Space</div>
            <div className="ml-3 mt-2 overview-color-all">Charging Locator</div>
          </div>
          <div className="ml-5 mt-2 fw-bold overview-color-all mobile-style">
            Book A Test Drive
          </div>
          <div className="ml-5 mt-2 fw-bold book-now-header mobile-style">
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
}
