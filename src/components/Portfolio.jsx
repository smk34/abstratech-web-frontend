import React from "react";
import { FaArrowRight } from "react-icons/fa";
import workBg from "../assets/workBg.jpg";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";

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
  }
]

const Portfolio = () => {
  return (
    <>
    <Header />
      <section className="work-section">
        <h2 className="work-heading">WORK</h2>

        <div className="work-images">
        {projects.map((item) => (
              <div key={item} className="work-image-container">
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
                  {/* <a href="#" className="overlay-link">
                    VIEW CASE STUDY <FaArrowRight className="tilted-arrow" />
                  </a> */}
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

      <Footer />
    </>
  );
};

export default Portfolio;
