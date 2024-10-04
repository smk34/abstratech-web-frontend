import React from "react";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import "../../src/index.css";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import promoVideo from "../assets/Abstertek_LOGO_RENDER.mp4"; // Correct video import
import partnerLogo from "../assets/partner1.jpg"; // Correct import import
import workBg from "../assets/workBg.jpg"
import { FaChevronRight } from "react-icons/fa6";

const HomePage = () => {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-top">
            <h1>
              AWARD WINNING <br /> SOFTWARE DEV <br /> STUDIO
            </h1>

            {/* Parallax Promo Video overlaying h1 */}
            <Parallax
              className="promo-section"
              speed={-5} // Adjust speed as necessary for subtle effect
              scale={[0.5, 1]} // Start with 50% size, scale to 100% on scroll
              translateY={["-50px", "0px"]}
            >
              <div className="promo-overlay">
                <video width="100%" height="100%" controls loop autoPlay muted>
                  <source src={promoVideo} type="video/mp4" />
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

        {/* partners section */}
        <section className="partner-list">
          <img className="partner" src={partnerLogo} alt="p1" />
          <img className="partner" src={partnerLogo} alt="p2" />
          <img className="partner" src={partnerLogo} alt="p3" />
          <img className="partner" src={partnerLogo} alt="p4" />
          <img className="partner" src={partnerLogo} alt="p5" />
        </section>

        {/* Mission */}
        <section className="mission">
          <div className="mission-top">
            <h2>MISSION STATEMENT</h2>
          </div>
          <div className="mission-bottom">
            <div className="description">
              <h1>
                We are Abstertek. We are passionate about startups. Let us use
                our experience in the blockchain and Web3 industry to help grow
                and shape your ideas into reality.
              </h1>
              -
            </div>
            <div className="link">
              <a href="">
                LEARN ABOUT <FaChevronRight />
              </a>
            </div>
          </div>
        </section>

        {/* Work */}
        <section className="work-section">
          <h2 className="work-heading">WORK</h2>

          <div className="work-images">
            {[1, 2, 3].map((item) => (
              <div key={item} className="work-image-container">
                <img
                  // src={`https://via.placeholder.com/1064x800.png?text=Project+${item}`}
                  src={workBg}
                  alt={`Project ${item}`}
                  className="work-image"
                />
                <div className="image-overlay">
                  <p className="overlay-title">PROJECT {item} TITLE</p>
                  <p className="overlay-description">
                    THIS IS SHORT DESCRIPTION NUMBER {item}.
                  </p>
                  <a href="#" className="overlay-link">
                    VIEW CASE STUDY <FaArrowRight className="tilted-arrow" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="view-project">
            <button className="view-more-btn">
              VIEW MORE PROJECTS <FaArrowRight className="tilted-arrow" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </ParallaxProvider>
  );
};

export default HomePage;
