import React from "react";
import { FaArrowRight } from "react-icons/fa";
import workBg from "../assets/workBg.jpg";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";



const Portfolio = () => {
  return (
    <>
    <Header />
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

      <Footer />
    </>
  );
};

export default Portfolio;
