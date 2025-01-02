import { useEffect, useState, useRef } from "react";
import { FaStar, FaArrowRight, FaChevronRight } from "react-icons/fa";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import Services from "../layouts/Services/Services";
import "../../src/index.css";
import promoVideo from "../assets/Abstertek_LOGO_RENDER.mp4";
import workBg from "../assets/workBg.jpg";

// Data
const reviews = [
  {
    id: 1,
    quote: "I am thrilled with the exceptional website Abstertek created for The Route Seekers! Their team demonstrated professionalism, creativity, and a keen understanding of our vision. The final product exceeds our expectations and is user-friendly. Highly recommended for anyone looking to elevate their online presence",
    name: "Namrita Singh",
    designation: "Managing Director",
    company: "The Route Seekers",
  },
  {
    id: 2,
    quote: "Abstertek has significantly enhanced our digital presence. Their expertise in digital arts has transformed our social media platforms with captivating visuals that engage and resonate with our audience. The team's creativity and prompt communication make every collaboration a delight. For brands looking to make a lasting impact in the digital space, Abstertek is the ideal partner!",
    name: "Akshat Kacholia",
    designation: "Managing Director",
    company: "Royal Color Jewels",
  },
  {
    id: 3,
    quote: "Abstertek has been a game-changer for us. Their expertise, technical skills, and creative vision brought our website to life in a way we never thought possible. Without their guidance and attention to detail, we would have struggled to create a platform that truly represents our brand. I can't thank them enough for their support!",
    name: "Vaibhav Jha",
    designation: "Founder",
    company: "Pawdrip",
  },
];

const projects = [
  {
    url: "src/assets/therouteseeker.png",
    projectTitle: "The RouteSeekers",
    projectDescription: "Tour & Travels",
  },
  {
    url: "",
    projectTitle: "PawDrip",
    projectDescription: "Pet",
  },
  {
    url: "src/assets/your-turn-to-speak.png",
    projectTitle: "Your Turn 2 Speak",
    projectDescription: "Online Meeting Platform",
  },
];

const partner = [
  { url: "src/assets/therouteseekers.png" },
  { url: "src/assets/ROYAL-COLOR-black.png" },
  { url: "src/assets/pawdrip.png" },
  { url: "src/assets/yourturn2speak.png" },
];

const HomePage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFixed, setIsFixed] = useState(true);
  const [videoWidth, setVideoWidth] = useState(200);
  const [videoHeight, setVideoHeight] = useState(112.5);
  const videoRef = useRef(null);
  const partnerListRef = useRef(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const startPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current || !partnerListRef.current) return;

      const scrollPosition = window.scrollY;
      const videoRect = videoRef.current.getBoundingClientRect();
      const partnerListRect = partnerListRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const letsTalkBtn = document.querySelector('.cta-btn');
      const letsTalkBtnRect = letsTalkBtn.getBoundingClientRect();
      const headerHeight = document.querySelector('header').offsetHeight;

      const startScroll = windowHeight / 2;
      const endScroll = partnerListRect.top + scrollPosition - windowHeight;
      const progress = Math.min(
        Math.max((scrollPosition - startScroll) / (endScroll - startScroll), 0),
        1
      );

      setScrollProgress(progress);

      const initialWidth = Math.min(200, windowWidth * 0.2);
      const finalWidth = windowWidth;
      const aspectRatio = 16/9;
      const maxVideoHeight = window.innerHeight * 0.8; // 80% of viewport height
      const maxVideoWidth = windowWidth;


      if (letsTalkBtnRect.bottom <= 0 && progress < 1) {
        setIsFixed(true);
        const newWidth = Math.min(initialWidth + (maxVideoWidth - initialWidth) * progress, maxVideoWidth);
        setVideoWidth(newWidth);
        setVideoHeight(Math.min(newWidth / aspectRatio, maxVideoHeight));
      } else if (progress >= 1) {
        setIsFixed(false);
        setVideoWidth(maxVideoWidth);
        setVideoHeight(Math.min(maxVideoWidth / aspectRatio, maxVideoHeight));
      } else {
        setIsFixed(true);
        setVideoWidth(initialWidth);
        setVideoHeight(Math.min(initialWidth / aspectRatio, maxVideoHeight));
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

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

  const handleDragEnd = () => {
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

  const videoStyle = {
    position: isFixed ? "fixed" : "relative",
    top: isFixed ? (scrollProgress < 1 ? `${30 + scrollProgress * 25}%` : '50%') : "auto",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    width: `${videoWidth}%`,
    height: isFixed ? `min(${videoHeight}px, 100vh)` : `${videoHeight}px`,
    maxWidth: '100%',
    maxHeight: '100vh',
    transition: "all 0.3s ease-out",
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-top">
            <h1>
              NEXT-GEN <br /> SOFTWARE DEV <br /> STUDIO.
            </h1>
          </div>

          <div className="hero-bottom">
            <div className="top-content">
              <div className="content-left">
                <p>
                  <span>REVIEWED ON</span>
                  <span>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} style={{ color: "#FFCC00" }} />
                    ))}
                  </span>
                </p>
                <p>
                  <span>Google</span>
                  <span className="pl-50 lh-2">30 REVIEWS</span>
                </p>
              </div>
              <div className="content-right">
                <p>
                  <span>REVIEWED ON</span>
                  <span>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} style={{ color: "#FFCC00" }} />
                    ))}
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
                We develop and design digital solutions that foster real <br />
                business growth and enhance customer satisfaction.
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
        <div className="video-container" style={{ height: isFixed ? `${window.innerHeight * 1.5}px` : '500px' }}>
          <video
            ref={videoRef}
            style={videoStyle}
            loop
            autoPlay
            muted
            playsInline
          >
            <source src={promoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Partners Section */}
        <section className="partner-list" ref={partnerListRef}>
          {partner.map((item, index) => (
            <div key={index}>
              <img className="partner" src={item.url} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </section>

        {/* Mission Section */}
        <section className="mission">
          <div className="mission-top">
            <h2>MISSION STATEMENT</h2>
          </div>
          <div className="mission-bottom">
            <div className="description">
              <h1>
                We are Abstertek, we are dedicated to empowering businesses and
                startups to thrive in the digital landscape. Our mission is to
                provide digital tailored solutions for you, enabling you to
                focus on what you do best: growing your brand.
              </h1>
            </div>
            <div className="link">
              <a href="">
                LEARN ABOUT US
                <FaChevronRight />
              </a>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section className="work-section">
          <h2 className="work-heading">WORK</h2>

          <div className="work-images">
            {projects.map((item, index) => (
              <div key={index} className="work-image-container">
                <img
                  src={item.url || workBg}
                  alt={`Project ${item.projectTitle}`}
                  className="work-image"
                />
                <div className="image-overlay">
                  <p className="overlay-title">{item.projectTitle}</p>
                  <p className="overlay-description">
                    {item.projectDescription}
                  </p>
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
              {reviews.map((review) => (
                <div className="review-content" key={review.id}>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color="#FFD700" size="2rem" />
                    ))}
                  </div>
                  <p className="review-quote">&quot;{review.quote}&quot;</p>
                  <p className="review-service">{review.name}</p>
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
    </>
  );
};

export default HomePage;

