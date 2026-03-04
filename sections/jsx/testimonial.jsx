import React from "react";
import "../css/testimonial.css";
//gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Testimonial = () => {
  useGSAP(()=>{
    gsap.from('.case-card-container',{
      y:100,
      opacity:0,
      duration:0.6,
      stagger:0.2,
      scrollTrigger:{
        trigger:"#testimonial",
        start:"top 60%",
        end:"bottom 40%",
        scrub:false
      }
    })
  })
  return (
    <section className="case-section d-flex align-items-center" id="testimonial">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="case-title">
            Investor Success Case Studies
          </h2>
          <p className="case-subtitle">
            Real results delivered through strategic real estate advisory.
          </p>
        </div>

        <div
          id="caseCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4500"
        >
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row g-4">

                <div className="col-lg-4 case-card-container">
                  <div className="case-card">
                    <img
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                      alt=""
                      className="case-img"
                    />
                    <div className="case-content">
                      <h5>Commercial Asset Optimization</h5>
                      <p>
                        Increased portfolio value by 28% through strategic
                        acquisition and capital restructuring.
                      </p>
                      <span className="case-link">View Case Study →</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 case-card-container">
                  <div className="case-card">
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                      alt=""
                      className="case-img"
                    />
                    <div className="case-content">
                      <h5>Luxury Residential Investment</h5>
                      <p>
                        Delivered high-yield luxury property investment with
                        strong appreciation growth.
                      </p>
                      <span className="case-link">View Case Study →</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 case-card-container">
                  <div className="case-card">
                    <img
                      src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
                      alt=""
                      className="case-img"
                    />
                    <div className="case-content">
                      <h5>Portfolio Diversification Strategy</h5>
                      <p>
                        Reduced investor risk by 35% through diversified
                        asset allocation planning.
                      </p>
                      <span className="case-link">View Case Study →</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row g-4">

                <div className="col-lg-4 case-card-container">
                  <div className="case-card">
                    <img
                      src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
                      alt=""
                      className="case-img"
                    />
                    <div className="case-content">
                      <h5>High-Net-Worth Client Advisory</h5>
                      <p>
                        Structured long-term real estate wealth strategy for
                        premium investor group.
                      </p>
                      <span className="case-link">View Case Study →</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 case-card-container">
                  <div className="case-card">
                    <img
                      src="https://images.unsplash.com/photo-1605146768851-eda79da39897"
                      alt=""
                      className="case-img"
                    />
                    <div className="case-content">
                      <h5>Commercial Expansion Planning</h5>
                      <p>
                        Guided expansion into high-demand commercial corridors
                        with strategic forecasting.
                      </p>
                      <span className="case-link">View Case Study →</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 case-card-container">
                  <div className="case-card">
                    <img
                      src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
                      alt=""
                      className="case-img"
                    />
                    <div className="case-content">
                      <h5>Acquisition & Risk Mitigation</h5>
                      <p>
                        Complete due diligence and negotiation strategy that
                        ensured secure acquisition.
                      </p>
                      <span className="case-link">View Case Study →</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#caseCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon custom-arrow"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#caseCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon custom-arrow"></span>
          </button>

        </div>

      </div>
    </section>
  );
};