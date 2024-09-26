import React from "react";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import "../../src/index.css";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import promoVideo from "../assets/Abstertek_LOGO_RENDER.mp4"; // Correct video import

const HomePage = () => {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-top">
            <h1>
              AWARD WINNING <br /> SOFTWARE DEV <br /> STUDIO
            </h1>

            {/* Parallax Promo Video shifted to the top-center */}
            <Parallax
              className="promo-section top-center-parallax"
              speed={-10}
              scaleX={[0.1, 1]} // Scaling from 20% to 100%
              translateY={["-80px", "0px"]}
            >
              <div className="promo-content full-screen-video">
                {/* Updated the MIME type to match the .webm file */}
                <video width="100%" height="100%" controls loop autoPlay muted>
                  <source
                    src={promoVideo}
                    type="video/mp4" // Updated type
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Parallax>
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
                LET&#39;S TALK <FaArrowRight />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ParallaxProvider>
  );
};

export default HomePage;
