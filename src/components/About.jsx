import React, { useEffect, useRef, useState } from "react";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import "../../src/index.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

function About() {
  let imgPath = "https://techalchemy.com/_next/image?url=https%3A%2F%2Fdv3s2uenh8thy.cloudfront.net%2Fethoventures-about-img.webp&w=1920&q=100"
  const logos = [
    { name: 'W3 Sports', src: 'src/assets/therouteseeker.png' },
    { name: 'Ethoventures', src: 'src/assets/therouteseeker.png' },
    { name: 'Darabase.io', src: 'src/assets/therouteseeker.png' },
    { name: 'Sussed', src: 'src/assets/therouteseeker.png' },
    { name: 'Bando', src: 'src/assets/therouteseeker.png' },
    { name: "Callaghan's", src: 'src/assets/therouteseeker.png' },
    { name: 'Mercore', src: 'src/assets/therouteseeker.png' },
    { name: 'Offjoin', src: 'src/assets/therouteseeker.png' },
    { name: 'Legasea', src: 'src/assets/therouteseeker.png' },
    { name: 'Sequest', src: 'src/assets/therouteseeker.png' },
    { name: 'Kounotori', src: 'src/assets/therouteseeker.png' },
    { name: 'Moviecoin', src: 'src/assets/therouteseeker.png' },
    { name: 'Ocean Bottle', src: 'src/assets/therouteseeker.png' },
    { name: 'Hyper', src: 'src/assets/therouteseeker.png' },
    { name: 'Lineup Polo', src: 'src/assets/therouteseeker.png' },
    { name: 'Perro', src: 'src/assets/therouteseeker.png' },
    { name: 'Are You In', src: 'src/assets/therouteseeker.png' },
    { name: 'Saburati', src: 'src/assets/therouteseeker.png' },
    { name: 'Holly Health', src: 'src/assets/therouteseeker.png' },
    { name: 'Holofy', src: 'src/assets/therouteseeker.png' },
  ]


  const reviews = [
    {
      id: 1,
      quote:
        "I am thrilled with the exceptional website Abstertek created for The Route Seekers! Their team demonstrated professionalism, creativity, and a keen understanding of our vision. The final product exceeds our expectations and is user-friendly. Highly recommended for anyone looking to elevate their online presence",
      //service: "WEB DEVELOPMENT",
      name: "Namrita Singh",
      designation: "Managing Director",
      company: "The Route Seekers",
    },
    {
      id: 2,
      quote:
        "Abstertek has significantly enhanced our digital presence. Their expertise in digital arts has transformed our social media platforms with captivating visuals that engage and resonate with our audience. The team’s creativity and prompt communication make every collaboration a delight. For brands looking to make a lasting impact in the digital space, Abstertek is the ideal partner!”",
      //service: "APP DEVELOPMENT",
      name: "Akshat Kacholia",
      designation: "Managing Director",
      company: "Royal Color Jewels",
    },
    {
      id: 3,
      quote:
        "Abstertek has been a game-changer for us. Their expertise, technical skills, and creative vision brought our website to life in a way we never thought possible. Without their guidance and attention to detail, we would have struggled to create a platform that truly represents our brand. I can’t thank Classified as Highly Confidenial them enough for their support!",
      //service: "UI/UX DESIGN",
      name: "Vaibhav Jha",
      designation: "Founder",
      company: "Pawdrip",
    },
  ];


  // Review states
    const [currentReview, setCurrentReview] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);
    const startPos = useRef(0);
  
   
  
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
    <>
      <Header />
      <main>
        <div className="container text-center">
          <h1 className="title">ABSTERTEK</h1>
          <p className="subtitle">
            We design and develop digital products and services
            <br />
            that drive real business value and improve customer experiences.
          </p>
        </div>
        <div
          className="mt-5"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {/* Rounded Corner Image */}
          <div className="image-container" style={{ borderRadius: "15px" }}>
            <img
              src={imgPath}
              alt="Image 1"
              height={350}
              width={350}
              style={{
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Circular Image */}
          <div className="image-container" style={{ borderRadius: "50%" }}>
            <img
              src={imgPath}
              alt="Image 2"
              height={350}
              width={350}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Custom Shape Image */}
          <div className="image-container" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}>
            <img
              src={imgPath}
              alt="Image 3"
              height={350}
              width={350}
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                objectFit: "cover",
              }}
            />
          </div>
        </div>


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
                  <p className="review-quote text-xl">&quot; {review.quote} &quot;</p>
                  <p className="review-service">{review.service}</p>
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
}

export default About;
