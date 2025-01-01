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
        "I am thrilled with the exceptional website Abstertek created for The Route Seekers! Their team demonstrated professionalism, creativity, and a keen understanding of our vision.",
      //service: "WEB DEVELOPMENT",
      name: "Namrita Singh",
      designation: "Managing Director",
      company: "The Route Seekers",
    },
    {
      id: 2,
      quote:
        "I am thrilled with the exceptional website Abstertek created for The Route Seekers! Their team demonstrated professionalism, creativity, and a keen understanding of our vision.",
      //service: "APP DEVELOPMENT",
      name: "Akshat Kacholia",
      designation: "Managing Director",
      company: "Royal Color Jewels",
    },
    {
      id: 3,
      quote:
        "I am thrilled with the exceptional website Abstertek created for The Route Seekers! Their team demonstrated professionalism, creativity, and a keen understanding of our vision.",
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

        <section className="review" style={{ width: '100%', padding: '20px 0', backgroundColor: '#f9f9f9' }}>
  <h1 >OUR CLIENTS</h1>
  <Container>
  <Row
  style={{
    display: "flex",
    justifyContent: "center",
    // padding: "10px", // Optional: Add padding around the row
    margin: "0 auto", // Optional: Center the row
  }}
>
  <Col
    className=""
    style={{
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow
      borderRadius: "8px", // Optional: Add rounded corners
      width: "100%", // Ensure responsive scaling
      maxWidth: "200px", // Limit column width
      height: "100px", // Set fixed height for the column
      margin: "10px",
      display: "flex", // Ensure flex behavior
      alignItems: "center", // Vertically center image
      justifyContent: "center", // Horizontally center image
      border: "1px solid gray", // Border for each column
    }}
  >
    <img
      src={
        "https://techalchemy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fethoventures-light.6f84f779.png&w=1920&q=100"
      }
      alt="Client 1"
      style={{
        width: "100%", // Ensure image is responsive and fits within column
        height: "auto", // Maintain aspect ratio
        maxWidth: "180px", // Optional: Limit image width
        padding: "50px",
      }}
    />
  </Col>
  <Col
    className=""
    style={{
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow
      borderRadius: "8px", // Optional: Add rounded corners
      width: "100%", // Ensure responsive scaling
      maxWidth: "200px", // Limit column width
      height: "100px", // Set fixed height for the column
      margin: "10px",
      display: "flex", // Ensure flex behavior
      alignItems: "center", // Vertically center image
      justifyContent: "center", // Horizontally center image
      border: "1px solid gray", // Border for each column
    }}
  >
    <img
      src={
        "https://techalchemy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fethoventures-light.6f84f779.png&w=1920&q=100"
      }
      alt="Client 2"
      style={{
        width: "100%", // Ensure image is responsive and fits within column
        height: "auto", // Maintain aspect ratio
        maxWidth: "180px", // Optional: Limit image width
        padding: "50px",
      }}
    />
  </Col>
  <Col
    className=""
    style={{
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow
      borderRadius: "8px", // Optional: Add rounded corners
      width: "100%", // Ensure responsive scaling
      maxWidth: "200px", // Limit column width
      height: "100px", // Set fixed height for the column
      margin: "10px",
      display: "flex", // Ensure flex behavior
      alignItems: "center", // Vertically center image
      justifyContent: "center", // Horizontally center image
      border: "1px solid gray", // Border for each column
    }}
  >
    <img
      src={
        "https://techalchemy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fethoventures-light.6f84f779.png&w=1920&q=100"
      }
      alt="Client 3"
      style={{
        width: "100%", // Ensure image is responsive and fits within column
        height: "auto", // Maintain aspect ratio
        maxWidth: "180px", // Optional: Limit image width
        padding: "50px",
      }}
    />
  </Col>
  <Col
    className=""
    style={{
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow
      borderRadius: "8px", // Optional: Add rounded corners
      width: "100%", // Ensure responsive scaling
      maxWidth: "200px", // Limit column width
      height: "100px", // Set fixed height for the column
      margin: "10px",
      display: "flex", // Ensure flex behavior
      alignItems: "center", // Vertically center image
      justifyContent: "center", // Horizontally center image
      border: "1px solid gray", // Border for each column
    }}
  >
    <img
      src={
        "https://techalchemy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fethoventures-light.6f84f779.png&w=1920&q=100"
      }
      alt="Client 4"
      style={{
        width: "100%", // Ensure image is responsive and fits within column
        height: "auto", // Maintain aspect ratio
        maxWidth: "180px", // Optional: Limit image width
        padding: "50px",
      }}
    />
  </Col>
  <Col
    className=""
    style={{
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow
      borderRadius: "8px", // Optional: Add rounded corners
      width: "100%", // Ensure responsive scaling
      maxWidth: "200px", // Limit column width
      height: "100px", // Set fixed height for the column
      margin: "10px",
      display: "flex", // Ensure flex behavior
      alignItems: "center", // Vertically center image
      justifyContent: "center", // Horizontally center image
      border: "1px solid gray", // Border for each column
    }}
  >
    <img
      src={
        "https://techalchemy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fethoventures-light.6f84f779.png&w=1920&q=100"
      }
      alt="Client 5"
      style={{
        width: "100%", // Ensure image is responsive and fits within column
        height: "auto", // Maintain aspect ratio
        maxWidth: "180px", // Optional: Limit image width
        padding: "50px",
      }}
    />
  </Col>
</Row>


</Container>

</section>




       


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
