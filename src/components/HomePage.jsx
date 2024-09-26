import React from "react";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
// import Gallery from "../layouts/Gallery/Gallery";
import "../../src/index.css";
import { FaStar, FaArrowRight } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-top">
            <h1>
              AWARD WINNING <br /> SOFTWARE DEV <br /> STUDIO
            </h1>
          </div>
          <div className="hero-bottom">
            <div className="top-content">
              <div className="content-left">
                <p>
                  <span>REVIEWED ON</span>
                  <span>
                    <FaStar style={{ color: "#FFCC00" }} />
                    <FaStar style={{ color: "#FFCC00" }} />
                    <FaStar style={{ color: "#FFCC00" }} />
                    <FaStar style={{ color: "#FFCC00" }} />
                    <FaStar style={{ color: "#FFCC00" }} />
                  </span>
                </p>
                <p>
                  <span>Clutch</span>
                  <span className="pl-50 lh-2">30 REVIEWS</span>
                </p>
              </div>
              <div className="content-right">
                <p>
                  <span>REVIEWED ON</span>
                  <span>
                    <FaStar style={{ color: "#FFCC00" }} />
                    <FaStar style={{ color: "#FFCC00" }} />
                    <FaStar style={{ color: "#FFCC00" }} />
                    <FaStar style={{ color: "#FFCC00" }} />
                    <FaStar style={{ color: "#FFCC00" }} />
                  </span>
                </p>
                <p>
                  <span>GoodFirms</span>
                  <span className="pl-20 lh-2">18 REVIEWS</span>
                </p>
              </div>
            </div>
            <div className="bottom-content">
              <p>
                We design and develop digital products & services that drive{" "}
                <br />
                real business value & improve customer experiences.
              </p>
            </div>
            {/* Button Section */}
            <div className="btn-container">
              <a href="#" className="cta-btn">
                LET'S TALK <FaArrowRight />
              </a>
            </div>
          </div>
        </section>
        {/* <Gallery /> */}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
