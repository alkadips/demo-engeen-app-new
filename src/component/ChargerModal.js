import React from "react";

export default function ChargerModal() {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div className="modal-content-style">
            <div class="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <img src="/charger.jpg" style={{ width: "100%" }}></img>
                </div>
                <div className="col-md-6">
                  <div className="fw-bold">3.3 kW AC Charger Box</div>
                  <ul>
                    <li className="text-secondary">
                      Hassle Free plug n play NEXON EV MAX charging solution. It
                      contains a 15A Socket Switch for seamless slow charging of
                      your NEXON EV MAX with a portable charging cable.
                    </li>
                    <li className="text-secondary">
                      Includes an RCBO and OVP in combination to prevent the
                      charger against any electrical hazard.
                    </li>
                    <li className="text-secondary">
                      Features a locking mechanism to prevent unauthorized power
                      use or charging gun theft.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
