import React from "react";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import "../../src/index.css";

function About() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1 className="title">ABSTERTEK</h1>
          <p className="subtitle">
            We design and develop digital products and services
            <br />
            that drive real business value and improve customer experiences.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
