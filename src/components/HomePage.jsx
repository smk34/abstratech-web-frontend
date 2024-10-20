import React, { useEffect, useState, useRef } from "react";
import { FaStar, FaArrowRight, FaChevronRight } from "react-icons/fa";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import "../../src/index.css";
import promoVideo from "../assets/Abstertek_LOGO_RENDER.mp4";
import partnerLogo from "../assets/partner1.jpg";
import workBg from "../assets/workBg.jpg";

const HomePage = () => {
  const videoRef = useRef(null);
  const videoFixedRef = useRef(null);
  const partnerListRef = useRef(null);
  const [isFixed, setIsFixed] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!partnerListRef.current || !videoRef.current || !videoFixedRef.current) return;

      const scrollPosition = window.scrollY;
      const partnerListRect = partnerListRef.current.getBoundingClientRect();
      const maxScroll = partnerListRect.top + window.scrollY - window.innerHeight;

      // Calculate scroll progress
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);

      if (partnerListRect.top <= window.innerHeight && isFixed) {
        setIsFixed(false);
        videoFixedRef.current.appendChild(videoRef.current);
        videoRef.current.style.position = "relative";
        videoRef.current.style.top = "auto";
        videoRef.current.style.left = "auto";
        videoRef.current.style.transform = "none";
        videoRef.current.style.width = "100%";
        videoRef.current.style.height = "100%";
      } else if (partnerListRect.top > window.innerHeight && !isFixed) {
        setIsFixed(true);
        document.querySelector('.video-container').appendChild(videoRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFixed]);

  const videoSize = isFixed
    ? Math.max(200, 200 + 300 * scrollProgress) // Increase from 200 to 500
    : "100%"; // Height when in video-fixed div

  const videoStyle = isFixed
    ? {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
        width: `${videoSize}px`,
        height: `${videoSize}px`,
        transition: "all 0.3s ease-out",
      }
    : {
        width: "100%",
        height: "100%",
        transition: "all 0.3s ease-out-in",
      };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
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
            <div className="btn-container">
              <a href="#" className="cta-btn">
                LET&#39;S TALK <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <div className="video-container">
          <video
            ref={videoRef}
            style={videoStyle}
            // controls
            loop
            autoPlay
            muted
          >
            <source src={promoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Fixed Div */}
        <div
          ref={videoFixedRef}
          style={{height:"400px",width:"1899px",border:"2px solid red"}}
          className="video-fixed"
        ></div>

        {/* Partners Section */}
        <section className="partner-list" ref={partnerListRef}>
          <img className="partner" src={partnerLogo} alt="p1" />
          <img className="partner" src={partnerLogo} alt="p2" />
          <img className="partner" src={partnerLogo} alt="p3" />
          <img className="partner" src={partnerLogo} alt="p4" />
          <img className="partner" src={partnerLogo} alt="p5" />
        </section>

        {/* Mission Section */}
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
            </div>
            <div className="link">
              <a href="">
                LEARN ABOUT <FaChevronRight />
              </a>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section className="work-section">
          <h2 className="work-heading">WORK</h2>

          <div className="work-images">
            {[1, 2, 3].map((item) => (
              <div key={item} className="work-image-container">
                <img
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
    </>
  );
};

export default HomePage;
