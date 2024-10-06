import { useEffect, useState, useRef } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { FaStar, FaArrowRight, FaChevronRight } from "react-icons/fa";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import Services from "../layouts/Services/Services";
import "../../src/index.css";
import promoVideo from "../assets/Abstertek_LOGO_RENDER.mp4"; // Correct video import
import partnerLogo from "../assets/partner1.jpg"; // Correct import import
import workBg from "../assets/workBg.jpg";

// dummy review
const reviews = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa modi quis aliquid tenetur eaque quisquam itaque aspernatur atque rem?",
    service: "WEB DEVELOPMENT",
    // name: "John Doe",
    designation: "CEO",
    company: "TECH SOLUITIONS",
  },
  {
    id: 2,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa modi quis aliquid tenetur eaque quisquam itaque aspernatur atque rem?",
    service: "APP DEVELOPMENT",
    // name: "Jane Smith",
    designation: "CTO",
    company: "APP INNOVATORS",
  },
  {
    id: 3,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa modi quis aliquid tenetur eaque quisquam itaque aspernatur atque rem?",
    service: "UI/UX DESIGN",
    // name: "Mike Johnson",
    designation: "PRODUCT MANAGER",
    company: "DESIGN EXPERTS",
  },
];

const HomePage = () => {
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const [isHeadingVisible, setIsHeadingVisible] = useState(true);

  // Review states
  const [currentReview, setCurrentReview] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const startPos = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsHeadingVisible(entry.isIntersecting);
      },
      {
        root: null, // observe within the viewport
        threshold: 0.1, // trigger when 10% of the heading is visible
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  // Review Section Code
  // Auto-slide every 5 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(autoSlide);
  }, []);

  const handleDragStart = (e) => {
    setIsDragging(true);
    startPos.current = e.clientX || e.touches[0].clientX;
  };

  const handleDragEnd = (e) => {
    setIsDragging(false);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    const currentX = e.clientX || e.touches[0].clientX;
    const delta = startPos.current - currentX;

    if (delta > 50) {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    } else if (delta < -50) {
      setCurrentReview(
        (prevReview) => (prevReview - 1 + reviews.length) % reviews.length
      );
    }

    setIsDragging(false);
  };

  return (
    <ParallaxProvider>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-top" ref={headingRef}>
            <h1>
              AWARD WINNING <br /> SOFTWARE DEV <br /> STUDIO
            </h1>

            {/* Parallax Promo Video overlaying h1 */}
            {isHeadingVisible && (
              <Parallax
                className="promo-section"
                speed={-5}
                scale={[0.5, 1]}
                translateY={["-50px", "0px"]}
              >
                <div className="promo-overlay">
                  <div className="video-container">
                    <video
                      width="100%"
                      height="100%"
                      controls
                      loop
                      autoPlay
                      muted
                    >
                      <source src={promoVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </Parallax>
            )}
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
            <div className="btn-container" ref={buttonRef}>
              <a href="#" className="cta-btn">
                LET&#39;S TALK <FaArrowRight />
              </a>
            </div>

            {/* Conditionally render the video beneath the button */}
            {!isHeadingVisible && (
              <div className="video-container">
                <video width="100%" height="100%" controls loop autoPlay muted>
                  <source src={promoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </section>

        {/* Partners Section */}
        <section className="partner-list">
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

        {/* Service */}
        <Services />

        {/* Reviews */}
        <section className="review">
          <h1>REVIEWS</h1>
          <div
            className="review-slider"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseMove={handleDragMove}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            onTouchMove={handleDragMove}
            ref={sliderRef}
          >
            <div className="review-left">
              <p>
                {currentReview + 1} - {reviews.length}
              </p>
            </div>

            <div
              className="review-right"
              style={{ transform: `translateX(${-currentReview * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div className="review-content" key={review.id}>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color="#FFD700" size="2rem" />
                    ))}
                  </div>
                  <p className="review-quote">&quot; {review.quote} &quot;</p>
                  <p className="review-service">{review.service}</p>
                  <p className="review-client">
                    {review.designation} at {review.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ParallaxProvider>
  );
};

export default HomePage;
