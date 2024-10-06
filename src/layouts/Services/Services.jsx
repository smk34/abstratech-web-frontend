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
              We are experts in web-based applications and infrastructure
              development. Our team will work with you to create robust,
              scalable solutions that drive digital transformation by delivering
              high-performance applications built with efficiency and security
              in mind, which will empower your business to thrive.
            </p>
          </div>
          <div
            className="content-section"
            ref={(el) => (contentSections.current[1] = el)}
          >
            <h1>
              APP <br /> DEVELOPMENT
            </h1>
            <p>
              We specialise in creating captivating and feature-rich mobile
              applications that drive engagement, enhance user experiences, and
              propel your business forward. Whether native, hybrid or web app,
              our tailored range of services are designed to meet your unique
              needs and objectives.
            </p>
          </div>
          <div
            className="content-section"
            ref={(el) => (contentSections.current[2] = el)}
          >
            <h1>
              GRAPHICS <br /> DESIGNING
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore non soluta culpa sequi corporis! Eius maiores odit
              corporis sapiente repellendus quis necessitatibus eveniet libero
              laborum praesentium rerum repudiandae omnis minus culpa corrupti
              maxime reprehenderit, dolor laboriosam. Harum suscipit expedita
              reprehenderit? Animi culpa sint laboriosam aperiam, aliquam
              ratione numquam nulla nam!
            </p>
          </div>
          <div
            className="content-section"
            ref={(el) => (contentSections.current[3] = el)}
          >
            <h1>
              DIGITAL <br /> MARKETING
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis reprehenderit quos alias non unde veniam sit aspernatur
              nobis illo exercitationem, fugiat cupiditate amet repudiandae,
              similique animi ullam omnis ratione deleniti quisquam. Quo eveniet
              quis vitae impedit, earum eaque hic similique labore pariatur est
              accusamus quod inventore et minus ipsum obcaecati?
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
