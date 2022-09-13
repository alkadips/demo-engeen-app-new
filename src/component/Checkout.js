import React from "react";
import InfoIcon from "@mui/icons-material/Info";

export default function Checkout() {
  return (
    <div>
      <div className="checkout row">
        <div className="d-flex" style={{ justifyContent: "center" }}>
          <div className="mt-3 border-right-css">
            <div>Nexon EV MAXXZ+Lux</div>
            <div className="selected-varient">Selected Varient</div>
          </div>
          <div className="mt-3 ml-3 border-right-css">
            <div>Intensi-Teal</div>
            <div className="selected-varient">Selected Color</div>
          </div>
          <div className="mt-3 ml-3">
            <div className="d-flex">
              <div style={{ fontStyle: "italic", fontWeight: "bold" }}>
                1934000
              </div>
              <div className="ml-3">
                <InfoIcon
                  data-toggle="modal"
                  data-target="#exampleModal2"
                  className="price-info"
                />
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal2"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              tabindex="-1"
              role="dialog"
            >
              <div class="modal-dialog" role="document">
                <div className="modal-content ex-showroom-price-modal">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body showroom">
                    <div className="fw-bold ex-showroom-price">
                      EX-SHOWROOM PRICE:
                    </div>

                    <div className="d-flex mt-3 ex-price-wrapper">
                      <div>
                        <div style={{ fontSize: "12px" }} className="fw-bold">
                          Nexon EV MAX XZ+ Lux
                        </div>
                        <div style={{ fontSize: "10px" }}>
                          Ex-showroom price
                        </div>
                      </div>
                      <div style={{ fontSize: "11px" }}>₹19 34 000</div>
                    </div>
                    <div className="d-flex ex-price-wrapper">
                      <div style={{ fontSize: "12px" }} className="fw-bold">
                        3.3 kW AC Charger Box
                      </div>
                      <div style={{ fontSize: "11px" }}>Included</div>
                    </div>
                    <div className="d-flex ex-price-wrapper">
                      <div style={{ fontSize: "12px" }} className="fw-bold">
                        Added Accessories (0)
                      </div>
                      <div style={{ fontSize: "11px" }}>₹0</div>
                    </div>
                    <div
                      className="d-flex"
                      style={{
                        justifyContent: "space-between",
                        padding: "10px",
                      }}
                    >
                      <div className="fw-bold">Total Price</div>
                      <div className="fw-bold">₹19 34 000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ fontStyle: "italic" }}>
              Ex-Showroom price + Accessories
            </div>
          </div>

          <div className="mt-3 ml-5">
            <div className="d-flex">
              <div style={{ fontStyle: "italic", fontWeight: "bold" }}>
                21000
              </div>
              <div className="ml-2">
                <InfoIcon
                  data-toggle="modal"
                  data-target="#exampleModal3"
                  className="price-info"
                />
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal3"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              tabindex="-1"
              role="dialog"
            >
              <div class="modal-dialog" role="document">
                <div className="modal-content booking-amount-modal">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close close-button"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body modal-amount">
                    <div className="fw-bold booking-amount">BOOKING AMOUNT</div>

                    <div className="d-flex mt-3 ex-price-wrapper">
                      <div style={{ fontSize: "12px" }} className="fw-bold">
                        Nexon EV MAX XZ+ Lux
                      </div>

                      <div className="fw-bold" style={{ fontSize: "11px" }}>
                        ₹21 000
                      </div>
                    </div>
                    <div className="d-flex ex-price-wrapper">
                      <div style={{ fontSize: "12px" }} className="fw-bold">
                        3.3 kW AC Charger Box
                      </div>
                      <div style={{ fontSize: "11px" }}>Included</div>
                    </div>
                    <div className="d-flex ex-price-wrapper">
                      <div>
                        <div style={{ fontSize: "12px" }} className="fw-bold">
                          Added Accessories (0)
                        </div>
                        <div style={{ fontSize: "10px" }}>
                          30% of the total accessory price will be added to your
                          booking amount
                        </div>
                      </div>
                      <div className="fw-bold" style={{ fontSize: "11px" }}>
                        ₹0
                      </div>
                    </div>
                    <div
                      className="d-flex"
                      style={{
                        justifyContent: "space-between",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "12px" }} className="fw-bold">
                          Amount Payable Now
                        </div>
                        <div style={{ fontSize: "10px" }}>
                          Balance amount will be payable at the selected
                          dealership.
                        </div>
                      </div>
                      <div className="fw-bold" style={{ fontSize: "11px" }}>
                        ₹21 000
                      </div>
                    </div>
                    <div className="book-now-button mt-3 mb-3 fw-bold">
                      BOOK NOW
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ fontStyle: "italic" }}>Booking Amount</div>
          </div>
          <div className="mt-3 ml-5">
            <div
              style={{
                background: "#2497b0",
                padding: "10px 45px 10px 45px",
              }}
            >
              CHECKOUT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
