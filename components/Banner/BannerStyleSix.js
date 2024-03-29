import React from "react";
import Link from "next/link";

import bgImg from "../../assets/img/banner/home9.jpg";

const bgStyle = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "grid",
  alignItems: "center",
};

const BannerStyleSix = () => {
  return (
    <React.Fragment>
      {/* <!-- banner section start --> */}
      <div id="rs-banner" className="rs-banner style8" style={bgStyle}>
        <div className="container">
          <div className="banner-content">
            <div className="sl-sub-title">World Leading University</div>
            <h1 className="sl-title">Educavo University In Canada</h1>
            <div className="sl-btn">
              <Link className="readon yellow-btn" to="/about">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- banner section end --> */}
    </React.Fragment>
  );
};

export default BannerStyleSix;
