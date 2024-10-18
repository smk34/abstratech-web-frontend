import { useState, useEffect, useRef } from "react";
import "./Services.css";
import { FaChevronRight } from "react-icons/fa";

const ScrollSection = () => {
  const [counter, setCounter] = useState(1); // Start counter at 1
  const rightPartRef = useRef(null);
  const contentSections = useRef([]);

  // Function to detect the section currently in view and update the counter
  const handleScroll = () => {
    const rightPart = rightPartRef.current;
    const windowHeight = window.innerHeight;

    contentSections.current.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      // Check if the section is in the viewport (centered in view)
      if (sectionTop < windowHeight / 2 && sectionBottom > windowHeight / 2) {
        setCounter(index + 1); // Update counter based on section number
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div className="heading">
        <h1>SERVICES</h1>
      </div>
      <div className="scroll-section">
        <div className="left-part">
          <div className="counter">0{counter}</div>
        </div>
        <div className="right-part" ref={rightPartRef}>
          <div
            className="content-section"
            ref={(el) => (contentSections.current[0] = el)}
          >
            <h1>
              WEB <br /> DEVELOPMENT
            </h1>
            <p>
              We specialize in developing web-based applications and IT infrastructure.
              Our team collaborates with you to design scalable, robust solutions that
              accelerate digital transformation. By delivering secure, high-performance
              applications, we empower your business to grow and succeed efficiently.
            </p>
          </div>
          <div
            className="content-section"
            ref={(el) => (contentSections.current[1] = el)}
          >
            <h1>
              DIGITAL <br /> MARKETING
            </h1>
            <p>
              We excel in digital arts and marketing, working closely with you to craft
              creative, impactful solutions that amplify your brand. Our team delivers
              visually stunning content and strategic campaigns designed to engage your
              audience, drive growth, and elevate your business in today’s digital
              landscape.
            </p>
          </div>
          <div
            className="content-section"
            ref={(el) => (contentSections.current[2] = el)}
          >
            <h1>
              APP  <br /> DEVELOPMENT
            </h1>
            <p>
              We specialize in app development, creating intuitive, high-performance
              mobile and web applications tailored to your business needs. Our team
              focuses on delivering scalable, secure, and user-friendly apps that enhance
              customer engagement and drive business growth, ensuring your app stands
              out in the competitive digital space.
            </p>
          </div>
          <div
            className="content-section"
            ref={(el) => (contentSections.current[3] = el)}
          >
            <h1>
              SOFTWARE <br /> DEVELOPMENT
            </h1>
            <p>
              We are experts in software development, building customized, efficient, and
              scalable solutions to meet your business objectives. Our team combines
              innovation with technical expertise to deliver high-quality software that
              enhances productivity, ensures security, and drives sustainable growth for
              your business.
            </p>

          </div>

          <div
            className="content-section"
            ref={(el) => (contentSections.current[4] = el)}
          >
            <h1>
              AI <br /> DEVELOPMENT
            </h1>
            <p>
              We specialize in AI development, creating intelligent, data-driven solutions
              that enhance automation and decision-making. Our team harnesses the
              power of artificial intelligence to build innovative systems that optimize
              business processes, improve efficiency, and drive smarter outcomes for your
              organization.
            </p>

            <div className="sevice-link">
              <a href="">
                VIEW ALL SERVICES <FaChevronRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollSection;
