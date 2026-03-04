import React from "react";
import "../css/service.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Service = () => {

  useGSAP(() => {

    const blocks = gsap.utils.toArray(".service-block");

    blocks.forEach((block, index) => {

      const image = block.querySelector(".anim-image");
      const textContent = block.querySelectorAll(".anim-text");
      const listItems = block.querySelectorAll(".anim-list li");
      const button = block.querySelector(".anim-btn");

      const direction = index % 2 === 0 ? -120 : 120;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: "top 75%",
                  }
      });

      tl.from(image, {
        x: direction,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out"
      })
      .from(textContent, {
        x: -direction,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.6")
      .from(listItems, {
        y: 30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.4")
      .from(button, {
        opacity: 0,
        duration: 0.4
      }, "-=0.2");

    });

  }, { scope: "#service" });

  return (
    <section className="services-section py-5" id="service">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center my-5">
          <h2 className="services-title my-5">Our Services</h2>
          <p className="services-subtitle">
            Comprehensive real estate advisory solutions designed to help investors
            build, manage, and grow high-performing property portfolios.
          </p>
        </div>

        {/* Service Block 1 */}
        <div className="row align-items-center mb-5 service-block">

          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="service-image-wrapper anim-image">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                alt="Investment Strategy"
                className="img-fluid service-image"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <h3 className="service-heading anim-text">
              Investment Strategy Advisory
            </h3>

            <p className="service-description anim-text">
              We provide data-driven property investment strategies focused on
              long-term value creation and risk mitigation.
            </p>

            <ul className="service-list anim-list">
              <li>Market opportunity assessment</li>
              <li>Risk profiling & asset allocation</li>
              <li>High-yield property identification</li>
              <li>Capital growth forecasting</li>
              <li>Portfolio diversification planning</li>
              <li>ROI performance modeling</li>
            </ul>

            <a href="#" className="btn service-btn mt-3 anim-btn">
              Learn More
            </a>
          </div>
        </div>

        {/* Service Block 2 */}
        <div className="row align-items-center flex-lg-row-reverse service-block">

          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="service-image-wrapper anim-image">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Property Acquisition"
                className="img-fluid service-image"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <h3 className="service-heading anim-text">
              Acquisition & Due Diligence
            </h3>

            <p className="service-description anim-text">
              End-to-end evaluation and transaction support ensuring secure,
              informed property acquisitions.
            </p>

            <ul className="service-list anim-list">
              <li>Property valuation & analysis</li>
              <li>Legal & compliance review</li>
              <li>Financial feasibility assessment</li>
              <li>Site inspection & structural review</li>
              <li>Negotiation strategy support</li>
              <li>Transaction coordination</li>
            </ul>

            <a href="#" className="btn service-btn mt-3 anim-btn">
              Learn More
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};