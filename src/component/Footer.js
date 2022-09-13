import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="border-rop-css"></div>
        <div className="d-flex social-icon">
          <div>
            <FacebookIcon className="ml-3 social-icon-size " />

            <TwitterIcon className="ml-3 social-icon-size" />

            <InstagramIcon className="ml-3 social-icon-size" />

            <YouTubeIcon className="ml-3 social-icon-size" />
          </div>
          <div className="footer-nav d-flex">
            <div className="footer-navlink"> FAQS</div>
            <div className="footer-navlink">PRIVACY POLICY</div>
            <div className="footer-navlink" style={{ border: "none" }}>
              TERMS AND CONDITIONS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
